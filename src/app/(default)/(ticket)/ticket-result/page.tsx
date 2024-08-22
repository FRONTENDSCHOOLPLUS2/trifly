import { auth } from "@/auth";
import SearchInfo from "@/components/TicketSearch/SearchInfo";
import fetchAuth from "@/data/fetch/fetchAuth";
import { fetchCodes } from "@/data/fetch/fetchCode";
import {
  AirlineData,
  AirportData,
  OffersSearch,
  OffersSearchData,
} from "@/types";
import Image from "next/image";
import "./result.scss";
import TicketResultList from "./TicketResultList";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;

interface IPageProps {
  searchParams: {
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: string;
    returnDate?: string;
    adults: string;
    children?: string;
    infants?: string;
    nonStop?: string;
    travelClass?: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
    currencyCode: "KRW";
  };
}

const fetchTicketSearch = async (
  query: string,
): Promise<OffersSearchData[]> => {
  let accessToken = await fetchAuth();

  const url = `${AMADEUS_API_SERVER}/v2/shopping/flight-offers?${query}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 401) {
      accessToken = await fetchAuth();

      const reRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const reResJson: OffersSearch = await reRes.json();

      if (!reResJson.meta) {
        throw new Error("검색에 실패했습니다.");
      }

      return reResJson.data;
    }

    const resJson: OffersSearch = await res.json();

    if (!resJson.meta) {
      throw new Error("검색에 실패했습니다.");
    }

    return resJson.data;
  } catch (e) {
    console.error(e);
    throw new Error("오류가 발생했습니다.");
  }
};

const TicketResult = async ({ searchParams }: IPageProps) => {
  const session = await auth();
  const user = !!session?.user;

  const { code, airportCode } = await fetchCodes<AirportData>();
  const { code: airline } = await fetchCodes<AirlineData>();
  const queryString = new URLSearchParams(searchParams).toString();
  const data = await fetchTicketSearch(queryString);
  // console.log(await fetchTicketSearch(queryString));

  /* -------------------------------------------------------------------------- */
  /*                 carrierCode가 validCarrierCodes에 포함된 객체만 필터링           */
  /* -------------------------------------------------------------------------- */
  const filteredData = data.filter((offer) =>
    offer.itineraries.some((itinerary) =>
      itinerary.segments.some((segment) =>
        Object.keys(airline).includes(segment.carrierCode),
      ),
    ),
  );

  return (
    <>
      <div className="result">
        <h2 className="hidden">항공권 검색 결과</h2>
        <section className="search-info full-width">
          <h3 className="hidden">항공권 검색 정보</h3>
          <SearchInfo code={code} airport={airportCode} />
        </section>

        <section className="search-result full-width">
          <div className="search-result-layout">
            <h3 className="hidden">항공권 검색 결과</h3>
            <div className="search-filter pc">
              <h3 className="hidden">필터</h3>
              <div>필터</div>
            </div>
            {filteredData.length ? (
              <div className="search-result-list">
                <h3 className="hidden">{filteredData.length}개의 검색 결과</h3>

                <div className="result-list-header">
                  <div className="result-list-text">
                    <p className="result-list-title">
                      검색결과 총 <span>{filteredData.length}</span>건
                    </p>
                    <p className="result-list-description">
                      성인 1인 기준{" "}
                      {searchParams.returnDate ? "왕복 " : "편도 "}
                      요금입니다. <span>(세금 및 수수료 모두 포함)</span>
                    </p>
                  </div>

                  <div className="result-list-sort pc">
                    <label className="hidden" htmlFor="sorting">
                      항공권 정렬
                    </label>
                    <select className="sorting" name="sorting" id="sorting">
                      <option value="priceLow">가격 낮은 순</option>
                      <option value="durationShort">비행시간 짧은 순</option>
                      <option value="depDepTime">
                        가는날 출발시간 빠른 순
                      </option>
                      <option value="returnDepTime">
                        오는날 출발시간 빠른 순
                      </option>
                      <option value="depArrTime">
                        가는날 도착시간 빠른 순
                      </option>
                      <option value="returnArrTime">
                        오는날 도착시간 빠른 순
                      </option>
                    </select>
                  </div>
                </div>

                <TicketResultList
                  user={user}
                  data={filteredData}
                  airline={airline}
                />
              </div>
            ) : (
              <div className="no-search-result">
                <div className="img-box">
                  <Image
                    src="/img/icon-no-result.svg"
                    alt="검색 결과 없음"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </div>
                <div className="no-result-message">
                  <p className="no-result-title">항공권을 찾을 수 없습니다.</p>
                  <p className="no-result-description">
                    조건에 맞는 항공편을 다시 검색해보세요.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <button className="filter-button" type="button">
        <div className="img-box">
          <Image
            src="/img/icon-filter.svg"
            alt="필터"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <span>필터</span>
      </button>
    </>
  );
};

export default TicketResult;

import SearchInfo from "@/components/TicketSearch/SearchInfo";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData, OffersSearch } from "@/types";
import "./result.scss";
import { ITokenSuccess } from "@/types/amadeus";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;
const AMADEUS_CLIENT_ID = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID;
const AMADEUS_CLIENT_SECRET = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET;

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

const fetchAuth = async (): Promise<string> => {
  const url = `${AMADEUS_API_SERVER}/v1/security/oauth2/token`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: AMADEUS_CLIENT_ID,
      client_secret: AMADEUS_CLIENT_SECRET,
    }),
    next: { revalidate: 60000 },
  });

  const resJson: ITokenSuccess = await res.json();

  if (!resJson.access_token) {
    throw new Error("Amadeus access_token을 불러올 수 없습니다!");
  }

  const accessToken = resJson.access_token;

  return accessToken;
};

const fetchTicketSearch = async (query: string): Promise<OffersSearch> => {
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

      return reResJson;
    }

    const resJson: OffersSearch = await res.json();

    if (!resJson.meta) {
      throw new Error("검색에 실패했습니다.");
    }

    return resJson;
  } catch (e) {
    throw new Error("오류가 발생했습니다.");
  }
};

const TicketResult = async ({ searchParams }: IPageProps) => {
  const { code, airportCode } = await fetchCodes<AirportData>();
  const queryString = new URLSearchParams(searchParams).toString();
  const data = await fetchTicketSearch(queryString);

  return (
    <div className="result">
      <h2 className="hidden">항공권 검색 결과</h2>
      <section className="search-info full-width">
        <h3 className="hidden">항공권 검색 정보</h3>
        <SearchInfo code={code} airport={airportCode} />
      </section>

      <section className="search-result">
        <h3 className="hidden">항공권 검색 결과</h3>
        <div className="search-filter">
          <h3 className="hidden">필터</h3>
        </div>
        <div className="search-result-list">
          <h3 className="hidden">{data.data.length}개의 검색 결과</h3>
        </div>
      </section>
    </div>
  );
};

export default TicketResult;

"use client";

import { searchResultState } from "@/atoms/atoms";
import Button from "@/components/Button/Button";
import { AirlineData, CodeState, OffersSearchData } from "@/types";
import Image from "next/image";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Filter from "./Filter";
import Sorting from "./Sorting";
import TicketResultList from "./TicketResultList";
import { useSearchParams } from "next/navigation";

export interface IFilterProps {
  nonStop?: boolean;
  originDepTime?: number[];
  originArrTime?: number[];
  returnDepTime?: number[];
  returnArrTime?: number[];
  airline?: string[];
  maxPrice?: number;
}

const Result = ({
  user,
  data,
  airline,
  returnDate,
}: {
  user: boolean;
  data: OffersSearchData[];
  airline: CodeState<AirlineData>;
  returnDate?: string;
}) => {
  const searchResult = useRecoilValue(searchResultState);
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState<IFilterProps>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const nonStop = searchParams.get("nonStop") || "";

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  /* -------------------------------------------------------------------------- */
  /*                           항공편 조회 결과에 해당하는 항공사만 추출                  */
  /* -------------------------------------------------------------------------- */
  const extractCarrierCodes = (offers: OffersSearchData[]) => {
    if (offers) {
      return offers.flatMap((offer) =>
        offer.itineraries.flatMap((itinerary) =>
          itinerary.segments.map((segment) => segment.carrierCode),
        ),
      );
    }

    return null;
  };

  // carrierCodes 배열
  const carrierCodes = [...new Set(extractCarrierCodes(data))];

  const handleFilterChange = useCallback((newFilters: IFilterProps) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  }, []);

  const applyFilters = () => {
    let newFilteredData = [...data];

    if (filters) {
      // 직항 필터
      if (filters.nonStop) {
        newFilteredData = newFilteredData.filter((offer) =>
          offer.itineraries.every(
            (itinerary) => itinerary.segments.length === 1,
          ),
        );
      }

      // 시간 필터
      if (filters.originDepTime) {
        const { originDepTime } = filters;

        newFilteredData = newFilteredData.filter((offer) => {
          const departureTime = new Date(
            offer.itineraries[0].segments[0].departure.at,
          ).getHours();

          return originDepTime.some(
            (timeRange) =>
              departureTime >= timeRange - 6 && departureTime < timeRange,
          );
        });
      }

      if (returnDate) {
        if (filters.returnDepTime) {
          const { returnDepTime } = filters;

          newFilteredData = newFilteredData.filter((offer) => {
            const departureTime = new Date(
              offer.itineraries[1].segments[0].departure.at,
            ).getHours();

            return returnDepTime.some(
              (timeRange) =>
                departureTime >= timeRange - 6 && departureTime < timeRange,
            );
          });
        }
      }

      if (filters.originArrTime) {
        const { originArrTime } = filters;

        newFilteredData = newFilteredData.filter((offer) => {
          const segmentsLength = offer.itineraries[0].segments.length;
          const arrTime = new Date(
            offer.itineraries[0].segments[segmentsLength - 1].arrival.at,
          ).getHours();

          return originArrTime.some(
            (timeRange) => arrTime >= timeRange - 6 && arrTime < timeRange,
          );
        });
      }

      if (searchResult.tripType === "round") {
        if (filters.returnArrTime) {
          const { returnArrTime } = filters;
          newFilteredData = newFilteredData.filter((offer) => {
            const segmentsLength = offer.itineraries[1].segments.length;
            const arrTime = new Date(
              offer.itineraries[1].segments[segmentsLength - 1].arrival.at,
            ).getHours();

            return returnArrTime.some(
              (timeRange) => arrTime >= timeRange - 6 && arrTime < timeRange,
            );
          });
        }
      }

      // 항공사 필터
      if (filters.airline) {
        const airlines = filters.airline;
        newFilteredData = newFilteredData.filter((offer) =>
          offer.itineraries.every((itinerary) =>
            itinerary.segments.every((segment) =>
              airlines.includes(segment.carrierCode),
            ),
          ),
        );
      }

      // 가격 필터
      if (filters.maxPrice) {
        const { maxPrice } = filters;

        if (filters.maxPrice < 5000000) {
          newFilteredData = newFilteredData.filter(
            (offer) => Number(offer.price.grandTotal) < maxPrice,
          );
        }
      }

      setFilteredData(newFilteredData);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  function convertToMinutes(duration: string) {
    const timePattern = /PT(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = duration.match(timePattern);

    const hours = matches?.[1] ? parseInt(matches[1], 10) : 0;
    const minutes = matches?.[2] ? parseInt(matches[2], 10) : 0;

    return hours * 60 + minutes;
  }

  const handleSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    const sortedData = [...filteredData];

    switch (sortBy) {
      case "priceLow":
        sortedData.sort(
          (a, b) => Number(a.price.grandTotal) - Number(b.price.grandTotal),
        );
        break;
      case "durationShort":
        sortedData.sort((a, b) => {
          const durationA = a.itineraries.reduce(
            (acc, itinerary) =>
              acc +
              itinerary.segments.reduce(
                (segAcc, segment) =>
                  segAcc + convertToMinutes(segment.duration),
                0,
              ),
            0,
          );

          const durationB = b.itineraries.reduce(
            (acc, itinerary) =>
              acc +
              itinerary.segments.reduce(
                (segAcc, segment) =>
                  segAcc + convertToMinutes(segment.duration),
                0,
              ),
            0,
          );

          if (durationA !== durationB) {
            return durationA - durationB;
          }

          const priceA = Number(a.price.grandTotal);
          const priceB = Number(b.price.grandTotal);

          return priceA - priceB;
        });
        break;
      case "depDepTime":
        sortedData.sort((a, b) => {
          const depTimeA = new Date(
            a.itineraries[0].segments[0].departure.at,
          ).getTime();
          const depTimeB = new Date(
            b.itineraries[0].segments[0].departure.at,
          ).getTime();

          if (depTimeA !== depTimeB) {
            return depTimeA - depTimeB;
          }

          const priceA = Number(a.price.grandTotal);
          const priceB = Number(b.price.grandTotal);

          return priceA - priceB;
        });
        break;
      case "returnDepTime":
        sortedData.sort((a, b) => {
          const depTimeA = new Date(
            a.itineraries[1].segments[0].departure.at,
          ).getTime();
          const depTimeB = new Date(
            b.itineraries[1].segments[0].departure.at,
          ).getTime();

          if (depTimeA !== depTimeB) {
            return depTimeA - depTimeB;
          }

          const priceA = Number(a.price.grandTotal);
          const priceB = Number(b.price.grandTotal);

          return priceA - priceB;
        });
        break;
      case "depArrTime":
        sortedData.sort((a, b) => {
          const stopA = a.itineraries[0].segments.length;
          const stopB = b.itineraries[0].segments.length;

          const arrTimeA = new Date(
            a.itineraries[0].segments[stopA - 1].arrival.at,
          ).getTime();
          const arrTimeB = new Date(
            b.itineraries[0].segments[stopB - 1].arrival.at,
          ).getTime();

          if (arrTimeA !== arrTimeB) {
            return arrTimeA - arrTimeB;
          }

          const priceA = Number(a.price.grandTotal);
          const priceB = Number(b.price.grandTotal);

          return priceA - priceB;
        });
        break;
      case "returnArrTime":
        sortedData.sort((a, b) => {
          const stopA = a.itineraries[1].segments.length;
          const stopB = b.itineraries[1].segments.length;

          const arrTimeA = new Date(
            a.itineraries[1].segments[stopA - 1].arrival.at,
          ).getTime();
          const arrTimeB = new Date(
            b.itineraries[1].segments[stopB - 1].arrival.at,
          ).getTime();

          if (arrTimeA !== arrTimeB) {
            return arrTimeA - arrTimeB;
          }

          const priceA = Number(a.price.grandTotal);
          const priceB = Number(b.price.grandTotal);

          return priceA - priceB;
        });
        break;
      default:
        sortedData.sort(
          (a, b) => Number(a.price.grandTotal) - Number(b.price.grandTotal),
        );
        break;
    }

    setFilteredData(sortedData);
  };

  useEffect(() => {
    if (isFilterOpen) {
      document
        .querySelector("html")!
        .setAttribute("style", "overflow: hidden;");
    } else {
      document.querySelector("html")!.removeAttribute("style");
    }
  }, [isFilterOpen]);

  return (
    <section className="search-result">
      <div className="search-result-layout">
        <h3 className="hidden">항공권 검색 결과</h3>

        <div className={`search-filter ${isFilterOpen && "is-active"}`}>
          <h4 className="hidden">필터</h4>

          <div className="mobile-filter-header mo">
            <h4>정렬 및 필터</h4>
            <button
              className="close-button"
              onClick={() => setIsFilterOpen(false)}
            >
              <div className="img-box">
                <Image
                  src="/img/icon-close-black.svg"
                  alt="닫기"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>
              <span className="hidden">필터 닫기</span>
            </button>
          </div>
          <div className="mobile-filter-container">
            <Sorting
              handleSorting={handleSorting}
              tripType={returnDate ? "round" : "oneway"}
            />

            <Filter
              airline={airline}
              carrierCodes={carrierCodes}
              tripType={returnDate ? "round" : "oneway"}
              nonStop={nonStop ? true : false}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="mobile-filter-done mo">
            <Button size="full" onClick={() => setIsFilterOpen(false)}>
              선택 완료
            </Button>
          </div>
        </div>

        {filteredData.length ? (
          <div className="search-result-list">
            <div className="result-list-header">
              <div className="result-list-text">
                <p className="result-list-title">
                  검색결과 총 <span>{filteredData.length}</span>건
                </p>
                <p className="result-list-description">
                  성인 1인 기준 {returnDate ? "왕복 " : "편도 "}
                  요금입니다. <span>(세금 및 수수료 모두 포함)</span>
                </p>
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

      {!isFilterOpen && (
        <button
          className="filter-button"
          type="button"
          onClick={() => setIsFilterOpen(true)}
        >
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
      )}
    </section>
  );
};

export default Result;

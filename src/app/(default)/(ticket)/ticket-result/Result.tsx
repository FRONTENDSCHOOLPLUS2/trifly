"use client";

import { searchResultState } from "@/atoms/atoms";
import { AirlineData, CodeState, OffersSearchData } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Filter from "./Filter";
import TicketResultList from "./TicketResultList";

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
  };

  // carrierCodes 배열
  const carrierCodes = [...new Set(extractCarrierCodes(data))].sort((a, b) =>
    airline[a].nameKor.localeCompare(airline[b].nameKor),
  );

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
        const originDepTime = filters.originDepTime;

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

      if (searchResult.tripType === "round") {
        if (filters.returnDepTime) {
          const returnDepTime = filters.returnDepTime;

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
        const originArrTime = filters.originArrTime;

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
          const returnArrTime = filters.returnArrTime;
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
        const maxPrice = filters.maxPrice;

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

  return (
    <section className="search-result full-width">
      <div className="search-result-layout">
        <h3 className="hidden">항공권 검색 결과</h3>
        <div className="search-filter pc">
          <h3 className="hidden">필터</h3>
          <div>
            <Filter
              data={data}
              airline={airline}
              carrierCodes={carrierCodes}
              tripType={searchResult.tripType}
              nonStop={searchResult.nonStop}
              handleFilterChange={handleFilterChange}
            />
          </div>
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
                  성인 1인 기준 {returnDate ? "왕복 " : "편도 "}
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
                  <option value="depDepTime">가는날 출발시간 빠른 순</option>
                  <option value="returnDepTime">오는날 출발시간 빠른 순</option>
                  <option value="depArrTime">가는날 도착시간 빠른 순</option>
                  <option value="returnArrTime">오는날 도착시간 빠른 순</option>
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
    </section>
  );
};

export default Result;

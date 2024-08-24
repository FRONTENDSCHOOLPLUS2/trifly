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
  originDepTime?: string;
  originArrTime?: string;
  returnDepTime?: string;
  returnArrTime?: string;
  airline?: string;
  maxPrice?: string;
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

  const handleFilterChange = useCallback((newFilters: IFilterProps) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  }, []);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <section className="search-result full-width">
      <div className="search-result-layout">
        <h3 className="hidden">항공권 검색 결과</h3>
        <div className="search-filter pc">
          <h3 className="hidden">필터</h3>
          <div>
            <Filter
              tripType={searchResult.tripType}
              nonStop={searchResult.nonStop}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
        {data.length ? (
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

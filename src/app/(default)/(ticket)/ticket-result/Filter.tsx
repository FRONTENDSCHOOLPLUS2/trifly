"use client";

import { FilterProps } from "@/atoms/atoms";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import AirlineFilter from "@/components/Filters/AirlineFilter";
import NonStopFilter from "@/components/Filters/NonstopFilter";
import OriginArrTime from "@/components/Filters/OriginArrTime";
import OriginDepTime from "@/components/Filters/OriginDepTime";
import PriceFilter from "@/components/Filters/PriceFilter";
import ReturnArrTime from "@/components/Filters/ReturnArrTime";
import ReturnDepTime from "@/components/Filters/ReturnDepTime";
import { AirlineData, CodeState } from "@/types";
import { memo } from "react";
import "./Filter.scss";

const Filter = memo(
  ({
    airline,
    carrierCodes,
    tripType,
    nonStop,
    prices,
    handleFilterChange,
  }: {
    airline: CodeState<AirlineData>;
    carrierCodes: string[];
    tripType: string;
    nonStop: boolean;
    prices: number[];
    handleFilterChange: (filter: FilterProps) => void;
  }) => {
    console.log("Filter 렌더링");

    return (
      <div className="filter">
        {/* 경유 포함 검색했을 시 필터링 */}
        {!nonStop && (
          <Accordion type="small">
            <AccordionItem eventKey={1}>
              <AccordionHeader>
                <p className="filter-title">경유</p>
              </AccordionHeader>
              <AccordionBody>
                <NonStopFilter
                  nonStop={nonStop}
                  handleFilterChange={handleFilterChange}
                />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        )}

        {/* 출발 시간 필터링 */}
        <Accordion type="small">
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <p className="filter-title">출발시간</p>
            </AccordionHeader>
            <AccordionBody>
              <OriginDepTime handleFilterChange={handleFilterChange} />
              {tripType === "round" && (
                <ReturnDepTime handleFilterChange={handleFilterChange} />
              )}
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        {/* 도착 시간 필터링 */}
        <Accordion type="small">
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <p className="filter-title">도착시간</p>
            </AccordionHeader>
            <AccordionBody>
              <OriginArrTime handleFilterChange={handleFilterChange} />
              {tripType === "round" && (
                <ReturnArrTime handleFilterChange={handleFilterChange} />
              )}
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        {/* 항공사 필터링 */}
        <Accordion type="small">
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <p className="filter-title">항공사 선택</p>
            </AccordionHeader>
            <AccordionBody>
              <AirlineFilter
                airline={airline}
                carrierCodes={carrierCodes}
                handleFilterChange={handleFilterChange}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        {/* 최대 가격 필터링 */}
        <Accordion type="small">
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <p className="filter-title">가격대 (탑승객 전체)</p>
            </AccordionHeader>
            <AccordionBody>
              <PriceFilter
                prices={prices}
                handleFilterChange={handleFilterChange}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
);

export default Filter;

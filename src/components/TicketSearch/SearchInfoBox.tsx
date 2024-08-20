"use client";

import Button from "@/components/Button/Button";
import "./SearchInfo.scss";
import { useRecoilValue } from "recoil";
import { searchResultState } from "@/atoms/atoms";
import { useEffect, useState } from "react";
import Image from "next/image";

const SearchInfoBox = ({ handleChange }: { handleChange: () => void }) => {
  const searchResult = useRecoilValue(searchResultState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="info-layout">
      <div className="info-wrapper">
        <div className="info-main">
          <div className="route large">
            <div className="schedule-item">
              <span className="schedule-title">출발</span>
              <span className="schedule-contents">
                {searchResult.origin.value} ({searchResult.origin.code})
              </span>
            </div>
            <div className="route-way">
              {searchResult.tripType === "round" ? (
                <div className="img-box">
                  <Image
                    src="/img/icon-roundtrip-gray.svg"
                    alt="왕복"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <span className="hidden">왕복</span>
                </div>
              ) : (
                <div className="img-box">
                  <Image
                    src="/img/icon-oneway-gray.svg"
                    alt="편도"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <span className="hidden">편도</span>
                </div>
              )}
            </div>
            <div className="schedule-item">
              <span className="schedule-title">도착</span>
              <span className="schedule-contents">
                {searchResult.destination.value} (
                {searchResult.destination.code})
              </span>
            </div>
          </div>

          <div className="itinerary small">
            <div className="schedule-item">
              <span className="schedule-title">
                {searchResult.tripType === "round"
                  ? `출발일 - 도착일`
                  : `출발일`}
              </span>
              <span className="schedule-contents">
                {searchResult.schedule.departureFormattedDate}
                {searchResult.tripType === "round" &&
                  ` ~ ${searchResult.schedule.returnFormattedDate}`}
              </span>
            </div>
          </div>

          <div className="passenger small">
            <div className="schedule-item">
              <span className="schedule-title">인원, 좌석 등급</span>
              <span className="schedule-contents">{`성인 ${searchResult.passengers.adults}명${searchResult.passengers.children ? `, 소아 ${searchResult.passengers.children}명` : ""}${searchResult.passengers.infants ? `, 유아 ${searchResult.passengers.infants}명` : ""}, ${searchResult.cabin.cabinKor}`}</span>
            </div>
          </div>

          <div className="search-button">
            <Button size="sm" onClick={() => handleChange()}>
              재검색
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfoBox;

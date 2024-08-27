"use client";

import Button from "@/components/Button/Button";
import { AirportData, CodeState } from "@/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./SearchInfo.scss";
import { useRecoilValue } from "recoil";
import { searchResultState } from "@/atoms/atoms";

const SearchInfoBox = ({
  handleChange,
  code,
}: {
  handleChange: () => void;
  code: CodeState<AirportData>;
}) => {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const searchResult = useRecoilValue(searchResultState);

  const originLocationCode = searchParams.get("originLocationCode") || "";
  const destinationLocationCode =
    searchParams.get("destinationLocationCode") || "";
  const departureDate = searchParams.get("departureDate") || "";
  const returnDate = searchParams.get("returnDate") || "";
  const adults = searchParams.get("adults") || "";
  const children = searchParams.get("children") || "";
  const infants = searchParams.get("infants") || "";
  const travelClass = searchParams.get("travelClass") || "";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const convertToKor = (type: string) => {
    if (type === "") {
      return "모든 클래스";
    }

    if (type === "ECONOMY") {
      return "일반석";
    }

    if (type === "PREMIUM_ECONOMY") {
      return "프리미엄 일반석";
    }
    if (type === "BUSINESS") {
      return "비즈니스석";
    }

    return "일등석";
  };

  const formatDate = (data: string) => {
    const date = new Date(data);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];

    const formattedDate = `${month}월 ${day}일 (${dayOfWeek})`;

    return formattedDate;
  };

  return (
    <div className="info-layout">
      <div className="info-wrapper">
        <div className="info-main">
          <div className="route large">
            <div className="schedule-item">
              <span className="schedule-title">출발</span>
              <span className="schedule-contents">
                {/* {code[originLocationCode].value} ({originLocationCode}) */}
                {searchResult.origin.value} ({searchResult.origin.code})
              </span>
            </div>
            <div className="route-way">
              {/* {returnDate ? (
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
              )} */}
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
                {/* {code[destinationLocationCode].value} ({destinationLocationCode}) */}
                {searchResult.destination.value} (
                {searchResult.destination.code})
              </span>
            </div>
          </div>

          <div className="itinerary small">
            <div className="schedule-item">
              <span className="schedule-title">
                {returnDate ? `출발일 - 도착일` : `출발일`}
              </span>
              <span className="schedule-contents">
                {/* {formatDate(departureDate)}
                {returnDate && ` ~ ${formatDate(returnDate)}`} */}
                {`${searchResult.schedule.departureFormattedDate}${searchResult.tripType === "round" ? ` ~ ${searchResult.schedule.returnFormattedDate}` : ""}`}
              </span>
            </div>
          </div>

          <div className="passenger small">
            <div className="schedule-item">
              <span className="schedule-title">인원, 좌석 등급</span>
              <span className="schedule-contents">
                {/* {`성인 ${adults}명${children ? `, 소아 ${children}명` : ""}${infants ? `, 유아 ${infants}명` : ""}, ${convertToKor(travelClass)}`} */}
                {`성인 ${searchResult.passengers.adults}명${searchResult.passengers.children ? `, 소아 ${searchResult.passengers.children}명` : ""}${searchResult.passengers.infants ? `, 유아 ${searchResult.passengers.infants}명` : ""}, ${searchResult.cabin.cabinKor}`}
              </span>
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

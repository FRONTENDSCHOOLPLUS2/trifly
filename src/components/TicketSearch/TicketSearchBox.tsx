"use client";

import { searchResultState } from "@/atoms/atoms";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import { AirportData, CodeState } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import "./TicketSearch.scss";

const TicketSearchBox = ({
  code,
  airport,
  handleChange,
}: {
  code: CodeState<AirportData>;
  airport: AirportData[];
  handleChange?: () => void;
}) => {
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);
  const router = useRouter();
  const [tripType, setTripType] = useState("round");
  const [nonStop, setNonStop] = useState(false);
  const [origin, setOrigin] = useState({
    code: "SEL",
    value: "서울",
  });
  const [destination, setDestination] = useState({
    code: "",
    value: "",
  });
  const [schedule, setSchedule] = useState({
    departureDate: "",
    departureFormattedDate: "",
    returnDate: "",
    returnFormattedDate: "",
  });
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState({
    cabin: "",
    cabinKor: "모든 클래스",
  });

  useEffect(() => {
    if (searchResult) {
      setTripType(searchResult.tripType);
      setNonStop(searchResult.nonStop);
      setOrigin({
        code: searchResult.origin.code,
        value: searchResult.origin.value,
      });
      setDestination({
        code: searchResult.destination.code,
        value: searchResult.destination.value,
      });
      setSchedule({
        departureDate: searchResult.schedule.departureDate,
        departureFormattedDate: searchResult.schedule.departureFormattedDate,
        returnDate: searchResult.schedule.returnDate,
        returnFormattedDate: searchResult.schedule.returnFormattedDate,
      });
      setPassengers({
        adults: searchResult.passengers.adults,
        children: searchResult.passengers.children,
        infants: searchResult.passengers.infants,
      });
      setCabin({
        cabin: searchResult.cabin.cabin,
        cabinKor: searchResult.cabin.cabinKor,
      });
    }
  }, []);

  const handleTripType = (e: ChangeEvent<HTMLInputElement>) => {
    setTripType(e.target.value);
    setSchedule({
      departureDate: "",
      departureFormattedDate: "",
      returnDate: "",
      returnFormattedDate: "",
    });
  };

  const handleNonStop = () => {
    setNonStop(!nonStop);
  };

  const handleClick = () => {
    console.log({
      tripType,
      nonStop,
      origin,
      destination,
      schedule,
      passengers,
      cabin,
    });

    router.push(
      `/ticket-result?originLocationCode=${origin.code}&destinationLocationCode=${destination.code}&departureDate=${schedule.departureDate}${tripType === "round" ? `&returnDate=${schedule.returnDate}` : ""}&adults=${passengers.adults}${passengers.children > 0 ? `&children=${passengers.children}` : ""}${passengers.infants > 0 ? `&infants=${passengers.infants}` : ""}${nonStop ? `&nonStop=${nonStop}` : ""}${cabin.cabin && `&travelClass=${cabin.cabin}`}&currencyCode=KRW`,
    );
  };

  const originText = useMemo(
    () => (origin.code ? `${origin.value} (${origin.code})` : "공항 선택"),
    [origin],
  );

  const destinationText = useMemo(
    () =>
      destination.code
        ? `${destination.value} (${destination.code})`
        : "공항 선택",
    [destination],
  );

  const scheduleText = useMemo(() => {
    if (!schedule.departureDate) return "여행 일정 선택";
    return tripType === "round"
      ? `${schedule.departureFormattedDate} ~ ${schedule.returnFormattedDate}`
      : `${schedule.departureFormattedDate}`;
  }, [schedule, tripType]);

  const passengerText = useMemo(() => {
    return `성인 ${passengers.adults}명${passengers.children ? `, 소아 ${passengers.children}명` : ""}${passengers.infants ? `, 유아 ${passengers.infants}명` : ""}, ${cabin.cabinKor}`;
  }, [passengers, cabin]);

  return (
    <div className="search-layout">
      <div className="search-wrapper">
        <div className="search-header">
          <div className="trip-type">
            <input
              type="radio"
              id="round"
              name="tripType"
              value="round"
              checked={tripType === "round"}
              onChange={handleTripType}
            />
            <label htmlFor="round">
              <Badge selected={tripType === "round"}>왕복</Badge>
            </label>
          </div>
          <div className="trip-type">
            <input
              type="radio"
              id="oneway"
              name="tripType"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={handleTripType}
            />
            <label htmlFor="oneway">
              <Badge selected={tripType === "oneway"}>편도</Badge>
            </label>
          </div>
          <div className="non-stop">
            <input
              type="checkbox"
              id="nonstop"
              checked={nonStop}
              onChange={handleNonStop}
            />
            <label htmlFor="nonstop">직항만 검색</label>
          </div>
        </div>
        <div className="search-main">
          <div className="route large">
            <button type="button" className={`schedule-button origin`}>
              <span className="schedule-title">출발</span>
              <span
                className={`schedule-contents ${origin.code ? "selected" : ""}`}
              >
                {originText}
              </span>
            </button>
            <button type="button" className={`schedule-button `}>
              <span className="schedule-title">도착</span>
              <span
                className={`schedule-contents ${destination.code ? "selected" : ""}`}
              >
                {destinationText}
              </span>
            </button>
          </div>
          <div className="itinerary small">
            <button type="button" className={`schedule-button`}>
              {tripType === "round" ? (
                <span className="schedule-title">출발일 - 도착일</span>
              ) : (
                <span className="schedule-title">출발일</span>
              )}

              <span
                className={`schedule-contents ${schedule.departureDate ? "selected" : ""}`}
              >
                {scheduleText}
              </span>
            </button>
          </div>
          <div className="passenger small">
            <button type="button" className={`schedule-button passenger `}>
              <span className="schedule-title">인원, 좌석 등급</span>
              <span
                className={`schedule-contents ${passengers.adults && cabin ? "selected" : ""}`}
              >
                {passengerText}
              </span>
            </button>
          </div>
          <div className="search-button">
            <Button size="sm" onClick={handleClick}>
              검색
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSearchBox;

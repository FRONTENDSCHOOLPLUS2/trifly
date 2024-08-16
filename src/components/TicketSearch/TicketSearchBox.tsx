"use client";

import Badge from "@/components/Badge/Badge";
import RouteModal from "@/components/TicketSearch/SearchModals/RouteModal";
import { AirportData, CodeState } from "@/types";
import { ChangeEvent, useState } from "react";
import PassengersModal from "./SearchModals/PassengersModal";
import ScheduleModal from "./SearchModals/ScheduleModal";
import "./TicketSearch.scss";
import Button from "../Button/Button";

const TicketSearchBox = ({
  code,
  airport,
}: {
  code: CodeState;
  airport: AirportData[];
}) => {
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
  const [originModal, setOriginModal] = useState(false);
  const [destinationModal, setDestinationModal] = useState(false);
  const [schedule, setSchedule] = useState({
    departureDate: "",
    departureFormattedDate: "",
    returnDate: "",
    returnFormattedDate: "",
  });
  const [scheduleModal, setScheduleModal] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState({
    cabin: "",
    cabinKor: "모든 클래스",
  });
  const [passengersModal, setPassengersModal] = useState(false);

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

  const handleOrigin = () => {
    setOriginModal(true);
    if (destinationModal) {
      setDestinationModal(false);
    } else if (scheduleModal) {
      setScheduleModal(false);
    } else if (passengersModal) {
      setPassengersModal(false);
    }
  };

  const handleDestination = () => {
    setDestinationModal(true);
    if (originModal) {
      setOriginModal(false);
    } else if (scheduleModal) {
      setScheduleModal(false);
    } else if (passengersModal) {
      setPassengersModal(false);
    }
  };

  const handleItinerary = () => {
    setScheduleModal(true);
    if (originModal) {
      setOriginModal(false);
    } else if (destinationModal) {
      setDestinationModal(false);
    } else if (passengersModal) {
      setPassengersModal(false);
    }
  };

  const handlePassengers = () => {
    setPassengersModal(true);
    if (originModal) {
      setOriginModal(false);
    } else if (destinationModal) {
      setDestinationModal(false);
    } else if (scheduleModal) {
      setScheduleModal(false);
    }
  };

  const handleSwitch = () => {
    if (destination.code) {
      setOrigin({
        code: destination.code,
        value: destination.value,
      });

      setDestination({
        code: origin.code,
        value: origin.value,
      });
    }
  };

  const handleClick = () => {
    if (!destination.code) {
      alert("도착 공항을 선택하세요!");
      return;
    }

    const originAirport = code[origin.code] as AirportData;
    const destinationAirport = code[destination.code] as AirportData;

    if (originAirport.cityCode === destinationAirport.cityCode) {
      alert("다른 도시로 여행할 수 있습니다! 다시 선택해주세요.");
    }

    console.log(
      tripType,
      nonStop,
      origin,
      destination,
      schedule,
      passengers,
      cabin
    );
  };

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
            <button
              type="button"
              className={`schedule-button origin ${originModal ? "selected" : ""}`}
              onClick={handleOrigin}
            >
              <span className="schedule-title">출발</span>
              <span
                className={`schedule-contents ${origin.code ? "selected" : ""}`}
              >
                {origin.code ? `${origin.value} (${origin.code})` : "공항 선택"}
              </span>
            </button>
            <button
              type="button"
              className={`route-switch ${destination.code ? "is-active" : "disabled"}`}
              onClick={handleSwitch}
            >
              <img src="/img/icon-switch.svg" alt="출/도착 변경" />
              <span className="hidden">출/도착 변경</span>
            </button>
            <button
              type="button"
              className={`schedule-button ${destinationModal ? "selected" : ""}`}
              onClick={handleDestination}
            >
              <span className="schedule-title">도착</span>
              <span
                className={`schedule-contents ${destination.code ? "selected" : ""}`}
              >
                {destination.code
                  ? `${destination.value} (${destination.code})`
                  : "공항 선택"}
              </span>
            </button>
          </div>
          <div className="itinerary small">
            <button
              type="button"
              className={`schedule-button ${scheduleModal ? "selected" : ""}`}
              onClick={handleItinerary}
            >
              {tripType === "round" ? (
                <span className="schedule-title">출발일 - 도착일</span>
              ) : (
                <span className="schedule-title">출발일</span>
              )}

              <span
                className={`schedule-contents ${schedule.departureDate ? "selected" : ""}`}
              >
                {schedule.departureDate
                  ? tripType === "round"
                    ? `${schedule.departureFormattedDate} ~ ${schedule.returnFormattedDate}`
                    : `${schedule.departureFormattedDate}`
                  : "여행 일정 선택"}
              </span>
            </button>
          </div>
          <div className="passenger small">
            <button
              type="button"
              className={`schedule-button passenger ${passengersModal ? "selected" : ""}`}
              onClick={handlePassengers}
            >
              <span className="schedule-title">인원, 좌석 등급</span>
              <span
                className={`schedule-contents ${passengers.adults && cabin ? "selected" : ""}`}
              >
                {`성인 ${passengers.adults}명${passengers.children > 0 ? `, 소아 ${passengers.children}명` : ""}${passengers.infants > 0 ? `, 유아 ${passengers.infants}명` : ""}, ${cabin.cabinKor}`}
              </span>
            </button>
          </div>
          <div className="search-button">
            <Button onClick={handleClick}>검색</Button>
          </div>
        </div>
        {originModal && (
          <div className="search-modal">
            <RouteModal
              type="origin"
              handleClose={setOriginModal}
              airport={airport}
              setOrigin={setOrigin}
            />
          </div>
        )}
        {destinationModal && (
          <div className="search-modal">
            <RouteModal
              type="destination"
              handleClose={setDestinationModal}
              airport={airport}
              setDestination={setDestination}
            />
          </div>
        )}
        {scheduleModal && (
          <div className="search-modal">
            <ScheduleModal
              handleClose={setScheduleModal}
              tripType={tripType}
              schedule={schedule}
              setSchedule={setSchedule}
            />
          </div>
        )}
        {passengersModal && (
          <div className="search-modal">
            <PassengersModal
              handleClose={setPassengersModal}
              passengers={passengers}
              setPassengers={setPassengers}
              cabin={cabin}
              setCabin={setCabin}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketSearchBox;

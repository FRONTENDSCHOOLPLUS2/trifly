"use client";

import { ChangeEvent, useState } from "react";
import Badge from "@/components/Badge/Badge";
import { AirportData } from "@/types";
import "./TicketSearch.scss";
import RouteModal from "@/components/TicketSearch/SearchModals/RouteModal";
import ItineraryModal from "@/components/TicketSearch/SearchModals/ItineraryModal";
import PassengersModal from "./SearchModals/PassengersModal";

const TicketSearchBox = ({ airport }: { airport: AirportData[] }) => {
  const [tripType, setTripType] = useState("round");
  const [nonStop, setNonStop] = useState(false);
  const [route, setRoute] = useState({
    origin: "서울/인천 (ICN)",
    destination: "",
  });
  const [originModal, setOriginModal] = useState(false);
  const [destinationModal, setDestinationModal] = useState(false);
  const [schedule, setSchedule] = useState({
    departureDate: "",
    returnDate: "",
  });
  const [scheduleModal, setScheduleModal] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState("");
  const [passengersModal, setPassengersModal] = useState(false);

  const handleTripType = (e: ChangeEvent<HTMLInputElement>) => {
    setTripType(e.target.value);
  };

  const handleNonStop = () => {
    setNonStop(!nonStop);
  };

  const handleOrigin = () => {
    console.log("출발지 선택");
    setOriginModal(true);
    if (destinationModal || scheduleModal || passengersModal) {
      setDestinationModal(false);
      setScheduleModal(false);
      setPassengersModal(false);
    }
  };

  const handleDestination = () => {
    setDestinationModal(true);
    if (originModal || scheduleModal || passengersModal) {
      setOriginModal(false);
      setScheduleModal(false);
      setPassengersModal(false);
    }
  };

  const handleItinerary = () => {
    setScheduleModal(true);
    if (originModal || destinationModal || passengersModal) {
      setOriginModal(false);
      setDestinationModal(false);
      setPassengersModal(false);
    }
  };

  const handlePassengers = () => {
    setPassengersModal(true);
    if (originModal || destinationModal || scheduleModal) {
      setOriginModal(false);
      setDestinationModal(false);
      setScheduleModal(false);
    }
  };

  const handleSwitch = () => {
    if (route.destination) {
      setRoute({
        origin: route.destination,
        destination: route.origin,
      });
    }
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
                className={`schedule-contents ${route.origin ? "selected" : ""}`}
              >
                {route.origin ? route.origin : "공항 선택"}
              </span>
            </button>
            <button
              type="button"
              className={`route-switch ${route.destination ? "is-active" : "disabled"}`}
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
                className={`schedule-contents ${route.destination ? "selected" : ""}`}
              >
                {route.destination ? route.destination : "공항 선택"}
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
                className={`schedule-contents ${schedule.departureDate && schedule.returnDate ? "selected" : ""}`}
              >
                여행 일정 선택
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
                {`성인 ${passengers.adults}명${passengers.children > 0 ? `, 소아 ${passengers.children}명` : ""}${passengers.infants > 0 ? `, 유아 ${passengers.infants}명` : ""}, 좌석 선택`}
              </span>
            </button>
          </div>
        </div>
        {originModal && (
          <div className="search-modal">
            <RouteModal handleClose={setOriginModal} />
          </div>
        )}
        {destinationModal && (
          <div className="search-modal">
            <RouteModal handleClose={setDestinationModal} />
          </div>
        )}
        {scheduleModal && (
          <div className="search-modal">
            <ItineraryModal handleClose={setScheduleModal} />
          </div>
        )}
        {passengersModal && (
          <div className="search-modal">
            <PassengersModal handleClose={setPassengersModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketSearchBox;

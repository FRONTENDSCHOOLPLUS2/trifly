"use client";

import { ChangeEvent, useState } from "react";
import Badge from "../Badge/Badge";
import "./TicketSearch.scss";

const TicketSearch = () => {
  const [tripType, setTripType] = useState("round");

  const handleTripType = (e: ChangeEvent<HTMLInputElement>) => {
    setTripType(e.target.value);
  };

  return (
    <div className="search-layout">
      <form className="search-wrapper">
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
              <Badge>왕복</Badge>
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
              <Badge>편도</Badge>
            </label>
          </div>
        </div>
        <div className="search-main">출/도착, 날짜, 인원, 검색</div>
      </form>
    </div>
  );
};

export default TicketSearch;

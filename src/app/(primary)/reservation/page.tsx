import React from "react";
import ReservationList from "./ReservationList";
import Pagination from "./Pagination";
import Button from "@/components/Button/Button";

const page = () => {
  return (
    <div>
      <div className="reservation-header">
        <h2 className="title">예약내역</h2>
        <div className="search-cover">
          <div className="input-cover">
            <input type="text" name="reservation-search" id="search" />
          </div>
          <Button>검색</Button>
        </div>
      </div>
      <ReservationList />
      <Pagination />
    </div>
  );
};

export default page;

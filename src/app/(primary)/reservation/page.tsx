import React from "react";
import "./reservation.scss";
import Search from "./Search";
import ReservationList from "./ReservationList";
import MobileReservationList from "./(infiniteScroll)/MobileReservationList";

const page = async ({
  searchParams: { page, keyword },
}: {
  searchParams: { page: string; keyword: string };
}) => {
  return (
    <div>
      <div className="reservation-header">
        <h2 className="title">예약내역</h2>
        <Search />
      </div>
      {/* ReservationList는 SSR */}
      <ReservationList page={page} keyword={keyword} />
      {/* MobileReservationList는 클라이언트에서 RQProvider를 통해 사용 */}
      <MobileReservationList keyword={keyword} page={page} />
    </div>
  );
};

export default page;

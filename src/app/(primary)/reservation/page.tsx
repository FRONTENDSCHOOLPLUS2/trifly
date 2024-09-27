import { headers } from "next/headers";
import React from "react";
import "./reservation.scss";
import Search from "./Search";
import ReservationList from "./ReservationList";
import MobileReservationList from "./(infiniteScroll)/MobileReservationList";

const Page = async ({
  searchParams: { page, keyword },
}: {
  searchParams: { page: string; keyword: string };
}) => {
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /mobile/i.test(userAgent); // User-Agent 모바일 감지

  return (
    <div>
      <div className="reservation-header">
        <h2 className="title">예약내역</h2>
        <Search />
      </div>

      {/* 조건부 렌더링 */}
      {isMobile ? (
        <MobileReservationList page={page} keyword={keyword} />
      ) : (
        <ReservationList page={page} keyword={keyword} />
      )}
    </div>
  );
};

export default Page;

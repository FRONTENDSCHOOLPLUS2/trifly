import React from "react";
import "./reservation.scss";
import Search from "./Search";
import ReservationList from "./ReservationList";

const PageContainer = async ({
  searchParams: { page, keyword },
}: {
  searchParams: { page: string; keyword: string };
}) => {
  console.log("keywordkeyword", keyword);

  return (
    <div>
      <div className="reservation-header">
        <h2 className="title">예약내역</h2>
        <div className="search-cover">
          <Search />
        </div>
      </div>

      <ReservationList page={page} keyword={keyword} />
    </div>
  );
};

export default PageContainer;

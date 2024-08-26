"use client";

import { useRecoilValue } from "recoil";
import "./TicketLoading.scss";
import { searchResultState } from "@/atoms/atoms";

// 항공권 검색 로딩 화면
const TicketLoading = () => {
  const searchResult = useRecoilValue(searchResultState);
  const { origin, destination } = searchResult;

  return (
    <section className="ticket-searching">
      {origin.code} - {destination.code}
    </section>
  );
};

export default TicketLoading;

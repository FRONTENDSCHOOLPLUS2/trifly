"use client";

import { useRecoilValue } from "recoil";
import "./TicketLoading.scss";
import { searchResultState } from "@/atoms/atoms";
import { useSearchParams } from "next/navigation";

// 항공권 검색 로딩 화면
const TicketLoading = () => {
  const searchParams = useSearchParams();
  const origination = searchParams.get("originLocationCode");
  const destination = searchParams.get("destinationLocationCode");

  return (
    <section className="ticket-searching">
      {origination} - {destination}
    </section>
  );
};

export default TicketLoading;

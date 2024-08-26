"use client";

import { useRecoilValue } from "recoil";
import "./TicketLoading.scss";
import { searchResultState } from "@/atoms/atoms";

// 항공권 검색 로딩 화면
const TicketLoading = () => {
  const searchResult = useRecoilValue(searchResultState);
  const destination = searchResult.destination;

  console.log(destination);

  return (
    <section className={`ticket-searching`}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit
      incidunt hic, voluptas dignissimos voluptatem! Voluptatum at minima
      perferendis corrupti accusantium soluta illo vitae dolorum numquam?
      Sapiente laudantium vitae commodi!
    </section>
  );
};

export default TicketLoading;

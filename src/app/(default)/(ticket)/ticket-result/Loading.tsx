"use client";

import { AirportData, CodeState } from "@/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import "./TicketLoading.scss";

// 항공권 검색 로딩 화면
const TicketLoading = ({ code }: { code: CodeState<AirportData> }) => {
  const URL = process.env.NEXT_PUBLIC_MARKET_API_SERVER;

  const searchParams = useSearchParams();
  const originLocationCode = searchParams.get("originLocationCode")!;
  const destinationLocationCode = searchParams.get("destinationLocationCode")!;
  const departureDate = searchParams.get("departureDate")!;
  const returnDate = searchParams.get("returnDate")!;

  return (
    <section className="ticket-searching">
      <div className="img-box">
        <Image
          src={`${URL}${code[destinationLocationCode].img}`}
          alt={code[destinationLocationCode].value}
          width={0}
          height={0}
          sizes="100%"
        />
      </div>
      <div className="title-box">
        <h3>
          <strong className="bold">{code[originLocationCode].value}</strong>
          에서부터{" "}
          <strong className="bold">
            {code[destinationLocationCode].value}
          </strong>
          까지의 <br />
          왕복 여정을 찾는중입니다
        </h3>
      </div>
      <ul className="itinerary-box">
        <li className="origin">
          <span className="eng bold">{originLocationCode}</span>
          <span className="kor">{code[originLocationCode].value}</span>
          <span className="date">{departureDate}</span>
        </li>
        <li className="destination">
          <span className="eng bold">{destinationLocationCode}</span>
          <span className="kor">{code[destinationLocationCode].value}</span>
          <span className="date">{returnDate}</span>
        </li>
      </ul>
    </section>
  );
};

export default TicketLoading;

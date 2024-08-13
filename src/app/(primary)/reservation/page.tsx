import React from "react";
import "./reservation.scss";
import Button from "@/components/Button/Button";

import { FetchOrder } from "@/lib/fetchOrder";

export const reservation = async () => {
  const data = await FetchOrder();
  const reservationData = data.item;

  return (
    <>
      <div className="reservation-header">
        <h1 className="reservation-title">예약내역</h1>
        <div className="search-cover">
          <div className="input-cover">
            <input type="text" name="reservation-search" id="search" />
          </div>
          <Button>검색</Button>
        </div>
      </div>
      <table>
        <caption className="hidden">예약 내역 리스트</caption>
        <thead>
          <tr>
            <th>예약 번호</th>
            <th>예약일</th>
            <th>출발</th>
            <th>도착</th>
            <th>왕복/편도</th>
            <th>출발일</th>
            <th>인원</th>
            <th>총 금액</th>
          </tr>
        </thead>
        <tbody>
          {reservationData?.map((item, index: number) => (
            // 출발지 : item.itineraries[0].segments[0].departure.iataCode
            <tr key={index}>
              {/* <Link href={`/auth/reservation/${item.reservationId}`}></Link> */}
              <td className="reservation-number">HS0616</td>
              <td className="reservation-date">
                {item.createdAt.substring(0, 10)}
              </td>
              <td className="departure">
                {item.itineraries[0].segments[0].departure.iataCode}
              </td>
              <td className="arrival">
                {item.itineraries.slice(-1)[0].segments[0].departure.iataCode}
              </td>
              <td className="travel">
                {item.itineraries.length === 2 ? "왕복" : "편도"}
              </td>
              <td className="schedule">
                {item.itineraries[0].segments[0].departure.at.substring(0, 10)}
              </td>
              <td className="personnel">3인</td>
              <td className="total">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default reservation;

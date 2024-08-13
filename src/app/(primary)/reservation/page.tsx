import React from "react";
import "./reservation.scss";
import Button from "@/components/Button/Button";
import { FetchOrder } from "@/lib/fetchOrder";
import OrdersItem from "./OrdersItem";
import Pagination from "@/components/Pagination/Pagination";

export const reservation = async () => {
  const data = await FetchOrder();
  console.log(data);
  const reservationData = data.item;

  return (
    <>
      <div className="reservation-header">
        <h1 className="title">예약내역</h1>
        <div className="search-cover">
          <div className="input-cover">
            <input type="text" name="reservation-search" id="search" />
          </div>
          <Button>검색</Button>
        </div>
      </div>
      <section>
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
            {reservationData?.map((item) => (
              <OrdersItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>

        <Pagination />
      </section>
    </>
  );
};

export default reservation;

import React from "react";
import Button from "@/components/Button/Button";
import { FetchOrderList } from "@/lib/fetchOrder";
import OrdersItem from "./OrdersItem";
import "./reservation.scss";
import Pagination from "./Pagination";

const PageContainer = async ({
  searchParams: { page },
}: {
  searchParams: { page: string };
}) => {
  const data = await FetchOrderList(page);

  const reservationData = data.item;

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

      <section>
        <table className="reservation-table">
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

          {reservationData?.map((item) => (
            <OrdersItem key={item._id} item={item} />
          ))}
        </table>
      </section>
      <Pagination {...data.pagination!} />
    </div>
  );
};

export default PageContainer;

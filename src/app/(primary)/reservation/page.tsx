import React from "react";
import "./reservation.scss";
import { auth } from "@/auth";
import { OrderItem } from "@/types";
import Button from "@/components/Button/Button";

const API = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;

const Reservation = async () => {
  // fetch("https://api.fesp.shop/orders").then((response) =>
  //   console.log(response)
  // );
  const session = await auth();
  const token = session?.accessToken as string;
  console.log(session);

  const response = await fetch(`${API}/orders`, {
    method: "GET",
    headers: {
      "client-id": CLIENT_ID,
      Authorization: `Bearer ${token}`,
      // Authorization: token,
    },
  });
  console.log(response, "ffffff");

  if (response.ok) {
    const data = await response.json();
    console.log("어디냐", data.item);

    // 예약번호, 예약일, 여정, 출발일, 인원, 총 금액
    const list = data?.item?.map((item: OrderItem) => {
      <tr>
        <td>{item.reservationId}</td>
        <td>{item.createdAt}</td>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>;
    });
  } else {
    console.error(response);
  }

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
            <th>여정</th>
            <th>출발일</th>
            <th>인원</th>
            <th>총 금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="reservation-number">S74J23</td>
            <td className="reservation-date">2024.08.07</td>
            <td className="travel">
              인천국제공항 - 후쿠오카공항 - 인천국제공항
            </td>
            <td className="schedule">2024.09.01</td>
            <td className="personnel">3인</td>
            <td className="total">877,200원</td>
          </tr>

          <tr>
            <td className="reservation-number">S74J12</td>
            <td className="reservation-date">2024.04.16</td>
            <td className="travel">
              인천국제공항 - 취리히 공항 - 인천국제공항
            </td>
            <td className="schedule">2024.06.16</td>
            <td className="personnel">2인</td>
            <td className="total">547,800원</td>
          </tr>

          <tr>
            <td className="reservation-number">S74J98</td>
            <td className="reservation-date">2024.02.21</td>
            <td className="travel">
              인천국제공항 - 코타키나발루 - 인천국제공항
            </td>
            <td className="schedule">2024.03.12</td>
            <td className="personnel">1인</td>
            <td className="total">313,000원</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Reservation;

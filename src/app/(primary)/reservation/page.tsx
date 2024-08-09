import React from "react";
import "./reservation.scss";
import { auth } from "@/auth";

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
    console.log("어디냐", data);
  } else {
    console.error(response);
  }

  return (
    <>
      <h1 className="reservation-title">예약내역</h1>
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
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Reservation;

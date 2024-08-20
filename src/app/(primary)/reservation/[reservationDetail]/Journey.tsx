import { OrderItem, OrderItineraries } from "@/types";
import React from "react";
import { fetchCodes } from "@/data/fetch/fetchCode";
import "./Journery.scss";
import Image from "next/image";

const Journey = async ({ data }: { data: OrderItem }) => {
  // console.log("zzzzzzzzzzzzzata", data);
  // //공항 코드 조회
  // const {codes} = await fetchCodes();
  // console.log(codes["ICN"].value)
  const itinerary = data?.itineraries.map((item, idx) => {
    return (
      <div className="ticket" key={idx}>
        <div className="journey-box">
          <div className="journey">
            <div className="departure">
              <div className="circle" />
              <span className="airport-code">
                {item.segments[0].departure.iataCode}
              </span>
              <span className="airport-kr">공항이름</span>
              <span className="airline-at">
                {item.segments[0].departure.at.substring(0, 10)}
              </span>
            </div>

            <div className="stopover">
              <div className="img-box">
                <Image
                  src="/img/icon-airline.svg"
                  alt="airline"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>
              <span className="stopover-number">
                {item.segments.length >= 2
                  ? `경유 ${item.segments.length - 1}회`
                  : ""}
              </span>
            </div>

            <div className="arrival">
              <div className="circle" />
              <span className="airport-code">
                {/* {itinerary.segments[0].arrival.iataCode} */}
                {item.segments.length >= 2
                  ? item.segments[1].arrival.iataCode
                  : item.segments[0].arrival.iataCode}
              </span>
              <span className="airport-kr">공항이름</span>
              <span className="airline-at">
                {item.segments[0].arrival.at.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <section>
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
                  <td>{data.reservationId}</td>
                  <td>{data.createdAt.substring(0, 10)}</td>
                  <td>
                    {item.segments.length >= 2
                      ? `${item.segments[0].departure.iataCode} ~ ${item.segments[item.segments.length - 1].arrival.iataCode}`
                      : `${item.segments[0].departure.iataCode} ~ ${item.segments[0].arrival.iataCode}`}
                  </td>
                  <td>{item.segments[0].departure.at.substring(0, 10)}</td>
                  <td>{data.passengers?.length}</td>
                  <td>
                    {Number(data.totalPrice.split(".")[0]).toLocaleString(
                      "ko-KR",
                    )}{" "}
                    원
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ticket-box">{itinerary}</div>
    </>
  );
};

export default Journey;

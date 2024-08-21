"use client";

import { AirportData, CodeState, OrderItem } from "@/types";
import "./ticket.scss";
import Image from "next/image";
import Link from "next/link";

const Ticket = ({
  data: { _id, reservationId, itineraries, passengers },
  code,
  passengerId,
}: {
  data: OrderItem;
  code: CodeState<AirportData>;
  passengerId: number;
}) => {
  const URL = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
  const arrival =
    itineraries[0].segments[itineraries[0].segments.length - 1].arrival
      .iataCode;

  return (
    <div className="ticket-box">
      <div className="top-box">
        <div className="barcode">
          <Image
            src="/img/img-ticket-barcode.svg"
            alt="티켓 바코드"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <div className="flex-box">
          <dl>
            <dt>Passanger Name</dt>
            <dd>{passengers[passengerId].nameEng}</dd>
          </dl>
          <dl>
            <dt>E-ticket Number</dt>
            <dd>{reservationId}</dd>
          </dl>
        </div>
      </div>
      <div className="img-box">
        <Image
          src={`${URL}${code[arrival].img}`}
          alt={code[arrival].value}
          width={0}
          height={0}
          sizes="100%"
        />
        <Link href={`/footprint/${_id}/${passengerId}`}>수정 및 저장하기</Link>
      </div>
      <div className="segments">
        {itineraries.map((item, idx) => (
          <div className="segment-box" key={idx}>
            <div className="path">
              <span className="departure">
                {item.segments[0].departure.iataCode}
              </span>
              <span className="arrival">
                {item.segments[item.segments.length - 1].arrival.iataCode}
              </span>
            </div>
            <div className="flight-box">
              <div className="flex-box">
                <dl>
                  <dt>Passanger Name</dt>
                  <dd>{passengers[passengerId].nameEng}</dd>
                </dl>
                <dl>
                  <dt>Date</dt>
                  <dd>{item.segments[0].departure.at.split("T")[0]}</dd>
                </dl>
                <dl>
                  <dt>Time</dt>
                  <dd>
                    {item.segments[0].departure.at.split("T")[1].slice(0, 5)}
                  </dd>
                </dl>
              </div>
              <div className="flex-box">
                <dl>
                  <dt>Filght</dt>
                  <dd>
                    {item.segments[0].operating
                      ? item.segments[0].operating.carrierCode
                      : item.segments[0].carrierCode}
                    {item.segments[0].number}
                  </dd>
                </dl>
                <dl>
                  <dt>Terminal</dt>
                  <dd>T{item.segments[0].departure.terminal}</dd>
                </dl>
                <dl>
                  <dt>Gate</dt>
                  <dd>-</dd>
                </dl>
              </div>
              <div className="barcode">
                <Image
                  src="/img/img-ticket-barcode.svg"
                  alt="여정 바코드"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;

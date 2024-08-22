"use client";

import { AirlineData, CodeState, OffersSearchData } from "@/types";
import "./TicketResultItem.scss";
import Image from "next/image";
import Badge from "@/components/Badge/Badge";
import { useRecoilValue } from "recoil";
import { searchResultState } from "@/atoms/atoms";
import useCheckWindowWidth from "@/hook/useCheckWindowWidth";
import { useEffect, useState } from "react";

const TicketResultItem = ({
  item,
  airline,
}: {
  item: OffersSearchData;
  airline: CodeState<AirlineData>;
}) => {
  const { itineraries } = item;
  const searchResult = useRecoilValue(searchResultState);

  /* -------------------------------------------------------------------------- */
  /*                              PT6H10 -> 6시간 10분                            */
  /* -------------------------------------------------------------------------- */
  function parseDuration(duration: string) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);

    let hours: number = 0;
    let minutes: number = 0;

    if (matches) {
      hours = matches[1] ? parseInt(matches[1], 10) : 0;
      minutes = matches[2] ? parseInt(matches[2], 10) : 0;
    }

    return hours * 60 + minutes;
  }

  function parseDurationFormat(duration: string) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);

    let hours: string = "";
    let minutes: string = "";

    if (matches) {
      hours = matches[1] ? matches[1].replace("H", "") : "0";
      minutes = matches[2] ? matches[2].replace("M", "") : "0";
    }

    return `${hours}시간 ${Number(minutes) > 0 ? `${minutes}분` : ""}`;
  }

  /* -------------------------------------------------------------------------- */
  /*                        2024-08-23T16:45:00 -> 16:45                        */
  /* -------------------------------------------------------------------------- */
  function formatTime(isoString: string) {
    const date = new Date(isoString);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  대기 시간 계산                               */
  /* -------------------------------------------------------------------------- */
  function calculateWaitingTime(
    totalDuration: string,
    ...segmentDurations: string[]
  ) {
    const totalMinutes = parseDuration(totalDuration);
    const totalSegmentMinutes = segmentDurations.reduce(
      (acc: number, duration: string) => acc + parseDuration(duration),
      0,
    );

    const waitingMinutes = totalMinutes - totalSegmentMinutes;

    // 시간 환산
    const waitingHours = Math.floor(waitingMinutes / 60);
    const waitingMins = waitingMinutes % 60;

    return `${waitingHours}시간  ${Number(waitingMins) > 0 ? `${waitingMins}분` : ""}`;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  날짜 차이 계산                               */
  /* -------------------------------------------------------------------------- */
  function calculateDayDifference(departureTime: string, arrivalTime: string) {
    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(arrivalTime);

    const yearDifference =
      arrivalDate.getFullYear() - departureDate.getFullYear();
    const monthDifference = arrivalDate.getMonth() - departureDate.getMonth();
    const dayDifference = arrivalDate.getDate() - departureDate.getDate();

    const totalDayDifference =
      yearDifference * 365 + monthDifference * 30 + dayDifference;

    return totalDayDifference;
  }

  // itinerary 만큼 반복하기!
  const routeList = itineraries.map((itinerary, index) => {
    const stopTime = itinerary.segments.length - 1;
    const totalTime = itinerary.duration;
    const flightTime: string[] = [];
    itinerary.segments.forEach((segment) => {
      flightTime.push(segment.duration);
    });
    const waitingTime = calculateWaitingTime(totalTime, ...flightTime);
    const dayDifference = calculateDayDifference(
      itinerary.segments[0].departure.at,
      itinerary.segments[stopTime].arrival.at,
    );

    const airlines: string[] = [];
    itinerary.segments.forEach((segment) => {
      airlines.push(segment.carrierCode);
    });

    const airlinesSet = [...new Set(airlines)];

    return (
      <div key={index} className="route">
        <div className="airline-info">
          <div className="airline">
            <div className="airline-logo img-box">
              <Image
                src={`https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/${itinerary.segments[0].carrierCode}.png`}
                alt={
                  airline[itinerary.segments[0].carrierCode]
                    ? airline[itinerary.segments[0].carrierCode].nameKor
                    : itinerary.segments[0].carrierCode
                }
                width={0}
                height={0}
                sizes="100%"
              />
            </div>
            <div className="airline-title">
              <p className="main-airline">
                {airline[itinerary.segments[0].carrierCode].nameKor}
              </p>
              {itinerary.segments[0].operating &&
                itinerary.segments[0].operating.carrierCode !==
                  itinerary.segments[0].carrierCode && (
                  <p className="codeshare-airline">
                    {`공동운항 ${
                      airline[itinerary.segments[0].operating.carrierCode]
                        ? airline[itinerary.segments[0].operating.carrierCode]
                            .nameKor
                        : "항공사 확인"
                    } `}
                  </p>
                )}
            </div>
          </div>
          {airlinesSet.length > 1 && (
            <div className="transfer-option">
              <Badge>타 항공사 환승 포함</Badge>
            </div>
          )}
        </div>
        <div className="route-info">
          <div className="airport">
            <div className="time">
              <p className="time-detail">
                {formatTime(itinerary.segments[0].departure.at)}
              </p>
              <p className="airport-code">
                {itinerary.segments[0].departure.iataCode}
              </p>
            </div>
          </div>
          <div className="to">
            <div className="from-to">
              <div className="arrow" />
              <p className="duration">
                {parseDurationFormat(itinerary.duration)}
                {stopTime >= 1 && (
                  <span>
                    <Badge type="gray">{`경유 ${stopTime}`}</Badge>
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="airport">
            <div className="time">
              <p className="time-detail">
                {formatTime(itinerary.segments[stopTime].arrival.at)}
              </p>
              <p className="airport-code">
                {itinerary.segments[stopTime].arrival.iataCode}
              </p>
            </div>
            <div
              className={`day-difference ${dayDifference > 0 ? "is-active" : "disabled"}`}
            >
              <Badge type="secondary">{`+${dayDifference}`}</Badge>
            </div>
          </div>
        </div>
        <div className="way-type">
          <p className="stop-number">
            {stopTime >= 1 ? `${stopTime}번 경유` : "직항"}
          </p>
          {stopTime >= 1 && <p className="stop-time">대기시간 {waitingTime}</p>}
        </div>
      </div>
    );
  });

  const handleClick = () => {
    const flightOfferSearch = item;
    const duration: string[] = item.itineraries.map((item) => item.duration);
    const totalPrice: string = item.price.total;
    const formattedTime: string[] = [
      searchResult.schedule.departureFormattedDate,
      searchResult.schedule.returnFormattedDate,
    ];

    console.log(flightOfferSearch);
    console.log(duration);
    console.log(totalPrice);
    console.log(formattedTime);

    // flight-offers-price api 호출
  };

  return (
    <>
      <button className="ticket-item" onClick={handleClick}>
        <div className="ticket-itinerary">{routeList}</div>
        <div className="ticket-pricing">
          <p className="remaining-seats">{item.numberOfBookableSeats}석 남음</p>
          <div className="price-per-adults">
            <p className="price">
              <span>
                {Number(
                  item.travelerPricings[0].price.total.split(".")[0],
                ).toLocaleString()}
              </span>
              원
            </p>
            <p className="price-info">유류할증료 및 세금 포함</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default TicketResultItem;

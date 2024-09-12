"use client";

import { OrderProps, orderState } from "@/atoms/atoms";
import Badge from "@/components/Badge/Badge";
import { AirportData, CodeState, FareDetailsBySegment } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";

interface FareDetails {
  [key: string]: FareDetailsBySegment;
}

interface CabinType {
  [index: string]: string;
}

const Detail = ({ code }: { code: CodeState<AirportData> }) => {
  const [isClient, setIsClient] = useState(false);
  const { state, contents } = useRecoilValueLoadable(orderState);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (state === "loading") return <div>Loading...</div>;
  if (state === "hasError") return <div>Error loading state</div>;

  // 로딩이 완료된 상태에서만 상태를 사용
  const { itineraries, price, departureDate, returnDate } =
    contents as OrderProps;
  const data = itineraries.map((item) => ({
    duration: item.duration,
    segments: item.segments,
  }));
  const fareDetails = price.reduce((acc, bag) => {
    bag.fareDetailsBySegment.forEach((item) => {
      acc[item.segmentId] = item;
    });
    return acc;
  }, {} as FareDetails);

  const cabinKor: CabinType = {
    ECONOMY: "일반석",
    PREMIUM_ECONOMY: "프리미엄 일반석",
    BUSINESS: "비즈니스석",
    FIRST: "일등석",
  };

  return (
    <div className="detail-box">
      {data.map((item, idx) => {
        const duration = item.duration!.split("PT")[1].split("H");
        const hour = duration.length > 1 ? duration[0] : 0;
        const minute =
          duration.length > 1
            ? duration[1].split("M")[0]
            : duration[0].split("M")[0];

        return (
          <article key={idx === 0 ? "가는편" : "오는편"}>
            <div className="detail-title">
              <h4>
                <Badge>{idx === 0 ? "가는편" : "오는편"}</Badge>
              </h4>
              <div className="detail-info">
                <span className="date">
                  {idx === 0 ? departureDate : returnDate}
                </span>
                <span className="duration">
                  소요시간 <span>{`${hour}시간 ${minute || 0}분`}</span>
                </span>
              </div>
            </div>

            <div className="detail-cont">
              {item.segments.map((segment, segmentIdx) => {
                const segmentDetail = fareDetails[segment.id];
                const departure = segment.departure.at.split("T")[1];
                const arrival = segment.arrival.at.split("T")[1];
                const nextSegment = item.segments[segmentIdx + 1];

                return (
                  <>
                    <div
                      key={segmentIdx}
                      className={`detail-segment ${
                        (nextSegment &&
                          segment.arrival.iataCode !==
                            nextSegment?.departure.iataCode) ||
                        segment.arrival.terminal !==
                          nextSegment?.departure.terminal
                          ? "infoOtherStop"
                          : ""
                      }`}
                    >
                      <div className="segment left-box">
                        <span className="departure">
                          {departure.slice(0, 5)}
                        </span>
                        <div className="img-box">
                          <Image
                            src={`https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/${segment.carrierCode}.png`}
                            alt={segment.carrierCode}
                            width={0}
                            height={0}
                            sizes="100%"
                          />
                        </div>
                        <span className="arrival">{arrival.slice(0, 5)}</span>
                      </div>
                      <div className="segment right-box">
                        <ul className="departure">
                          <li className="iatacode">
                            {segment.departure.iataCode}
                          </li>
                          <li>
                            {code[segment.departure.iataCode]?.nameKor || null}
                          </li>
                          {segment.departure.terminal && (
                            <li>T{segment.departure.terminal}</li>
                          )}
                        </ul>
                        <div className="tag-box">
                          {segment.operating &&
                            segment.operating.carrierCode !==
                              segment.carrierCode && (
                              <span className="warning">
                                실제탑승:{" "}
                                {code[segment.operating.carrierCode]?.value ||
                                  segment.operating.carrierCode}
                              </span>
                            )}
                          <span className="aircraft">
                            {code[segment.aircraft.code]?.nameKor ||
                              segment.aircraft.code}
                          </span>
                          {segmentDetail.includedCheckedBags.weight! > 0 && (
                            <span className="bags">
                              {`${segmentDetail.includedCheckedBags.weight}Kg`}
                            </span>
                          )}

                          <span className="class">
                            {cabinKor[segmentDetail.cabin]}
                          </span>
                        </div>
                        <ul className="arrival">
                          <li className="iatacode">
                            {segment.arrival.iataCode}
                          </li>
                          <li>
                            {code[segment.arrival.iataCode]?.nameKor || null}
                          </li>
                          {segment.arrival.terminal && (
                            <li>T{segment.arrival.terminal}</li>
                          )}
                        </ul>

                        {nextSegment && (
                          <div className="infoOtherStop tag-box">
                            {segment.arrival.iataCode !==
                            nextSegment.departure.iataCode ? (
                              <span className="warning">
                                다른 공항으로 이동하여 탑승
                              </span>
                            ) : segment.arrival.terminal !==
                              nextSegment.departure.terminal ? (
                              <span className="warning">
                                다른 터미널로 이동하여 탑승
                              </span>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Detail;

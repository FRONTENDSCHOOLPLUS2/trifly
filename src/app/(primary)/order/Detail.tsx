"use client";

import { orderState } from "@/atoms/atoms";
import Badge from "@/components/Badge/Badge";
import { AirportData, CodeState } from "@/types";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { cabinKor } from "./orderContext";

const Detail = ({ code }: { code: CodeState<AirportData> }) => {
  const { itineraries, price } = useRecoilValue(orderState);
  const bags = price.map((bag) =>
    bag.fareDetailsBySegment.map((item) => item.includedCheckedBags),
  );
  const cabins = price.map((cabin) =>
    cabin.fareDetailsBySegment.map((item) => item.cabin),
  );
  const data = itineraries.map((item, idx) => ({
    date: item.segments[idx].departure.at,
    duration: item.duration,
    segments: item.segments,
    bags: bags[idx],
    cabin: cabins[idx],
  }));

  return (
    <div className="detail-box">
      {data.map((item, idx) => {
        const date = item.date.split("T")[0];
        const duration = item.duration!.split("PT")[1].split("H");
        const hour = duration[0];
        const minute = duration[1].split("M")[0];

        return (
          <article key={idx}>
            <div className="detail-title">
              <h4>
                <Badge>{idx === 0 ? "가는편" : "오는편"}</Badge>
              </h4>
              <div className="detail-info">
                <span className="date">{date}</span>
                <span className="duration">
                  소요시간 <span>{`${hour}시간 ${minute}분`}</span>
                </span>
              </div>
            </div>

            <div className="detail-cont">
              {item.segments.map((segment, segmentIdx) => {
                const departure = segment.departure.at.split("T")[1].split(":");
                const arrival = segment.departure.at.split("T")[1].split(":");
                return (
                  <div key={segmentIdx} className="detail-segment">
                    <div className="segment left-box">
                      <span className="departure">
                        {`${departure[0]}:${departure[1]}`}
                      </span>
                      <div className="img-box">
                        <Image
                          src={`https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/${segment.operating ? segment.operating.carrierCode : segment.carrierCode}.png`}
                          alt={
                            segment.operating
                              ? segment.operating.carrierCode
                              : segment.carrierCode
                          }
                          width={0}
                          height={0}
                          sizes="100%"
                        />
                      </div>
                      {/* <img src={} className="center" /> */}
                      <span className="arrival">
                        {`${arrival[0]}:${arrival[1]}`}
                      </span>
                    </div>
                    <div className="segment right-box">
                      <ul className="departure">
                        <li className="iatacode">
                          {segment.departure.iataCode}
                        </li>
                        <li>{code[segment.departure.iataCode].nameKor}</li>
                        {segment.departure.terminal && (
                          <li>T{segment.departure.terminal}</li>
                        )}
                      </ul>
                      <div className="tag-box">
                        {item.bags[idx].weight !== 0 && (
                          <span className="bags">
                            {`${item.bags[idx].weight}Kg`}
                          </span>
                        )}
                        <span className="class">
                          {cabinKor[item.cabin[idx]]}
                        </span>
                      </div>
                      <ul className="arrival">
                        <li className="iatacode">{segment.arrival.iataCode}</li>
                        <li>{code[segment.arrival.iataCode].nameKor}</li>
                        {segment.arrival.terminal && (
                          <li>T{segment.arrival.terminal}</li>
                        )}
                      </ul>
                    </div>
                  </div>
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

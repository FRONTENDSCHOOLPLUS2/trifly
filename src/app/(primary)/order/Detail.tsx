"use client";
import { orderState } from "@/atoms/atoms";
import Badge from "@/components/Badge/Badge";
import { CodeState } from "@/types";
import { useRecoilValue } from "recoil";
import { cabinKor } from "./layout";

const Detail = ({ type, code }: { type: string; code: CodeState }) => {
  const { itineraries, price } = useRecoilValue(orderState);
  const bags = price.map((item) =>
    item.fareDetailsBySegment.map((item) => item.includedCheckedBags)
  );
  const cabin = price.map((item) =>
    item.fareDetailsBySegment.map((item) => item.cabin)
  );
  const data = itineraries.map((item, idx) => ({
    date: [item.segments[idx].departure.at],
    duration: [item.duration],
    segments: item.segments,
    bags: bags[idx],
    cabin: cabin[idx],
  }));

  console.log("data", data);
  console.log(cabinKor["ECONOMY"]);

  return (
    <>
      {type === "agree" ? <h3>{} 항공편</h3> : <h3>예매 내역</h3>}

      <div className="detail-box">
        {data.map((item, idx) => (
          <article key={idx}>
            <div className="detail-title">
              <h4>
                <Badge>{idx === 0 ? "가는편" : "오는편"}</Badge>
              </h4>
              <span className="date">{item.date}</span>
              <span className="duration">소요시간 {item.duration}</span>
            </div>

            {item.segments.map((segment, idx) => (
              <div key={idx} className="detail-cont">
                <div className="detail-segment">
                  <div className="segment left-box">
                    <span className="departure">
                      {segment.departure.at.split("T")[1]}
                    </span>
                    <img src="" alt="" className="center" />
                    <span className="arrival">
                      {segment.arrival.at.split("T")[1]}
                    </span>
                  </div>
                  <div className="segment right-box">
                    <ul className="departure">
                      <li>{segment.departure.iataCode}</li>
                      <li>{code[segment.departure.iataCode].nameKor}</li>
                      <li>T{segment.departure.terminal}</li>
                    </ul>
                    <div className="tag-box">
                      {item.bags[idx].weight !== 0 && (
                        <span className="bags">
                          {`${item.bags[idx].weight}Kg`}
                        </span>
                      )}
                      {item.cabin[idx]}
                      <span className="class">{cabinKor[item.cabin[idx]]}</span>
                    </div>
                    <ul className="arrival">
                      <li>{segment.arrival.iataCode}</li>
                      <li>{code[segment.arrival.iataCode].nameKor}</li>
                      <li>T{segment.arrival.terminal}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  );
};

export default Detail;

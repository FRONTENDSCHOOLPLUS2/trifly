import Badge from "@/components/Badge/Badge";
import "./reservationDetail.scss";
import FetchOrderId from "@/lib/fetchOrder";

import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData } from "@/types";
import { backgroundClip } from "html2canvas/dist/types/css/property-descriptors/background-clip";
import { color } from "html2canvas/dist/types/css/types/color";
import TicketLink from "./TicketLink";
import Journey from "./Journey";

const reservationId = async ({
  params,
}: {
  params: { reservationDetail: string };
}) => {
  const data = await FetchOrderId(params.reservationDetail);
  const { code } = await fetchCodes<AirportData>();
  // console.log("xxxxxxxxxparams", passengerId);

  const passenger = data?.passengers.map((item, idx) => {
    return (
      <tbody key={idx}>
        <tr>
          <td className="passport-number">{item.passport.number}</td>
          <td className="passenger">
            <span className="pc">
              {item.nameEng} ({item.nameKor})
            </span>
            <span className="mo">{item.nameKor}</span>
          </td>
          <td className="birth">{item.birth}</td>
          <td>
            <TicketLink id={params.reservationDetail} passengerId={idx} />
          </td>
        </tr>
      </tbody>
    );
  });

  // const obj = Object.assign({}, data);

  return (
    <>
      <div className="ticket-detail">
        <div className="title-box">
          <h1 className="title">상세내역</h1>
          <div className="tag">
            {data?.itineraries.length >= 2 ? (
              <Badge>왕복</Badge>
            ) : (
              <Badge>편도</Badge>
            )}

            <Badge>예약 완료</Badge>
          </div>
        </div>
        <div className="order-ticket">
          <div className="orderDetail-box">
            <Journey data={data} code={code} />
          </div>
        </div>
      </div>

      <div className="ticket-print">
        <h2 className="title">탑승객별 티켓</h2>
        <div className="">
          <section>
            <table>
              <caption className="hidden">탑승객별 티켓 내역</caption>
              <thead>
                <tr>
                  <th>여권번호</th>
                  <th>탑승객</th>
                  <th className="birth">생년월일</th>
                  <th>티켓 목록</th>
                </tr>
              </thead>
              {passenger}
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default reservationId;

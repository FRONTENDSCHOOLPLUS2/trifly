import Badge from "@/components/Badge/Badge";
import "./reservationDetail.scss";
import FetchOrderId from "@/lib/fetchOrder";
import Journey from "./Journey";
import TicketLink from "./TicketLink";

const reservationId = async ({
  params,
}: {
  params: { reservationDetail: string };
}) => {
  const data = await FetchOrderId(params.reservationDetail);
  // console.log("xxxxxxxxxparams", data);

  const passenger = data?.passengers.map((passenger, idx) => {
    return (
      <tbody key={idx}>
        <tr>
          <td className="passport-number">{passenger.passport.number}</td>
          <td>
            {passenger.nameEng} ({passenger.nameKor})
          </td>
          <td>{passenger.birth}</td>
          <td>
            <TicketLink id={params.reservationDetail} />
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
            <Journey data={data} />
          </div>
        </div>
      </div>

      <div className="ticket-print">
        <h2 className="title">탑승객별 티켓 출력</h2>
        <section>
          <table>
            <caption className="hidden">탑승객별 티켓 내역</caption>
            <thead>
              <tr>
                <th>여권번호</th>
                <th>탑승객</th>
                <th>생년월일</th>
                <th></th>
              </tr>
            </thead>
            {passenger}
          </table>
        </section>
      </div>
    </>
  );
};

export default reservationId;

import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrder } from "@/lib/fetchOrder";
import { AirportData } from "@/types";
import Detail from "../../Detail";
import OrderProgress from "../../OrderProgress";
import TicketChk from "./TicketChk";

const CompletePage = async ({ params: { id } }: { params: { id: string } }) => {
  const dataList = await FetchOrder();
  const data = dataList.item.find((item) => item.reservationId === id);
  const { code } = await fetchCodes<AirportData>();

  return (
    <>
      <OrderProgress orderStatus={4} />
      <div className="complete">
        <section className="reservation-box">
          <h3 className="hidden">항공권 예약 완료</h3>
          <p className="reservation-tit">
            <strong>{data?.purchaser?.name}</strong>님, 항공권 구매가
            완료되었습니다.
          </p>
          <p className="reservation-cont">
            결제 내역에서 상세 내용 확인이 가능합니다.
          </p>
          <dl>
            <dt>예약 번호</dt>
            <dd>{data?.reservationId}</dd>
          </dl>
        </section>

        <section>
          <h3 className="title">예매 내역</h3>
          <Detail code={code} />
        </section>

        {data && <TicketChk data={data} code={code} />}
      </div>
    </>
  );
};

export default CompletePage;

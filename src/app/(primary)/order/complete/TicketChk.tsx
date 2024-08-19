"use client";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import Ticket from "@/components/Ticket/Ticket";
import { AirportData, CodeState, OrderItem } from "@/types";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../orderContext";

const TicketChk = ({
  data,
  code,
}: {
  data: OrderItem;
  code: CodeState<AirportData>;
}) => {
  const [showTicketNum, setTicketNum] = useState(0);
  const { setOrderStatus } = useContext(OrderContext);

  useEffect(() => {
    setOrderStatus(4);
  }, []);

  return (
    <section className="order-inner eticket-box flexVer">
      <div className="left-box">
        <h3 className="title">E-Ticket 확인하기</h3>

        {data.passengers.map((item, idx) => {
          const type =
            item.type === "adult"
              ? "성인"
              : item.type === "child"
                ? "소아"
                : "유아";
          return (
            <div
              key={idx}
              className="e-ticket"
              onClick={() => setTicketNum(idx)}
            >
              <Badge type={type === "성인" ? "primary" : "gray"}>{type}</Badge>
              <h4>{item.nameKor}</h4>
              <Button
                size="xs"
                bgColor={showTicketNum === idx ? "primary" : "primary30"}
              >
                {showTicketNum === idx ? "확인" : "보기"}
              </Button>
            </div>
          );
        })}
        <div className="info-box">
          <ul>
            <li>E-Ticket은 예약 내역에서 다시 확인할 수 있습니다.</li>
            <li>
              가는 편/오는 편을 개별 예약했을 시 E-Ticket을 소지하시기 바랍니다.
              해외여행 시 오는 편 항공권을 갖고 있다는 것을 입증해야할 수도
              있습니다.
            </li>
            <li>
              항공기 교체 등의 부득이한 사유로 선택하신 좌석이 변경될 수 있으니
              체크인 시 기종 및 좌석 번호를 재확인해 주시기 바랍니다.
            </li>
          </ul>
        </div>
      </div>

      <aside className="right-box receipt-box">
        <Ticket passengerId={showTicketNum} data={data} code={code} />
      </aside>
    </section>
  );
};

export default TicketChk;

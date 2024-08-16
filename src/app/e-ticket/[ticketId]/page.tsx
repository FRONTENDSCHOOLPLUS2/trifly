import FetchOrderId from "@/lib/fetchOrder";
import React, { useRef } from "react";
import "./e-ticket.scss";

import TicketPrint from "./TicketPrint";

const page = async ({ params }: { params: { ticketId: string } }) => {
  const data = await FetchOrderId(params.ticketId);
  // const passenger = data.passengers;
  // console.log("xxxxxxticketDataFetchxxxxx", passenger);
  //여기서 나온 passengers의 객체들을 map을 돌려서 <TicketPrint /> component에 넘기고싶음
  // 넘긴 값을 변수로 담아서 documentTitles에 넣고?..
  // 아니 생각해보니까 여기서 map을 돌리면 안되는 것 같기도 함
  // 애초에 버튼마다 id값을 다르게 줘서 각 버튼마다 나오는 데이터가 달라야 하는거 아닌가??

  return (
    <>
      <h1 className="hidden">e-ticket</h1>
      <div className="text-box">
        <div className="ticket">
          <TicketPrint data={data} />
        </div>
      </div>
    </>
  );
};

export default page;

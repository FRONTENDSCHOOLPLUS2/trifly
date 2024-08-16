import FetchOrderId from "@/lib/fetchOrder";
import React from "react";
import "./e-ticket.scss";

const page = async ({ params }: { params: { ticketId: string } }) => {
  const data = await FetchOrderId(params.ticketId);
  // console.log("xxxxxxticketDataFetchxxxxx", data);

  return (
    <>
      <h1 className="hidden">e-ticket</h1>
      <div className="text-box">
        <div className="ticket">
          <div>탑승자명</div>
          <div className="test">{data.passengers[0].nameEng}</div>
        </div>
      </div>
    </>
  );
};

export default page;

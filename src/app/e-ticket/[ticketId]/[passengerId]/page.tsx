import "./e-ticket.scss";

import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrderId } from "@/lib/fetchOrder";
import { AirportData } from "@/types";
import TicketPrint from "../TicketPrint";

const page = async ({
  params,
}: {
  params: { ticketId: string; passengerId: number };
}) => {
  const data = await FetchOrderId(params.ticketId);
  const { code } = await fetchCodes<AirportData>();
  const passengerId = data.passengers.map((item, idx) => {
    return idx;
  });
  const passengerIdNumber = params.passengerId;

  return (
    <>
      <h1 className="hidden">e-ticket</h1>
      <div className="text-box">
        <div className="ticket">
          <TicketPrint
            data={data}
            code={code}
            passengerId={passengerIdNumber}
          />
        </div>
      </div>
    </>
  );
};

export default page;

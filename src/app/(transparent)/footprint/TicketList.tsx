import Ticket from "@/components/Ticket/Ticket";
import { AirportData, CodeState, OrderItem } from "@/types";
import React from "react";

interface DataType {
  year: string;
  data: OrderItem[];
}

const TicketList = ({
  data,
  code,
}: {
  data: DataType[];
  code: CodeState<AirportData>;
}) => {
  return data.map((yearData, yearIdx) => (
    <div key={`연도별-${yearIdx}`} className="tickets-inner">
      <h3 className="year">{yearData.year}</h3>
      <div className="tickets">
        {yearData.data.map((ticket) =>
          ticket.passengers.map((_, passengerIdx) => (
            <div
              key={`티켓-${ticket._id}-${Math.random()}`}
              className="ticket-inner"
            >
              <Ticket
                key={`승객-${passengerIdx}`}
                data={ticket}
                code={code}
                passengerId={passengerIdx}
              />
            </div>
          )),
        )}
      </div>
    </div>
  ));
};

export default TicketList;

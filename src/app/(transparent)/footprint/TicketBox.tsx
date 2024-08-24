"use client";

import Ticket from "@/components/Ticket/Ticket";
import { AirportData, CodeState, OrderItem } from "@/types";
import { useCallback, useEffect, useState } from "react";

interface DataType {
  year: string;
  data: OrderItem[];
}

const TicketBox = ({
  item,
  code,
}: {
  item: OrderItem[];
  code: CodeState<AirportData>;
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const dataByYear = item.reduce((arr, data) => {
    const itemYear = data.createdAt.slice(0, 4);
    const existItem = arr.find((arrData) => arrData.year === itemYear);

    if (existItem) existItem.data.push(data);
    else
      arr.push({
        year: itemYear,
        data: [data],
      });

    return arr;
  }, [] as DataType[]);

  return (
    <>
      <div className="tickets">
        {dataByYear.map((yearData) => {
          console.log(yearData);
          return (
            <>
              <h4 className="year">{yearData.year}</h4>
              <div className="tickets">
                {yearData.data.map((ticket) =>
                  ticket.passengers.map((_, idx) => (
                    <div key={ticket._id} className="ticket-inner">
                      <Ticket
                        key={idx}
                        data={ticket}
                        code={code}
                        passengerId={idx}
                      />
                    </div>
                  )),
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TicketBox;

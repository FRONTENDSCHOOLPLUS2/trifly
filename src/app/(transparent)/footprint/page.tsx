import Ticket from "@/components/Ticket/Ticket";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrder } from "@/lib/fetchOrder";
import { AirportData } from "@/types";
import Animation from "./Animation";
import "./footprint.scss";

const FootPrint = async () => {
  const { item } = await FetchOrder();
  const { code } = await fetchCodes<AirportData>();

  return (
    <div className="footprint">
      <section>
        <h2 className="hidden">대륙 별 여행 기록</h2>
        <Animation />
      </section>

      <section>
        <h2 className="hidden">포토티켓 모음</h2>
        <div className="tickets">
          {item.map((ticket) =>
            ticket.passengers.map((_, idx) => (
              <Ticket key={idx} data={ticket} code={code} passengerId={idx} />
            )),
          )}
        </div>
      </section>
    </div>
  );
};

export default FootPrint;

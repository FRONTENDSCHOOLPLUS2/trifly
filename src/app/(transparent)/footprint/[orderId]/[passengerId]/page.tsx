import Ticket from "@/components/Ticket/Ticket";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrderId } from "@/lib/fetchOrder";
import { AirportData } from "@/types";
import "@/app/(transparent)/footprint/footprint.scss";

const footprintDetailPage = async ({
  params: { orderId, passengerId },
}: {
  params: { orderId: string; passengerId: string };
}) => {
  const data = await FetchOrderId(orderId);
  const { code } = await fetchCodes<AirportData>();

  return (
    <div className="footprint detail">
      <section>
        <h2>티켓 상세</h2>
        <Ticket
          data={data}
          code={code}
          passengerId={+passengerId}
          type="modify"
        />
      </section>
    </div>
  );
};

export default footprintDetailPage;

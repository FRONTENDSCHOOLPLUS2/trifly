import "./seatmapSelect.scss";
import { FetchOrder } from "@/lib/fetchOrder";

import SeatmapGroup from "./SeatmapGroup";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AircraftData } from "@/types";
import OrderProgress from "../../OrderProgress";
import Scroll from "@/components/Scroll/Scroll";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const dataList = await FetchOrder();
  const data = dataList.item.find((item) => item.reservationId === id);
  const orderId = data!._id;
  const { code } = await fetchCodes<AircraftData>();

  return (
    <>
      <h3 className="hidden">좌석 선택</h3>
      <OrderProgress orderStatus={3} />
      <Scroll />
      <SeatmapGroup data={data} id={id} orderId={orderId} code={code} />;
    </>
  );
};

export default Page;

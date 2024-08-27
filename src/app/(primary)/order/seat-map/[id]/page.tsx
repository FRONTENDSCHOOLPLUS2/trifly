import "./seatmapSelect.scss";
import { FetchOrder } from "@/lib/fetchOrder";

import SeatmapGroup from "./SeatmapGroup";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AircraftData } from "@/types";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const dataList = await FetchOrder();
  const data = dataList.item.find((item) => item.reservationId === id);
  const orderId = data!._id;
  const { code } = await fetchCodes<AircraftData>();

  return <SeatmapGroup data={data} id={id} orderId={orderId} code={code} />;
};

export default Page;

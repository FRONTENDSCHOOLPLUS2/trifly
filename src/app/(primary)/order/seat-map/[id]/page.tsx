import "./seatmapSelect.scss";
import { FetchOrder } from "@/lib/fetchOrder";

import SeatmapGroup from "./SeatmapGroup";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const dataList = await FetchOrder();
  const data = dataList.item.find((item) => item.reservationId === id);

  return <SeatmapGroup data={data} id={id} />;
};

export default Page;

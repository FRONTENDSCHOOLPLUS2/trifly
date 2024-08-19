import { OffersSearch } from "@/types";

const TicketResultList = ({ data }: { data: OffersSearch }) => {
  console.log(data.data);

  return <div className="result-list">항공권 데이터</div>;
};

export default TicketResultList;

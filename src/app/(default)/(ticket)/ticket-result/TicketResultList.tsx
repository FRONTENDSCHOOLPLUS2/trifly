import { AirlineData, CodeState, OffersSearchData } from "@/types";
import TicketResultItem from "./TicketResultItem";
import "./TicketResultList.scss";

const TicketResultList = ({
  data,
  airline,
}: {
  data: OffersSearchData[];
  airline: CodeState<AirlineData>;
}) => {
  const resultList = data.map((item) => (
    <TicketResultItem key={item.id} item={item} airline={airline} />
  ));

  return <div className="result-list">{resultList}</div>;
};

export default TicketResultList;

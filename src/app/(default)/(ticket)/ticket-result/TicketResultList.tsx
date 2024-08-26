import { AirlineData, CodeState, OffersSearchData } from "@/types";
import TicketResultItem from "./TicketResultItem";
import "./TicketResultList.scss";

const TicketResultList = ({
  user,
  data,
  airline,
}: {
  user: boolean;
  data: OffersSearchData[];
  airline: CodeState<AirlineData>;
}) => {
  const resultList = data.map((item) => (
    <TicketResultItem key={item.id} user={user} item={item} airline={airline} />
  ));

  return <ul className="result-list">{resultList}</ul>;
};

export default TicketResultList;

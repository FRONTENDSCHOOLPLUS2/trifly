import { fetchCodes } from "@/data/fetch/fetchCode";
import "./TicketSearch.scss";
import TicketSearchBox from "./TicketSearchBox";

const TicketSearch = async () => {
  const { airportCode } = await fetchCodes();

  return <TicketSearchBox airport={airportCode} />;
};

export default TicketSearch;

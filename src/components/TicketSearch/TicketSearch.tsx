import { fetchCodes } from "@/data/fetch/fetchCode";
import "./TicketSearch.scss";
import TicketSearchBox from "./TicketSearchBox";

const TicketSearch = async () => {
  const { code, airportCode } = await fetchCodes();

  return <TicketSearchBox code={code} airport={airportCode} />;
};

export default TicketSearch;

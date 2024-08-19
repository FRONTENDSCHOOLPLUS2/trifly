import { fetchCodes } from "@/data/fetch/fetchCode";
import "./TicketSearch.scss";
import TicketSearchBox from "./TicketSearchBox";
import { AirportData } from "@/types";

const TicketSearch = async () => {
  const { code, airportCode } = await fetchCodes<AirportData>();

  return <TicketSearchBox code={code} airport={airportCode} />;
};

export default TicketSearch;

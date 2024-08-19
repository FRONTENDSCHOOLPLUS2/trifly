import SearchInfo from "@/components/TicketSearch/SearchInfo";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData } from "@/types";
import "./result.scss";

const TicketResult = async () => {
  const { code, airportCode } = await fetchCodes<AirportData>();

  return (
    <div className="result">
      <h2 className="hidden">항공권 검색 결과</h2>
      <section className="search-info full-width">
        <h3 className="hidden">항공권 검색 정보</h3>
        <SearchInfo code={code} airport={airportCode} />
      </section>

      <section className="search-result">
        <h3 className="hidden">항공권 검색 결과</h3>
        <div className="search-filter">
          <h3 className="hidden">필터</h3>
        </div>
      </section>
    </div>
  );
};

export default TicketResult;

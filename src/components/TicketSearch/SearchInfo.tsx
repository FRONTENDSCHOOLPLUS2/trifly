"use client";

import { AirportData } from "@/types";
import { useState } from "react";
import TicketSearchBox from "./TicketSearchBox";
import SearchInfoBox from "./SearchInfoBox";

const SearchInfo = ({
  code,
  airport,
}: {
  code: {
    [key: string]: AirportData;
  };
  airport: AirportData[];
}) => {
  const [searchMode, setSearchMode] = useState(false);

  const handleChange = () => {
    setSearchMode(!searchMode);
  };

  return (
    <>
      {searchMode ? (
        <TicketSearchBox
          code={code}
          airport={airport}
          handleChange={handleChange}
        />
      ) : (
        <SearchInfoBox handleChange={handleChange} />
      )}
    </>
  );
};

export default SearchInfo;

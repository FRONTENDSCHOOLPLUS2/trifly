import {
  AircraftData,
  AirlineData,
  AirportData,
  ApiRes,
  CodeData,
  CodeState,
  SingleItem,
} from "@/types";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;

interface CodeResult<T extends AirportData | AirlineData | AircraftData> {
  code: CodeState<T>;
  airportCode: AirportData[];
}

export const fetchCodes = async <
  T extends AirportData | AirlineData | AircraftData,
>(): Promise<CodeResult<T>> => {
  const url = `${SERVER}/codes`;
  const res = await fetch(url, {
    headers: {
      "client-id": CLIENT_ID,
    },
  });
  const resJson: ApiRes<SingleItem<CodeData>> = await res.json();

  if (!resJson.ok) {
    throw new Error("코드 조회 실패!");
  }

  return {
    code: resJson.item.flatten as CodeState<T>,
    airportCode: resJson.item.nested.airport.codes,
  };
};

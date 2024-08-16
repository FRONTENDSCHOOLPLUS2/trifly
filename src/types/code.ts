/* -------------------------------------------------------------------------- */
/*                                  코드 GET                                   */
/* -------------------------------------------------------------------------- */
export interface CodeData {
  nested: {
    airline: AirlineCodes;
    airport: AirportCodes;
    aircraft: AircraftCodes;
  };
  flatten: {
    [key: string]: AirlineData | AirportData | AircraftData;
  };
}

/* -------------------------------------------------------------------------- */
/*                                    코드 상태                                 */
/* -------------------------------------------------------------------------- */
export interface CodeState {
  [key: string]: AirlineData | AirportData | AircraftData;
}

/* -------------------------------------------------------------------------- */
/*                                 항공사 코드                                   */
/* -------------------------------------------------------------------------- */

interface AirlineCodes {
  _id: "airline";
  title: "항공사 코드";
  codes: AirlineData[];
}

export interface AirlineData {
  code: string;
  value: string;
  nameKor: string;
  nameEng: string;
  allianceKor?: "스카이팀" | "스타얼라이언스" | "원월드";
  allianceEng?: "Skyteam" | "Star Alliance" | "oneworld";
  carrierType: "FSC" | "LCC";
}

/* -------------------------------------------------------------------------- */
/*                                  공항 코드                                   */
/* -------------------------------------------------------------------------- */
interface AirportCodes {
  _id: "airport";
  title: "공항 코드";
  codes: AirportData[];
}

export interface AirportData {
  code: string;
  value: string;
  nameKor: string;
  nameEng: string;
  cityCode: string;
  countryCode: string;
  areaCode: string;
  img: string;
}

/* -------------------------------------------------------------------------- */
/*                                 항공기 코드                                   */
/* -------------------------------------------------------------------------- */
interface AircraftCodes {
  _id: "aircraft";
  title: "항공기 코드";
  codes: AircraftData[];
}

export interface AircraftData {
  code: string;
  value: string;
  nameKor: string;
  nameEng: string;
  manufacturerKor: "에어버스" | "보잉";
  manufacturerEng: "Airbus" | "Boeing";
  specKor: "협동체" | "광동체";
  specEng: "Narrow Body Aircraft" | "Wide Body Aircraft";
}

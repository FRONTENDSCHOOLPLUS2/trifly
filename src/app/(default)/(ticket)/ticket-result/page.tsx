import SearchInfo from "@/components/TicketSearch/SearchInfo";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData, OffersSearch } from "@/types";
import "./result.scss";
import { ITokenSuccess } from "@/types/amadeus";
import TicketResultList from "./TicketResultList";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;
const AMADEUS_CLIENT_ID = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID;
const AMADEUS_CLIENT_SECRET = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET;

interface IPageProps {
  searchParams: {
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: string;
    returnDate?: string;
    adults: string;
    children?: string;
    infants?: string;
    nonStop?: string;
    travelClass?: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
    currencyCode: "KRW";
  };
}

const fetchAuth = async (): Promise<string> => {
  const url = `${AMADEUS_API_SERVER}/v1/security/oauth2/token`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: AMADEUS_CLIENT_ID,
      client_secret: AMADEUS_CLIENT_SECRET,
    }),
    next: { revalidate: 60000 },
  });

  const resJson: ITokenSuccess = await res.json();

  if (!resJson.access_token) {
    throw new Error("Amadeus access_token을 불러올 수 없습니다!");
  }

  const accessToken = resJson.access_token;

  return accessToken;
};

const fetchTicketSearch = async (query: string): Promise<OffersSearch> => {
  let accessToken = await fetchAuth();

  const url = `${AMADEUS_API_SERVER}/v2/shopping/flight-offers?${query}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 401) {
      accessToken = await fetchAuth();

      const reRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const reResJson: OffersSearch = await reRes.json();

      if (!reResJson.meta) {
        throw new Error("검색에 실패했습니다.");
      }

      return reResJson;
    }

    const resJson: OffersSearch = await res.json();

    if (!resJson.meta) {
      throw new Error("검색에 실패했습니다.");
    }

    return resJson;
  } catch (e) {
    throw new Error("오류가 발생했습니다.");
  }
};

const TicketResult = async ({ searchParams }: IPageProps) => {
  const { code, airportCode } = await fetchCodes<AirportData>();
  const queryString = new URLSearchParams(searchParams).toString();
  // const data = await fetchTicketSearch(queryString);
  const data: OffersSearch = {
    meta: {
      count: 65,
      links: {
        self: "https://api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ICN&destinationLocationCode=SIN&departureDate=2024-08-23&adults=1&currencyCode=KRW&returnDate=2024-08-25&nonStop=true",
      },
    },
    data: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T19:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-24T00:45:00",
                },
                carrierCode: "TW",
                number: "171",
                aircraft: {
                  code: "330",
                },
                operating: {
                  carrierCode: "TW",
                },
                duration: "PT6H45M",
                id: "9",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H40M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T02:15:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:55:00",
                },
                carrierCode: "TW",
                number: "172",
                aircraft: {
                  code: "330",
                },
                operating: {
                  carrierCode: "TW",
                },
                duration: "PT6H40M",
                id: "16",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "375800.00",
          base: "195000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "375800.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["TW"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "375800.00",
              base: "195000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "IAS",
                class: "I",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "16",
                cabin: "ECONOMY",
                fareBasis: "DAS",
                class: "D",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 4,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "581600.00",
          base: "353400.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "581600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["OZ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "581600.00",
              base: "353400.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "VKKSZ",
                class: "V",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "VKKSZ",
                class: "V",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "3",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "671600.00",
          base: "470000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "671600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "671600.00",
              base: "470000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "4",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "671600.00",
          base: "470000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "671600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "671600.00",
              base: "470000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "5",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "671600.00",
          base: "470000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "671600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "671600.00",
              base: "470000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "6",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "671600.00",
          base: "470000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "671600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "671600.00",
              base: "470000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "7",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "691600.00",
          base: "490000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "691600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "691600.00",
              base: "490000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "8",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "691600.00",
          base: "490000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "691600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "691600.00",
              base: "490000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "LKEVZRKS",
                class: "L",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "9",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "711600.00",
          base: "510000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "711600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "711600.00",
              base: "510000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "KKEVZRKS",
                class: "K",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "10",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "711600.00",
          base: "510000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "711600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "711600.00",
              base: "510000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "KKEVZRKS",
                class: "K",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "11",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-22",
        lastTicketingDateTime: "2024-08-22",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "731600.00",
          base: "530000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "731600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "731600.00",
              base: "530000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "QKEVZFKS",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "KKEVZRKS",
                class: "K",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "12",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "13",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "14",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "15",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "16",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "17",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "18",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "19",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "909700.00",
          base: "790000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "909700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "909700.00",
              base: "790000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "20",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 1,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "21",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 1,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "22",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 1,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "23",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 1,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "24",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 6,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "25",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 6,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "26",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 6,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "27",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 6,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1244700.00",
          base: "1125000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1244700.00",
        },
        pricingOptions: {
          fareType: ["NEGOTIATED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1244700.00",
              base: "1125000.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "Q13KRRJPO",
                brandedFare: "YCLVALUE",
                brandedFareLabel: "ECONOMY VALUE",
                class: "Q",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "B11KRRJPO",
                brandedFare: "YCLFLEXI",
                brandedFareLabel: "ECONOMY FLEXI",
                class: "B",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "NO SHOW",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION STANDARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CANCELLATION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BOOKING CHANGE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT SELECTION FORWARD ZONE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "100 PERCENT KF MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE WITH MILES PWM",
                    isChargeable: false,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "28",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727400.00",
          base: "1580400.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727400.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727400.00",
              base: "1580400.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "29",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727400.00",
          base: "1580400.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727400.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727400.00",
              base: "1580400.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "30",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727400.00",
          base: "1580400.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727400.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KE"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727400.00",
              base: "1580400.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "31",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727500.00",
          base: "1567200.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727500.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["OZ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727500.00",
              base: "1567200.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "32",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727500.00",
          base: "1567200.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727500.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["OZ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727500.00",
              base: "1567200.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "33",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1727500.00",
          base: "1567200.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1727500.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["OZ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1727500.00",
              base: "1567200.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "34",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "35",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "36",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "37",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "38",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "39",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "40",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 3,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "41",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 3,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "42",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 3,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "43",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 8,
        itineraries: [
          {
            duration: "PT6H",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T18:40:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T23:40:00",
                },
                carrierCode: "KE",
                number: "645",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "44",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 8,
        itineraries: [
          {
            duration: "PT6H10M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T14:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-23T19:55:00",
                },
                carrierCode: "KE",
                number: "643",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "45",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 8,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-23T23:30:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-24T05:00:00",
                },
                carrierCode: "KE",
                number: "647",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "46",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "47",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "48",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "49",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "50",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "51",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "52",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T22:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-26T06:00:00",
                },
                carrierCode: "KE",
                number: "644",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H30M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "53",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "54",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "55",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T01:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T08:45:00",
                },
                carrierCode: "KE",
                number: "646",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "56",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "57",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H45M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "4",
                  at: "2024-08-25T10:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "2",
                  at: "2024-08-25T18:35:00",
                },
                carrierCode: "KE",
                number: "648",
                aircraft: {
                  code: "74H",
                },
                operating: {
                  carrierCode: "KE",
                },
                duration: "PT6H45M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1930600.00",
          base: "1810900.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1930600.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1930600.00",
              base: "1810900.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "58",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H25M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T02:25:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T09:50:00",
                },
                carrierCode: "SQ",
                number: "612",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H25M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "59",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T14:45:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T22:20:00",
                },
                carrierCode: "SQ",
                number: "606",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "60",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 3,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T00:10:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T07:45:00",
                },
                carrierCode: "SQ",
                number: "608",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "61",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 8,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-23T21:30:00",
                },
                carrierCode: "OZ",
                number: "751",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H20M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H35M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "2",
                  at: "2024-08-25T08:00:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-25T15:35:00",
                },
                carrierCode: "SQ",
                number: "600",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H35M",
                id: "14",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "62",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H15M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T16:45:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T22:00:00",
                },
                carrierCode: "SQ",
                number: "601",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "63",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T09:00:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T14:20:00",
                },
                carrierCode: "SQ",
                number: "607",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "64",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H20M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T23:50:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-24T05:10:00",
                },
                carrierCode: "SQ",
                number: "605",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "65",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2024-08-23",
        lastTicketingDateTime: "2024-08-23",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT6H30M",
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-23T11:10:00",
                },
                arrival: {
                  iataCode: "SIN",
                  terminal: "0",
                  at: "2024-08-23T16:40:00",
                },
                carrierCode: "SQ",
                number: "611",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "SQ",
                },
                duration: "PT6H30M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
          {
            duration: "PT6H50M",
            segments: [
              {
                departure: {
                  iataCode: "SIN",
                  terminal: "3",
                  at: "2024-08-25T22:50:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-26T06:40:00",
                },
                carrierCode: "OZ",
                number: "752",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "OZ",
                },
                duration: "PT6H50M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "1943900.00",
          base: "1756300.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "1943900.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SQ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "1943900.00",
              base: "1756300.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "YIFSQ",
                class: "Y",
                includedCheckedBags: {
                  weight: 30,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "YRT",
                class: "Y",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
    ],
    dictionaries: {
      locations: {
        ICN: {
          cityCode: "SEL",
          countryCode: "KR",
        },
        SIN: {
          cityCode: "SIN",
          countryCode: "SG",
        },
      },
      aircraft: {
        "330": "AIRBUS INDUSTRIE A330",
        "359": "AIRBUS A350-900",
        "773": "BOEING 777-300",
        "787": "787  ALL SERIES PASSENGER",
        "77W": "BOEING 777-300ER",
        "74H": "BOEING 747-8",
      },
      currencies: {
        KRW: "S.KOREAN WON",
      },
      carriers: {
        TW: "TWAY AIR",
        KE: "KOREAN AIR",
        OZ: "ASIANA AIRLINES",
        SQ: "SINGAPORE AIRLINES",
      },
    },
  };

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
        <div className="search-result-list">
          <h3 className="hidden">{data.data.length}개의 검색 결과</h3>
          <TicketResultList data={data} />
        </div>
      </section>
    </div>
  );
};

export default TicketResult;

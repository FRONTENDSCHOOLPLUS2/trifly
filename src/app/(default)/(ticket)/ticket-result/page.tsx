import SearchInfo from "@/components/TicketSearch/SearchInfo";
import { fetchCodes } from "@/data/fetch/fetchCode";
import {
  AirlineData,
  AirportData,
  OffersSearch,
  OffersSearchData,
} from "@/types";
import { ITokenSuccess } from "@/types/amadeus";
import Image from "next/image";
import "./result.scss";
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
  });

  const resJson: ITokenSuccess = await res.json();

  if (!resJson.access_token) {
    throw new Error("Amadeus access_token을 불러올 수 없습니다!");
  }

  const accessToken = resJson.access_token;

  return accessToken;
};

const fetchTicketSearch = async (
  query: string,
): Promise<OffersSearchData[]> => {
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

      return reResJson.data;
    }

    const resJson: OffersSearch = await res.json();

    if (!resJson.meta) {
      throw new Error("검색에 실패했습니다.");
    }

    return resJson.data;
  } catch (e) {
    console.error(e);
    throw new Error("오류가 발생했습니다.");
  }
};

const TicketResult = async ({ searchParams }: IPageProps) => {
  const { code, airportCode } = await fetchCodes<AirportData>();
  const { code: airline } = await fetchCodes<AirlineData>();
  const queryString = new URLSearchParams(searchParams).toString();
  const data = await fetchTicketSearch(queryString);
  // console.log(await fetchTicketSearch(queryString));

  /*
  const data: OffersSearchData[] = [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-24",
      lastTicketingDateTime: "2024-08-24",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT17H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-24T23:20:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-08-25T04:55:00",
              },
              carrierCode: "TK",
              number: "91",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT11H35M",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-08-25T07:25:00",
              },
              arrival: {
                iataCode: "ZRH",
                at: "2024-08-25T09:20:00",
              },
              carrierCode: "TK",
              number: "1907",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT2H55M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT30H55M",
          segments: [
            {
              departure: {
                iataCode: "ZRH",
                at: "2024-09-07T18:50:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-09-07T22:50:00",
              },
              carrierCode: "TK",
              number: "1910",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT3H",
              id: "130",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-09-08T16:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-09T08:45:00",
              },
              carrierCode: "TK",
              number: "20",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT9H50M",
              id: "131",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1096000.00",
        base: "356000.00",
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
        grandTotal: "1096000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["TK"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1096000.00",
            base: "356000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "130",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "131",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
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
      id: "2",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-24",
      lastTicketingDateTime: "2024-08-24",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT17H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-24T23:20:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-08-25T04:55:00",
              },
              carrierCode: "TK",
              number: "91",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT11H35M",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-08-25T07:25:00",
              },
              arrival: {
                iataCode: "ZRH",
                at: "2024-08-25T09:20:00",
              },
              carrierCode: "TK",
              number: "1907",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT2H55M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT34H45M",
          segments: [
            {
              departure: {
                iataCode: "ZRH",
                at: "2024-09-07T15:00:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-09-07T19:05:00",
              },
              carrierCode: "TK",
              number: "1914",
              aircraft: {
                code: "32B",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT3H5M",
              id: "114",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-09-08T16:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-09T08:45:00",
              },
              carrierCode: "TK",
              number: "20",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT9H50M",
              id: "115",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1096000.00",
        base: "356000.00",
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
        grandTotal: "1096000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["TK"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1096000.00",
            base: "356000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "114",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "115",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
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
      id: "3",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-24",
      lastTicketingDateTime: "2024-08-24",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT29H50M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-24T10:30:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-08-24T16:10:00",
              },
              carrierCode: "TK",
              number: "21",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT11H40M",
              id: "55",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-08-25T07:25:00",
              },
              arrival: {
                iataCode: "ZRH",
                at: "2024-08-25T09:20:00",
              },
              carrierCode: "TK",
              number: "1907",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT2H55M",
              id: "56",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT30H55M",
          segments: [
            {
              departure: {
                iataCode: "ZRH",
                at: "2024-09-07T18:50:00",
              },
              arrival: {
                iataCode: "IST",
                at: "2024-09-07T22:50:00",
              },
              carrierCode: "TK",
              number: "1910",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT3H",
              id: "130",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "IST",
                at: "2024-09-08T16:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-09T08:45:00",
              },
              carrierCode: "TK",
              number: "20",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "TK",
              },
              duration: "PT9H50M",
              id: "131",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1096000.00",
        base: "356000.00",
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
        grandTotal: "1096000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["TK"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1096000.00",
            base: "356000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "55",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "56",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "130",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "131",
              cabin: "ECONOMY",
              fareBasis: "UHR2XPX",
              brandedFare: "RS",
              brandedFareLabel: "RESTRICTED",
              class: "U",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "BAG INCLUDED",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "MEAL SERVICE",
                  isChargeable: false,
                  amenityType: "MEAL",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "STANDART SEAT SELECTION",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "ONLINE MESSAGE RIGHT",
                  isChargeable: false,
                  amenityType: "ENTERTAINMENT",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "FRONT SEAT SELECTION",
                  isChargeable: true,
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
    }
  ];
  */

  /* -------------------------------------------------------------------------- */
  /*                 carrierCode가 validCarrierCodes에 포함된 객체만 필터링           */
  /* -------------------------------------------------------------------------- */
  const filteredData = data.filter((offer) =>
    offer.itineraries.some((itinerary) =>
      itinerary.segments.some((segment) =>
        Object.keys(airline).includes(segment.carrierCode),
      ),
    ),
  );

  return (
    <>
      <div className="result">
        <h2 className="hidden">항공권 검색 결과</h2>
        <section className="search-info full-width">
          <h3 className="hidden">항공권 검색 정보</h3>
          <SearchInfo code={code} airport={airportCode} />
        </section>

        <section className="search-result full-width">
          <div className="search-result-layout">
            <h3 className="hidden">항공권 검색 결과</h3>
            <div className="search-filter pc">
              <h3 className="hidden">필터</h3>
              <div>필터</div>
            </div>
            {filteredData.length ? (
              <div className="search-result-list">
                <h3 className="hidden">{filteredData.length}개의 검색 결과</h3>

                <div className="result-list-header">
                  <div className="result-list-text">
                    <p className="result-list-title">
                      검색결과 총 <span>{filteredData.length}</span>건
                    </p>
                    <p className="result-list-description">
                      성인 1인 기준{" "}
                      {searchParams.returnDate ? "왕복 " : "편도 "}
                      요금입니다. <span>(세금 및 수수료 모두 포함)</span>
                    </p>
                  </div>

                  <div className="result-list-sort pc">
                    <label className="hidden" htmlFor="sorting">
                      항공권 정렬
                    </label>
                    <select className="sorting" name="sorting" id="sorting">
                      <option value="priceLow">가격 낮은 순</option>
                      <option value="durationShort">비행시간 짧은 순</option>
                      <option value="depDepTime">
                        가는날 출발시간 빠른 순
                      </option>
                      <option value="returnDepTime">
                        오는날 출발시간 빠른 순
                      </option>
                      <option value="depArrTime">
                        가는날 도착시간 빠른 순
                      </option>
                      <option value="returnArrTime">
                        오는날 도착시간 빠른 순
                      </option>
                    </select>
                  </div>
                </div>

                <TicketResultList data={filteredData} airline={airline} />
              </div>
            ) : (
              <div className="no-search-result">
                <div className="img-box">
                  <Image
                    src="/img/icon-no-result.svg"
                    alt="검색 결과 없음"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </div>
                <div className="no-result-message">
                  <p className="no-result-title">항공권을 찾을 수 없습니다.</p>
                  <p className="no-result-description">
                    조건에 맞는 항공편을 다시 검색해보세요.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <button className="filter-button" type="button">
        <div className="img-box">
          <Image
            src="/img/icon-filter.svg"
            alt="필터"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <span>필터</span>
      </button>
    </>
  );
};

export default TicketResult;

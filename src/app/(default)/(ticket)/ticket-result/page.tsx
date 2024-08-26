import { auth } from "@/auth";
import SearchInfo from "@/components/TicketSearch/SearchInfo";
import fetchAuth from "@/data/fetch/fetchAuth";
import { fetchCodes } from "@/data/fetch/fetchCode";
import {
  AirlineData,
  AirportData,
  OffersSearch,
  OffersSearchData,
} from "@/types";
import Result from "./Result";
import "./result.scss";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;

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
      cache: "no-store",
    });

    if (res.status === 401) {
      accessToken = await fetchAuth();

      const reRes = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
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
  const session = await auth();
  const user = !!session?.user;
  const { returnDate } = searchParams;

  const { code, airportCode } = await fetchCodes<AirportData>();
  const { code: airline } = await fetchCodes<AirlineData>();
  const queryString = new URLSearchParams(searchParams).toString();
  const data = await fetchTicketSearch(queryString);

  const data1: OffersSearchData[] = [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "85",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T08:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T11:15:00",
              },
              carrierCode: "MU",
              number: "579",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "86",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "312700.00",
        base: "136300.00",
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
        grandTotal: "312700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "312700.00",
            base: "136300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "85",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "86",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT23H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "81",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T15:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T18:10:00",
              },
              carrierCode: "MU",
              number: "2921",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "82",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "312700.00",
        base: "136300.00",
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
        grandTotal: "312700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "312700.00",
            base: "136300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "81",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "82",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "85",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T08:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T11:15:00",
              },
              carrierCode: "MU",
              number: "579",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "86",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "312700.00",
        base: "136300.00",
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
        grandTotal: "312700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "312700.00",
            base: "136300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "85",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "86",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT23H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "81",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T15:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T18:10:00",
              },
              carrierCode: "MU",
              number: "2921",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "82",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "312700.00",
        base: "136300.00",
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
        grandTotal: "312700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "312700.00",
            base: "136300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "81",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "82",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT19H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "51",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "52",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "51",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "52",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT19H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "51",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "52",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "51",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "52",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "21",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "22",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "21",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "22",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "21",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "22",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "21",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "22",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT27H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "9",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT27H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "9",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "338900.00",
        base: "175500.00",
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
        grandTotal: "338900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "338900.00",
            base: "175500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T17:30:00",
              },
              carrierCode: "MU",
              number: "5034",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H10M",
              id: "7",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-30T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-30T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "8",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "85",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T08:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T11:15:00",
              },
              carrierCode: "MU",
              number: "579",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "86",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "359700.00",
        base: "183300.00",
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
        grandTotal: "359700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "359700.00",
            base: "183300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "7",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "8",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "85",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "86",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T17:30:00",
              },
              carrierCode: "MU",
              number: "5034",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H10M",
              id: "7",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-30T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-30T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "8",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT23H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "81",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T15:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T18:10:00",
              },
              carrierCode: "MU",
              number: "2921",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "82",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "359700.00",
        base: "183300.00",
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
        grandTotal: "359700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "359700.00",
            base: "183300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "7",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "8",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "81",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "82",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "13",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT19H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "51",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "52",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT26H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "102",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "103",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "363400.00",
        base: "200000.00",
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
        grandTotal: "363400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "363400.00",
            base: "200000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "51",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "52",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "102",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "103",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "21",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "22",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT26H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "102",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "103",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "363400.00",
        base: "200000.00",
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
        grandTotal: "363400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "363400.00",
            base: "200000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "21",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "22",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "102",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "103",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT27H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "9",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT26H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "102",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "103",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "363400.00",
        base: "200000.00",
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
        grandTotal: "363400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "363400.00",
            base: "200000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "102",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "103",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H45M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:05:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T10:50:00",
              },
              carrierCode: "7C",
              number: "2601",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "7C",
              },
              duration: "PT2H45M",
              id: "55",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:50:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T15:15:00",
              },
              carrierCode: "7C",
              number: "2602",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "7C",
              },
              duration: "PT2H25M",
              id: "83",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "372200.00",
        base: "251000.00",
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
        grandTotal: "372200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["7C"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "372200.00",
            base: "251000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "55",
              cabin: "ECONOMY",
              fareBasis: "WV3OKR",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "83",
              cabin: "ECONOMY",
              fareBasis: "RV3OKR",
              class: "R",
              includedCheckedBags: {
                weight: 15,
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
      id: "17",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT10H20M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "13",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T17:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T19:15:00",
              },
              carrierCode: "NX",
              number: "618",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H40M",
              id: "14",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "13",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "14",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT10H20M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "13",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T17:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T19:15:00",
              },
              carrierCode: "NX",
              number: "618",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H40M",
              id: "14",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "13",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "14",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "5",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "6",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "5",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "6",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "5",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "6",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "5",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "6",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT28H45M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "59",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "60",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT19H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "NX",
              number: "9609",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "67",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "68",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "59",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "60",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "67",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "68",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT28H45M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "59",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "60",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "108",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "109",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "382900.00",
        base: "219500.00",
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
        grandTotal: "382900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "382900.00",
            base: "219500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "59",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "60",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "108",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "109",
              cabin: "ECONOMY",
              fareBasis: "ERTKR2",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT26H20M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T17:30:00",
              },
              carrierCode: "MU",
              number: "5034",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H10M",
              id: "17",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-30T15:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-30T17:40:00",
              },
              carrierCode: "MU",
              number: "5005",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H45M",
              id: "18",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "85",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T08:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T11:15:00",
              },
              carrierCode: "MU",
              number: "579",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "86",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "391200.00",
        base: "214800.00",
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
        grandTotal: "391200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "391200.00",
            base: "214800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "17",
              cabin: "ECONOMY",
              fareBasis: "RSE00CS9",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "18",
              cabin: "ECONOMY",
              fareBasis: "RSE00CS9",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "85",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "86",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "26",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT26H20M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T17:30:00",
              },
              carrierCode: "MU",
              number: "5034",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H10M",
              id: "17",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-30T15:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-30T17:40:00",
              },
              carrierCode: "MU",
              number: "5005",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H45M",
              id: "18",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT23H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:50:00",
              },
              arrival: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-08-31T19:55:00",
              },
              carrierCode: "MU",
              number: "5002",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "81",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "NKG",
                terminal: "2",
                at: "2024-09-01T15:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T18:10:00",
              },
              carrierCode: "MU",
              number: "2921",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H5M",
              id: "82",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "391200.00",
        base: "214800.00",
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
        grandTotal: "391200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "391200.00",
            base: "214800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "17",
              cabin: "ECONOMY",
              fareBasis: "RSE00CS9",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "18",
              cabin: "ECONOMY",
              fareBasis: "RSE00CS9",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "81",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "T",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "82",
              cabin: "ECONOMY",
              fareBasis: "TSE00OS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "27",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT21H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T13:30:00",
              },
              arrival: {
                iataCode: "XMN",
                terminal: "3",
                at: "2024-08-29T15:15:00",
              },
              carrierCode: "MF",
              number: "872",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MF",
              },
              duration: "PT2H45M",
              id: "53",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "XMN",
                terminal: "3",
                at: "2024-08-30T08:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-30T10:10:00",
              },
              carrierCode: "MF",
              number: "887",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MF",
              },
              duration: "PT2H",
              id: "54",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT18H35M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T20:45:00",
              },
              arrival: {
                iataCode: "FOC",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "MF",
              number: "884",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MF",
              },
              duration: "PT1H30M",
              id: "106",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "FOC",
                at: "2024-09-01T13:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-09-01T16:20:00",
              },
              carrierCode: "MF",
              number: "877",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MF",
              },
              duration: "PT2H15M",
              id: "107",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "394900.00",
        base: "191500.00",
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
        grandTotal: "394900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MF"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "394900.00",
            base: "191500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "53",
              cabin: "ECONOMY",
              fareBasis: "S3M6CASS",
              brandedFare: "YSTANDARD",
              brandedFareLabel: "ECONOMY STANDARD",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "CHECKED BAG 1PC OF 23KG 158CM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "54",
              cabin: "ECONOMY",
              fareBasis: "S3M6CASS",
              brandedFare: "YSTANDARD",
              brandedFareLabel: "ECONOMY STANDARD",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "CHECKED BAG 1PC OF 23KG 158CM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "106",
              cabin: "ECONOMY",
              fareBasis: "S3M6CASS",
              brandedFare: "YSTANDARD",
              brandedFareLabel: "ECONOMY STANDARD",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "CHECKED BAG 1PC OF 23KG 158CM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
              ],
            },
            {
              segmentId: "107",
              cabin: "ECONOMY",
              fareBasis: "S3M6CASS",
              brandedFare: "YSTANDARD",
              brandedFareLabel: "ECONOMY STANDARD",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "CHECKED BAG 1PC OF 23KG 158CM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "REFUNDABLE  TICKET",
                  isChargeable: true,
                  amenityType: "BRANDED_FARES",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "CHANGEABLE  TICKET",
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
      id: "28",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-26",
      lastTicketingDateTime: "2024-08-26",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H45M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:05:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T10:50:00",
              },
              carrierCode: "H1",
              number: "9869",
              aircraft: {
                code: "737",
              },
              operating: {
                carrierCode: "7C",
              },
              duration: "PT2H45M",
              id: "56",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H25M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:50:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T15:15:00",
              },
              carrierCode: "H1",
              number: "9870",
              aircraft: {
                code: "737",
              },
              operating: {
                carrierCode: "7C",
              },
              duration: "PT2H25M",
              id: "84",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "396400.00",
        base: "286000.00",
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
        grandTotal: "396400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "396400.00",
            base: "286000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "56",
              cabin: "ECONOMY",
              fareBasis: "OOW7C",
              class: "O",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "84",
              cabin: "ECONOMY",
              fareBasis: "ROW7C",
              class: "R",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H45M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T17:15:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T19:05:00",
              },
              carrierCode: "MU",
              number: "5098",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "118",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-09-01T08:10:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-09-01T11:00:00",
              },
              carrierCode: "MU",
              number: "511",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "119",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "118",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "119",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT24H55M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T18:40:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "MU",
              number: "5006",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "122",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-09-01T16:45:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T20:35:00",
              },
              carrierCode: "MU",
              number: "5011",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H50M",
              id: "123",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "122",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "123",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT25H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T18:40:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "MU",
              number: "5006",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "71",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-09-01T17:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T20:45:00",
              },
              carrierCode: "MU",
              number: "5051",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H25M",
              id: "72",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "71",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "72",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT25H35M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T17:15:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T19:05:00",
              },
              carrierCode: "MU",
              number: "5098",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "110",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-09-01T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-09-01T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "111",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "110",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "111",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT16H45M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T17:15:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T19:05:00",
              },
              carrierCode: "MU",
              number: "5098",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "118",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-09-01T08:10:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-09-01T11:00:00",
              },
              carrierCode: "MU",
              number: "511",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "119",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "118",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "119",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT24H55M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T18:40:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "MU",
              number: "5006",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "122",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-09-01T16:45:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T20:35:00",
              },
              carrierCode: "MU",
              number: "5011",
              aircraft: {
                code: "319",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H50M",
              id: "123",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "122",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "123",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT25H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T18:40:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "MU",
              number: "5006",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "71",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-09-01T17:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T20:45:00",
              },
              carrierCode: "MU",
              number: "5051",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H25M",
              id: "72",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "71",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "72",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT23H15M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "MU",
              number: "512",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "11",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-30T08:15:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-30T10:15:00",
              },
              carrierCode: "MU",
              number: "8627",
              aircraft: {
                code: "73L",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT2H",
              id: "12",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT25H35M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T17:15:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T19:05:00",
              },
              carrierCode: "MU",
              number: "5098",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H50M",
              id: "110",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-09-01T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-09-01T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "111",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "405900.00",
        base: "229500.00",
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
        grandTotal: "405900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "405900.00",
            base: "229500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "11",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "12",
              cabin: "ECONOMY",
              fareBasis: "VSE00CS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "110",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "111",
              cabin: "ECONOMY",
              fareBasis: "SSE00CS9",
              class: "S",
              includedCheckedBags: {
                quantity: 2,
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT19H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "51",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "52",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "51",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "52",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "21",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "22",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "21",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "22",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT19H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "51",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T07:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:55:00",
              },
              carrierCode: "NX",
              number: "632",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "52",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT12H",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "61",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "62",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "51",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "52",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "61",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "62",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT26H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "102",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-09-01T08:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:15:00",
              },
              carrierCode: "NX",
              number: "822",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "103",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "102",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "103",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT27H5M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "9",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT24H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T17:15:00",
              },
              carrierCode: "NX",
              number: "821",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H",
              id: "21",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-30T11:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T13:40:00",
              },
              carrierCode: "NX",
              number: "628",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H45M",
              id: "22",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT12H",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T09:45:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T11:40:00",
              },
              carrierCode: "NX",
              number: "631",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H55M",
              id: "61",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "62",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "407400.00",
        base: "244000.00",
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
        grandTotal: "407400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "407400.00",
            base: "244000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "21",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "22",
              cabin: "ECONOMY",
              fareBasis: "RRTKR2",
              class: "R",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "61",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "62",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT15H35M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T19:25:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T20:30:00",
              },
              carrierCode: "KE",
              number: "1831",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "36",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-30T08:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T10:00:00",
              },
              carrierCode: "KE",
              number: "2249",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "37",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "441600.00",
        base: "332200.00",
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
        grandTotal: "441600.00",
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
            total: "441600.00",
            base: "332200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "36",
              cabin: "ECONOMY",
              fareBasis: "YKE",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "37",
              cabin: "ECONOMY",
              fareBasis: "QKEVZFKC",
              class: "Q",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      id: "44",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "BR",
              number: "160",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "94",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "450500.00",
        base: "312000.00",
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
        grandTotal: "450500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "450500.00",
            base: "312000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "SLKR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "94",
              cabin: "ECONOMY",
              fareBasis: "VLKR",
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
      id: "45",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "451400.00",
        base: "288000.00",
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
        grandTotal: "451400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "451400.00",
            base: "288000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "462200.00",
        base: "355200.00",
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
        grandTotal: "462200.00",
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
            total: "462200.00",
            base: "355200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
              cabin: "ECONOMY",
              fareBasis: "SKKS",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
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
      id: "47",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "462200.00",
        base: "355200.00",
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
        grandTotal: "462200.00",
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
            total: "462200.00",
            base: "355200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
              cabin: "ECONOMY",
              fareBasis: "SKKS",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "120",
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
      id: "48",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "463900.00",
        base: "353500.00",
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
        grandTotal: "463900.00",
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
            total: "463900.00",
            base: "353500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "463900.00",
        base: "353500.00",
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
        grandTotal: "463900.00",
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
            total: "463900.00",
            base: "353500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "BR",
              number: "159",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "45",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "BR",
              number: "160",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "94",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "473000.00",
        base: "334500.00",
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
        grandTotal: "473000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "473000.00",
            base: "334500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "45",
              cabin: "ECONOMY",
              fareBasis: "QLKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "94",
              cabin: "ECONOMY",
              fareBasis: "VLKR",
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
      id: "51",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "CI",
              number: "161",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "32",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "CI",
              number: "162",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "104",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "473500.00",
        base: "335000.00",
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
        grandTotal: "473500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "473500.00",
            base: "335000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "32",
              cabin: "ECONOMY",
              fareBasis: "QKKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "104",
              cabin: "ECONOMY",
              fareBasis: "NKKR",
              class: "N",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "480400.00",
        base: "370000.00",
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
        grandTotal: "480400.00",
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
            total: "480400.00",
            base: "370000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "SNE0ZLKC",
              class: "S",
              includedCheckedBags: {
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "480400.00",
        base: "370000.00",
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
        grandTotal: "480400.00",
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
            total: "480400.00",
            base: "370000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "SNE0ZLKC",
              class: "S",
              includedCheckedBags: {
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "OZ",
              number: "6873",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "31",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "507200.00",
        base: "400200.00",
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
        grandTotal: "507200.00",
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
            total: "507200.00",
            base: "400200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "31",
              cabin: "ECONOMY",
              fareBasis: "SKKSBR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
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
      id: "55",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "OZ",
              number: "6873",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "31",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "507200.00",
        base: "400200.00",
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
        grandTotal: "507200.00",
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
            total: "507200.00",
            base: "400200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "31",
              cabin: "ECONOMY",
              fareBasis: "SKKSBR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "120",
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
      id: "56",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T13:55:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-29T15:35:00",
              },
              carrierCode: "CI",
              number: "261",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "42",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "CI",
              number: "162",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "104",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "516000.00",
        base: "377500.00",
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
        grandTotal: "516000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "516000.00",
            base: "377500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "42",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "104",
              cabin: "ECONOMY",
              fareBasis: "NKKR",
              class: "N",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "CI",
              number: "163",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "47",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "CI",
              number: "162",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "104",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "516000.00",
        base: "377500.00",
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
        grandTotal: "516000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "516000.00",
            base: "377500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "47",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "104",
              cabin: "ECONOMY",
              fareBasis: "NKKR",
              class: "N",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "BR",
              number: "2147",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "24",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "BR",
              number: "160",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "94",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "520500.00",
        base: "382000.00",
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
        grandTotal: "520500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "520500.00",
            base: "382000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "24",
              cabin: "ECONOMY",
              fareBasis: "WCSKR",
              class: "W",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "94",
              cabin: "ECONOMY",
              fareBasis: "VLKR",
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
      id: "59",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "522000.00",
        base: "415000.00",
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
        grandTotal: "522000.00",
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
            total: "522000.00",
            base: "415000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
              cabin: "ECONOMY",
              fareBasis: "SKKS",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKKSBR",
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
      id: "60",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "522200.00",
        base: "415200.00",
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
        grandTotal: "522200.00",
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
            total: "522200.00",
            base: "415200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
              cabin: "ECONOMY",
              fareBasis: "MKKS",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
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
      id: "61",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "522200.00",
        base: "415200.00",
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
        grandTotal: "522200.00",
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
            total: "522200.00",
            base: "415200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
              cabin: "ECONOMY",
              fareBasis: "MKKS",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "120",
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
      id: "62",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "523900.00",
        base: "413500.00",
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
        grandTotal: "523900.00",
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
            total: "523900.00",
            base: "413500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "CI",
              number: "9065",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "41",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "CI",
              number: "162",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "104",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "528500.00",
        base: "390000.00",
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
        grandTotal: "528500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "528500.00",
            base: "390000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "41",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "104",
              cabin: "ECONOMY",
              fareBasis: "NKKR",
              class: "N",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "CI",
              number: "9067",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "44",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "CI",
              number: "162",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "104",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "528500.00",
        base: "390000.00",
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
        grandTotal: "528500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "528500.00",
            base: "390000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "44",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "104",
              cabin: "ECONOMY",
              fareBasis: "NKKR",
              class: "N",
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
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "540400.00",
        base: "430000.00",
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
        grandTotal: "540400.00",
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
            total: "540400.00",
            base: "430000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "SNE0ZLKC",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "66",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "540400.00",
        base: "430000.00",
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
        grandTotal: "540400.00",
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
            total: "540400.00",
            base: "430000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "92",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
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
      id: "67",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "540400.00",
        base: "430000.00",
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
        grandTotal: "540400.00",
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
            total: "540400.00",
            base: "430000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "92",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
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
      id: "68",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "550900.00",
        base: "414000.00",
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
        grandTotal: "550900.00",
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
            total: "550900.00",
            base: "414000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "YRTLJ",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "69",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT5H",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T11:40:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T12:40:00",
              },
              carrierCode: "OZ",
              number: "8811",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT1H",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:40:00",
              },
              carrierCode: "OZ",
              number: "9431",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT2H25M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "554200.00",
        base: "448200.00",
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
        grandTotal: "554200.00",
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
            total: "554200.00",
            base: "448200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "YOZ",
              class: "Y",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "QKKSBX",
              class: "Q",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "96",
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
      id: "70",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT5H",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T11:40:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T12:40:00",
              },
              carrierCode: "OZ",
              number: "8811",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT1H",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:40:00",
              },
              carrierCode: "OZ",
              number: "9431",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT2H25M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "554200.00",
        base: "448200.00",
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
        grandTotal: "554200.00",
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
            total: "554200.00",
            base: "448200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "YOZ",
              class: "Y",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "QKKSBX",
              class: "Q",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "120",
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
      id: "71",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T09:20:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T12:50:00",
              },
              carrierCode: "BR",
              number: "156",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "90",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "558500.00",
        base: "420000.00",
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
        grandTotal: "558500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "558500.00",
            base: "420000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "SLKR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "90",
              cabin: "ECONOMY",
              fareBasis: "MLKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "72",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "560400.00",
        base: "450000.00",
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
        grandTotal: "560400.00",
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
            total: "560400.00",
            base: "450000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "105",
              cabin: "ECONOMY",
              fareBasis: "HKE0ZRKC",
              class: "H",
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
      id: "73",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "560400.00",
        base: "450000.00",
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
        grandTotal: "560400.00",
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
            total: "560400.00",
            base: "450000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "105",
              cabin: "ECONOMY",
              fareBasis: "HKE0ZRKC",
              class: "H",
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
      id: "74",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "BR",
              number: "2150",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "97",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "563500.00",
        base: "425000.00",
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
        grandTotal: "563500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "563500.00",
            base: "425000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "SLKR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "97",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "75",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "BR",
              number: "2148",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "121",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "563500.00",
        base: "425000.00",
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
        grandTotal: "563500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "563500.00",
            base: "425000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "SLKR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "121",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "76",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "CI",
              number: "161",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "32",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "CI",
              number: "160",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "88",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "563500.00",
        base: "425000.00",
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
        grandTotal: "563500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "563500.00",
            base: "425000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "32",
              cabin: "ECONOMY",
              fareBasis: "QKKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "88",
              cabin: "ECONOMY",
              fareBasis: "MKKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "77",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "CI",
              number: "161",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "32",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "CI",
              number: "9066",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "113",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "563500.00",
        base: "425000.00",
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
        grandTotal: "563500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "563500.00",
            base: "425000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "32",
              cabin: "ECONOMY",
              fareBasis: "QKKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "113",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
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
      id: "78",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "OZ",
              number: "6873",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "31",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "567000.00",
        base: "460000.00",
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
        grandTotal: "567000.00",
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
            total: "567000.00",
            base: "460000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "31",
              cabin: "ECONOMY",
              fareBasis: "SKKSBR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKKSBR",
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
      id: "79",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "568100.00",
        base: "453700.00",
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
        grandTotal: "568100.00",
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
            total: "568100.00",
            base: "453700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "73",
              cabin: "ECONOMY",
              fareBasis: "LKEVZRKC",
              class: "L",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "74",
              cabin: "ECONOMY",
              fareBasis: "YKE",
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
      id: "80",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "568100.00",
        base: "453700.00",
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
        grandTotal: "568100.00",
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
            total: "568100.00",
            base: "453700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "73",
              cabin: "ECONOMY",
              fareBasis: "LKEVZRKC",
              class: "L",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "74",
              cabin: "ECONOMY",
              fareBasis: "YKE",
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
      id: "81",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "575100.00",
        base: "394400.00",
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
        grandTotal: "575100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "575100.00",
            base: "394400.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE0WOS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "ECONOMY",
              fareBasis: "VSE0WOS9",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "SOWTW",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "SOWKR",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "82",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "BR",
              number: "159",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "45",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T09:20:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T12:50:00",
              },
              carrierCode: "BR",
              number: "156",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "90",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "581000.00",
        base: "442500.00",
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
        grandTotal: "581000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "581000.00",
            base: "442500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "45",
              cabin: "ECONOMY",
              fareBasis: "QLKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "90",
              cabin: "ECONOMY",
              fareBasis: "MLKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "83",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 8,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT21H",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-31T17:40:00",
              },
              carrierCode: "HX",
              number: "255",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H55M",
              id: "63",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-09-01T08:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T13:45:00",
              },
              carrierCode: "HX",
              number: "628",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "64",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "581300.00",
        base: "401400.00",
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
        grandTotal: "581300.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["GP"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "581300.00",
            base: "401400.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "VA3FRKR",
              class: "V",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FRHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "63",
              cabin: "ECONOMY",
              fareBasis: "VA3FRHS",
              class: "V",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "64",
              cabin: "ECONOMY",
              fareBasis: "VA3FRKR",
              class: "V",
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
      id: "84",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "582000.00",
        base: "475000.00",
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
        grandTotal: "582000.00",
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
            total: "582000.00",
            base: "475000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
              cabin: "ECONOMY",
              fareBasis: "MKKS",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKKSBR",
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
      id: "85",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "BR",
              number: "159",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "45",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "BR",
              number: "2150",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "97",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "586000.00",
        base: "447500.00",
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
        grandTotal: "586000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "586000.00",
            base: "447500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "45",
              cabin: "ECONOMY",
              fareBasis: "QLKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "97",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "86",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "BR",
              number: "159",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "45",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "BR",
              number: "2148",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "121",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "586000.00",
        base: "447500.00",
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
        grandTotal: "586000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "586000.00",
            base: "447500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "45",
              cabin: "ECONOMY",
              fareBasis: "QLKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "121",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "87",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "592500.00",
        base: "457300.00",
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
        grandTotal: "592500.00",
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
            total: "592500.00",
            base: "457300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "88",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "592500.00",
        base: "457300.00",
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
        grandTotal: "592500.00",
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
            total: "592500.00",
            base: "457300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "89",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "592500.00",
        base: "487800.00",
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
        grandTotal: "592500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "592500.00",
            base: "487800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "96",
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
      id: "90",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "592500.00",
        base: "487800.00",
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
        grandTotal: "592500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "592500.00",
            base: "487800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "120",
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
      id: "91",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "457300.00",
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
        grandTotal: "594200.00",
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
            total: "594200.00",
            base: "457300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
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
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "92",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "457300.00",
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
        grandTotal: "594200.00",
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
            total: "594200.00",
            base: "457300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
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
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "93",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "457300.00",
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
        grandTotal: "594200.00",
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
            total: "594200.00",
            base: "457300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
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
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "94",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "489500.00",
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
        grandTotal: "594200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "594200.00",
            base: "489500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "92",
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
      id: "95",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "489500.00",
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
        grandTotal: "594200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "594200.00",
            base: "489500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "112",
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
      id: "96",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "594200.00",
        base: "489500.00",
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
        grandTotal: "594200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "594200.00",
            base: "489500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "105",
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
      id: "97",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "598200.00",
        base: "489500.00",
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
        grandTotal: "598200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "598200.00",
            base: "489500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "75",
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
              segmentId: "76",
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
      id: "98",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "598200.00",
        base: "489500.00",
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
        grandTotal: "598200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "598200.00",
            base: "489500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "73",
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
              segmentId: "74",
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
      id: "99",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "600400.00",
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
        grandTotal: "600400.00",
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
            total: "600400.00",
            base: "490000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "92",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
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
      id: "100",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "CI",
              number: "161",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "32",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "CI",
              number: "9064",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "93",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "603500.00",
        base: "465000.00",
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
        grandTotal: "603500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "603500.00",
            base: "465000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "32",
              cabin: "ECONOMY",
              fareBasis: "QKKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "93",
              cabin: "ECONOMY",
              fareBasis: "BKCDKR",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "101",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T13:55:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-29T15:35:00",
              },
              carrierCode: "CI",
              number: "261",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "42",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "CI",
              number: "160",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "88",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "606000.00",
        base: "467500.00",
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
        grandTotal: "606000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "606000.00",
            base: "467500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "42",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "88",
              cabin: "ECONOMY",
              fareBasis: "MKKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "102",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "CI",
              number: "163",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "47",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "CI",
              number: "160",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "88",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "606000.00",
        base: "467500.00",
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
        grandTotal: "606000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "606000.00",
            base: "467500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "47",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "88",
              cabin: "ECONOMY",
              fareBasis: "MKKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "103",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T13:55:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-29T15:35:00",
              },
              carrierCode: "CI",
              number: "261",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "42",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "CI",
              number: "9066",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "113",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "606000.00",
        base: "467500.00",
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
        grandTotal: "606000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "606000.00",
            base: "467500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "42",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "113",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
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
      id: "104",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "CI",
              number: "163",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "47",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "CI",
              number: "9066",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "113",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "606000.00",
        base: "467500.00",
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
        grandTotal: "606000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "606000.00",
            base: "467500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "47",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "113",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
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
      id: "105",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT5H",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T11:40:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T12:40:00",
              },
              carrierCode: "OZ",
              number: "8811",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT1H",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:40:00",
              },
              carrierCode: "OZ",
              number: "9431",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BX",
              },
              duration: "PT2H25M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "614000.00",
        base: "508000.00",
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
        grandTotal: "614000.00",
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
            total: "614000.00",
            base: "508000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "YOZ",
              class: "Y",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "QKKSBX",
              class: "Q",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKKSBR",
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
      id: "106",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "CI",
              number: "9065",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "41",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "CI",
              number: "160",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "88",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "618500.00",
        base: "480000.00",
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
        grandTotal: "618500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "618500.00",
            base: "480000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "41",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "88",
              cabin: "ECONOMY",
              fareBasis: "MKKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "107",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "CI",
              number: "9067",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "44",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "CI",
              number: "160",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "88",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "618500.00",
        base: "480000.00",
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
        grandTotal: "618500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "618500.00",
            base: "480000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "44",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "88",
              cabin: "ECONOMY",
              fareBasis: "MKKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "108",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "CI",
              number: "9065",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "41",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "CI",
              number: "9066",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "113",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "618500.00",
        base: "480000.00",
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
        grandTotal: "618500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "618500.00",
            base: "480000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "41",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "113",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
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
      id: "109",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "CI",
              number: "9067",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "44",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "CI",
              number: "9066",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "113",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "618500.00",
        base: "480000.00",
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
        grandTotal: "618500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "618500.00",
            base: "480000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "44",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "113",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
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
      id: "110",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "620400.00",
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
        grandTotal: "620400.00",
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
            total: "620400.00",
            base: "510000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "105",
              cabin: "ECONOMY",
              fareBasis: "HKE0ZRKC",
              class: "H",
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
      id: "111",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "628100.00",
        base: "513700.00",
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
        grandTotal: "628100.00",
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
            total: "628100.00",
            base: "513700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "73",
              cabin: "ECONOMY",
              fareBasis: "LKEVZRKC",
              class: "L",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "74",
              cabin: "ECONOMY",
              fareBasis: "YKE",
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
      id: "112",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "BR",
              number: "2147",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "24",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T09:20:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T12:50:00",
              },
              carrierCode: "BR",
              number: "156",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "90",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "628500.00",
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
        grandTotal: "628500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "628500.00",
            base: "490000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "24",
              cabin: "ECONOMY",
              fareBasis: "WCSKR",
              class: "W",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "90",
              cabin: "ECONOMY",
              fareBasis: "MLKR",
              class: "M",
              includedCheckedBags: {
                quantity: 2,
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
      id: "113",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "632300.00",
        base: "529700.00",
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
        grandTotal: "632300.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "632300.00",
            base: "529700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "QA3FOKR",
              class: "Q",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FOHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKOKSZ",
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
      id: "114",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "632300.00",
        base: "529700.00",
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
        grandTotal: "632300.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "632300.00",
            base: "529700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "QA3FOKR",
              class: "Q",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FOHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
              cabin: "ECONOMY",
              fareBasis: "VKOKSZ",
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
      id: "115",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "632300.00",
        base: "529700.00",
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
        grandTotal: "632300.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "632300.00",
            base: "529700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "QA3FOKR",
              class: "Q",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FOHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "120",
              cabin: "ECONOMY",
              fareBasis: "VKOKSZ",
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
      id: "116",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "BR",
              number: "2147",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "24",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "BR",
              number: "2150",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "97",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "633500.00",
        base: "495000.00",
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
        grandTotal: "633500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "633500.00",
            base: "495000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "24",
              cabin: "ECONOMY",
              fareBasis: "WCSKR",
              class: "W",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "97",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "117",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "BR",
              number: "2147",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "24",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "BR",
              number: "2148",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "121",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "633500.00",
        base: "495000.00",
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
        grandTotal: "633500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "633500.00",
            base: "495000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "24",
              cabin: "ECONOMY",
              fareBasis: "WCSKR",
              class: "W",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "121",
              cabin: "ECONOMY",
              fareBasis: "VCSKR",
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
      id: "118",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "636500.00",
        base: "498000.00",
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
        grandTotal: "636500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "636500.00",
            base: "498000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "SLKR",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "87",
              cabin: "ECONOMY",
              fareBasis: "YLKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "119",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "642700.00",
        base: "528300.00",
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
        grandTotal: "642700.00",
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
            total: "642700.00",
            base: "528300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "75",
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
              segmentId: "76",
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
      id: "120",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "642700.00",
        base: "528300.00",
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
        grandTotal: "642700.00",
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
            total: "642700.00",
            base: "528300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
              cabin: "ECONOMY",
              fareBasis: "KKEVZRKC",
              class: "K",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "75",
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
              segmentId: "76",
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
      id: "121",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-29T13:55:00",
              },
              arrival: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-29T15:35:00",
              },
              carrierCode: "CI",
              number: "261",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "42",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "CI",
              number: "9064",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "93",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "646000.00",
        base: "507500.00",
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
        grandTotal: "646000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "646000.00",
            base: "507500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "42",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "93",
              cabin: "ECONOMY",
              fareBasis: "BKCDKR",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "122",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "CI",
              number: "163",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "47",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "CI",
              number: "9064",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "93",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "646000.00",
        base: "507500.00",
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
        grandTotal: "646000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "646000.00",
            base: "507500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "47",
              cabin: "ECONOMY",
              fareBasis: "KKKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "93",
              cabin: "ECONOMY",
              fareBasis: "BKCDKR",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "123",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "CI",
              number: "9065",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "41",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "CI",
              number: "9064",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "93",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "658500.00",
        base: "520000.00",
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
        grandTotal: "658500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "658500.00",
            base: "520000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "41",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "93",
              cabin: "ECONOMY",
              fareBasis: "BKCDKR",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "124",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "CI",
              number: "9067",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "44",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "CI",
              number: "9064",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "93",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "658500.00",
        base: "520000.00",
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
        grandTotal: "658500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "658500.00",
            base: "520000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "44",
              cabin: "ECONOMY",
              fareBasis: "KKCDKR",
              class: "K",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "93",
              cabin: "ECONOMY",
              fareBasis: "BKCDKR",
              class: "B",
              includedCheckedBags: {
                quantity: 2,
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
      id: "125",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "BR",
              number: "159",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "45",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "659000.00",
        base: "520500.00",
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
        grandTotal: "659000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "659000.00",
            base: "520500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "45",
              cabin: "ECONOMY",
              fareBasis: "QLKR",
              class: "Q",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "87",
              cabin: "ECONOMY",
              fareBasis: "YLKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "126",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "662400.00",
        base: "560000.00",
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
        grandTotal: "662400.00",
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
            total: "662400.00",
            base: "560000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "YRTLJ",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "127",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "685200.00",
        base: "483500.00",
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
        grandTotal: "685200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "685200.00",
            base: "483500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "QA3FOKR",
              class: "Q",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FOHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "128",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "692000.00",
        base: "613800.00",
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
        grandTotal: "692000.00",
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
            total: "692000.00",
            base: "613800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "YRTLJ",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "129",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "692000.00",
        base: "613800.00",
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
        grandTotal: "692000.00",
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
            total: "692000.00",
            base: "613800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "YRTLJ",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "130",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "OZ",
              number: "6871",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "46",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "702200.00",
        base: "595200.00",
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
        grandTotal: "702200.00",
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
            total: "702200.00",
            base: "595200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "46",
              cabin: "ECONOMY",
              fareBasis: "YKKSBR",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
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
      id: "131",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "OZ",
              number: "6871",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "46",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "702200.00",
        base: "595200.00",
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
        grandTotal: "702200.00",
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
            total: "702200.00",
            base: "595200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "46",
              cabin: "ECONOMY",
              fareBasis: "YKKSBR",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "120",
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
      id: "132",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "702700.00",
        base: "588300.00",
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
        grandTotal: "702700.00",
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
            total: "702700.00",
            base: "588300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
              cabin: "ECONOMY",
              fareBasis: "BKE0ZRKC",
              class: "B",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "75",
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
              segmentId: "76",
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
      id: "133",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "705700.00",
        base: "603300.00",
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
        grandTotal: "705700.00",
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
            total: "705700.00",
            base: "603300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "92",
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
      id: "134",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "705700.00",
        base: "603300.00",
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
        grandTotal: "705700.00",
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
            total: "705700.00",
            base: "603300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "112",
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
      id: "135",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "705700.00",
        base: "603300.00",
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
        grandTotal: "705700.00",
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
            total: "705700.00",
            base: "603300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "105",
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
      id: "136",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "BR",
              number: "2147",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "24",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "706500.00",
        base: "568000.00",
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
        grandTotal: "706500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "706500.00",
            base: "568000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "24",
              cabin: "ECONOMY",
              fareBasis: "WCSKR",
              class: "W",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "87",
              cabin: "ECONOMY",
              fareBasis: "YLKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "137",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "709700.00",
        base: "603300.00",
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
        grandTotal: "709700.00",
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
            total: "709700.00",
            base: "603300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "75",
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
              segmentId: "76",
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
      id: "138",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 3,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T07:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T09:25:00",
              },
              carrierCode: "LJ",
              number: "731",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H35M",
              id: "29",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "709700.00",
        base: "603300.00",
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
        grandTotal: "709700.00",
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
            total: "709700.00",
            base: "603300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "29",
              cabin: "ECONOMY",
              fareBasis: "WKRT",
              class: "W",
              includedCheckedBags: {
                weight: 15,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "73",
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
              segmentId: "74",
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
      id: "139",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
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
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T12:30:00",
              },
              arrival: {
                iataCode: "HGH",
                terminal: "4",
                at: "2024-08-31T14:20:00",
              },
              carrierCode: "CA",
              number: "150",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "CA",
              },
              duration: "PT1H50M",
              id: "114",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HGH",
                terminal: "4",
                at: "2024-08-31T17:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:10:00",
              },
              carrierCode: "CA",
              number: "555",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "CA",
              },
              duration: "PT1H55M",
              id: "115",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "724100.00",
        base: "527400.00",
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
        grandTotal: "724100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CA"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "724100.00",
            base: "527400.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "114",
              cabin: "ECONOMY",
              fareBasis: "LONCTW",
              class: "L",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "115",
              cabin: "ECONOMY",
              fareBasis: "LORCPKR",
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
      id: "140",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "BR",
              number: "2149",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "35",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "BR",
              number: "160",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "94",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "730500.00",
        base: "592000.00",
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
        grandTotal: "730500.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "730500.00",
            base: "592000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "35",
              cabin: "ECONOMY",
              fareBasis: "YCSKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "94",
              cabin: "ECONOMY",
              fareBasis: "VLKR",
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
      id: "141",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "92",
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
      id: "142",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "112",
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
      id: "143",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "105",
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
      id: "144",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
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
              segmentId: "96",
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
      id: "145",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T12:35:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "KE",
              number: "5691",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "33",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "33",
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
              segmentId: "120",
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
      id: "146",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "92",
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
      id: "147",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "112",
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
      id: "148",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
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
              segmentId: "96",
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
      id: "149",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
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
              segmentId: "96",
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
      id: "150",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T10:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T12:10:00",
              },
              carrierCode: "KE",
              number: "185",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "40",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "40",
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
              segmentId: "120",
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
      id: "151",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T16:10:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T17:50:00",
              },
              carrierCode: "KE",
              number: "187",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "43",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H50M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T13:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              carrierCode: "OZ",
              number: "712",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H50M",
              id: "120",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "657100.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "657100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "43",
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
              segmentId: "120",
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
      id: "152",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T16:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T19:45:00",
              },
              carrierCode: "KE",
              number: "5694",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H35M",
              id: "105",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "735300.00",
        base: "658800.00",
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
        grandTotal: "735300.00",
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
            total: "735300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "105",
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
      id: "153",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "739300.00",
        base: "658800.00",
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
        grandTotal: "739300.00",
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
            total: "739300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "75",
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
              segmentId: "76",
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
      id: "154",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "739300.00",
        base: "658800.00",
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
        grandTotal: "739300.00",
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
            total: "739300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "75",
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
              segmentId: "76",
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
      id: "155",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "739300.00",
        base: "658800.00",
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
        grandTotal: "739300.00",
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
            total: "739300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
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
              segmentId: "73",
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
              segmentId: "74",
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
      id: "156",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T15:50:00",
              },
              carrierCode: "OZ",
              number: "713",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H35M",
              id: "34",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "739300.00",
        base: "658800.00",
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
        grandTotal: "739300.00",
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
            total: "739300.00",
            base: "658800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "34",
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
              segmentId: "73",
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
              segmentId: "74",
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
      id: "157",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT5H45M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T14:10:00",
              },
              carrierCode: "MU",
              number: "5042",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "57",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T15:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T17:40:00",
              },
              carrierCode: "MU",
              number: "5005",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT1H45M",
              id: "58",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "747400.00",
        base: "566700.00",
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
        grandTotal: "747400.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "747400.00",
            base: "566700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "57",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS9",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "58",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS9",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "SOWTW",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "SOWKR",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "158",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T09:00:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T10:05:00",
              },
              carrierCode: "KE",
              number: "1809",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "49",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T12:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T13:40:00",
              },
              carrierCode: "KE",
              number: "5695",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H25M",
              id: "50",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "753900.00",
        base: "644500.00",
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
        grandTotal: "753900.00",
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
            total: "753900.00",
            base: "644500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "49",
              cabin: "ECONOMY",
              fareBasis: "CRT",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "50",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      id: "159",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "KE",
              number: "5693",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "48",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T18:55:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T22:35:00",
              },
              carrierCode: "KE",
              number: "188",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H40M",
              id: "112",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "754900.00",
        base: "644500.00",
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
        grandTotal: "754900.00",
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
            total: "754900.00",
            base: "644500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "48",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "112",
              cabin: "ECONOMY",
              fareBasis: "TKEVZFKC",
              class: "T",
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
      id: "160",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T19:45:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T21:25:00",
              },
              carrierCode: "OZ",
              number: "6871",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H40M",
              id: "46",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "762000.00",
        base: "655000.00",
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
        grandTotal: "762000.00",
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
            total: "762000.00",
            base: "655000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "46",
              cabin: "ECONOMY",
              fareBasis: "YKKSBR",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKKSBR",
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
      id: "161",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T09:00:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T10:05:00",
              },
              carrierCode: "KE",
              number: "1809",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "49",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T12:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T13:40:00",
              },
              carrierCode: "KE",
              number: "5695",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H25M",
              id: "50",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "770400.00",
        base: "661000.00",
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
        grandTotal: "770400.00",
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
            total: "770400.00",
            base: "661000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "49",
              cabin: "ECONOMY",
              fareBasis: "CRT",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "50",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "SNE0ZLKC",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "162",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "KE",
              number: "5693",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "48",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T14:05:00",
              },
              carrierCode: "KE",
              number: "5756",
              aircraft: {
                code: "772",
              },
              operating: {
                carrierCode: "LJ",
              },
              duration: "PT2H30M",
              id: "91",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "771400.00",
        base: "661000.00",
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
        grandTotal: "771400.00",
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
            total: "771400.00",
            base: "661000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "48",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "91",
              cabin: "ECONOMY",
              fareBasis: "SNE0ZLKC",
              class: "S",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "163",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T09:00:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T10:05:00",
              },
              carrierCode: "KE",
              number: "1809",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "49",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T12:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T13:40:00",
              },
              carrierCode: "KE",
              number: "5695",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H25M",
              id: "50",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "785900.00",
        base: "650000.00",
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
        grandTotal: "785900.00",
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
            total: "785900.00",
            base: "650000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "49",
              cabin: "ECONOMY",
              fareBasis: "CRT",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "50",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "164",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT2H40M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-29T20:50:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T22:30:00",
              },
              carrierCode: "KE",
              number: "5693",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H40M",
              id: "48",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "786900.00",
        base: "650000.00",
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
        grandTotal: "786900.00",
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
            total: "786900.00",
            base: "650000.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "48",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "165",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T07:40:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T11:10:00",
              },
              carrierCode: "KE",
              number: "5692",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H30M",
              id: "89",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "786900.00",
        base: "682200.00",
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
        grandTotal: "786900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "786900.00",
            base: "682200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GRTKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "89",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "166",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T09:00:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T10:05:00",
              },
              carrierCode: "KE",
              number: "1809",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "49",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T12:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T13:40:00",
              },
              carrierCode: "KE",
              number: "5695",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H25M",
              id: "50",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H15M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T11:30:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T15:00:00",
              },
              carrierCode: "KE",
              number: "2250",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "73",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T17:45:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "KE",
              number: "1826",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "74",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "858100.00",
        base: "744700.00",
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
        grandTotal: "858100.00",
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
            total: "858100.00",
            base: "744700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "49",
              cabin: "ECONOMY",
              fareBasis: "CRT",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "50",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "73",
              cabin: "ECONOMY",
              fareBasis: "LKEVZRKC",
              class: "L",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "74",
              cabin: "ECONOMY",
              fareBasis: "YKE",
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
      id: "167",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "869800.00",
        base: "691300.00",
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
        grandTotal: "869800.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["BR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "869800.00",
            base: "691300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "SOWTW",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "SOWKR",
              class: "S",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "168",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H20M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T12:30:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T14:15:00",
              },
              carrierCode: "MU",
              number: "8905",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT1H45M",
              id: "77",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "78",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "889300.00",
        base: "719400.00",
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
        grandTotal: "889300.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "889300.00",
            base: "719400.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "77",
              cabin: "ECONOMY",
              fareBasis: "RSC0WCN2",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "78",
              cabin: "ECONOMY",
              fareBasis: "RSE0WCS8",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
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
      id: "169",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "902100.00",
        base: "790900.00",
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
        grandTotal: "902100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "902100.00",
            base: "790900.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE0WOS8",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "BUSINESS",
              fareBasis: "ISE0WOJ1",
              class: "I",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "96",
              cabin: "ECONOMY",
              fareBasis: "YKOKS",
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
      id: "170",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-29T09:00:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-29T10:05:00",
              },
              carrierCode: "KE",
              number: "1809",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H5M",
              id: "49",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-29T12:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T13:40:00",
              },
              carrierCode: "KE",
              number: "5695",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H25M",
              id: "50",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T17:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T20:40:00",
              },
              carrierCode: "OZ",
              number: "714",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "96",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "927000.00",
        base: "849800.00",
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
        grandTotal: "927000.00",
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
            total: "927000.00",
            base: "849800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "49",
              cabin: "ECONOMY",
              fareBasis: "CRT",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "50",
              cabin: "BUSINESS",
              fareBasis: "CRT",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
            {
              segmentId: "96",
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
      id: "171",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "952000.00",
        base: "811300.00",
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
        grandTotal: "952000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "952000.00",
            base: "811300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE0WOS8",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "BUSINESS",
              fareBasis: "ISE0WOJ1",
              class: "I",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "87",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "172",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT6H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T08:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T10:10:00",
              },
              carrierCode: "MU",
              number: "5052",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H15M",
              id: "25",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-29T12:25:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T14:25:00",
              },
              carrierCode: "MU",
              number: "5007",
              aircraft: {
                code: "332",
              },
              operating: {
                carrierCode: "MU",
              },
              duration: "PT2H",
              id: "26",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T09:20:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T12:50:00",
              },
              carrierCode: "BR",
              number: "156",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "90",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "952000.00",
        base: "811300.00",
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
        grandTotal: "952000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "952000.00",
            base: "811300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "25",
              cabin: "ECONOMY",
              fareBasis: "VSE0WOS8",
              class: "V",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "26",
              cabin: "BUSINESS",
              fareBasis: "ISE0WOJ1",
              class: "I",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "90",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "173",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT13H20M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T20:25:00",
              },
              arrival: {
                iataCode: "MNL",
                terminal: "1",
                at: "2024-08-29T23:30:00",
              },
              carrierCode: "PR",
              number: "469",
              aircraft: {
                code: "773",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT4H5M",
              id: "15",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MNL",
                terminal: "1",
                at: "2024-08-30T06:40:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T08:45:00",
              },
              carrierCode: "PR",
              number: "890",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT2H5M",
              id: "16",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT25H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T17:20:00",
              },
              arrival: {
                iataCode: "MNL",
                terminal: "1",
                at: "2024-08-31T19:30:00",
              },
              carrierCode: "PR",
              number: "897",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT2H10M",
              id: "69",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MNL",
                terminal: "1",
                at: "2024-09-01T14:10:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T19:25:00",
              },
              carrierCode: "PR",
              number: "468",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT4H15M",
              id: "70",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "958000.00",
        base: "697400.00",
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
        grandTotal: "958000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["PR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "958000.00",
            base: "697400.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "15",
              cabin: "ECONOMY",
              fareBasis: "TKFKR",
              class: "T",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "16",
              cabin: "ECONOMY",
              fareBasis: "TTTW",
              class: "T",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "69",
              cabin: "ECONOMY",
              fareBasis: "TTTW",
              class: "T",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "70",
              cabin: "ECONOMY",
              fareBasis: "TKFKR",
              class: "T",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "174",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "969100.00",
        base: "824100.00",
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
        grandTotal: "969100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "969100.00",
            base: "824100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "VOWKR",
              class: "V",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "WOWMO",
              class: "W",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "87",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "175",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 2,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T09:20:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T12:50:00",
              },
              carrierCode: "BR",
              number: "156",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "90",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "969100.00",
        base: "824100.00",
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
        grandTotal: "969100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["NX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "969100.00",
            base: "824100.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "VOWKR",
              class: "V",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "WOWMO",
              class: "W",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "90",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
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
      id: "176",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H20M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T12:30:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T14:15:00",
              },
              carrierCode: "MU",
              number: "8905",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT1H45M",
              id: "77",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "78",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1010000.00",
        base: "898800.00",
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
        grandTotal: "1010000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1010000.00",
            base: "898800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
              cabin: "ECONOMY",
              fareBasis: "YKOKS",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "77",
              cabin: "ECONOMY",
              fareBasis: "RSC0WCN2",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "78",
              cabin: "ECONOMY",
              fareBasis: "RSE0WCS8",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
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
      id: "177",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H20M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T12:30:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T14:15:00",
              },
              carrierCode: "MU",
              number: "8905",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT1H45M",
              id: "77",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "78",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1071000.00",
        base: "930300.00",
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
        grandTotal: "1071000.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1071000.00",
            base: "930300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "77",
              cabin: "ECONOMY",
              fareBasis: "RSC0WCN2",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "78",
              cabin: "ECONOMY",
              fareBasis: "RSE0WCS8",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
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
      id: "178",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT21H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T21:25:00",
              },
              arrival: {
                iataCode: "SGN",
                terminal: "2",
                at: "2024-08-30T00:40:00",
              },
              carrierCode: "VJ",
              number: "861",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "VJ",
              },
              duration: "PT5H15M",
              id: "38",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SGN",
                terminal: "2",
                at: "2024-08-30T13:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-30T18:00:00",
              },
              carrierCode: "VJ",
              number: "842",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "VJ",
              },
              duration: "PT3H30M",
              id: "39",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT13H40M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T19:00:00",
              },
              arrival: {
                iataCode: "SGN",
                terminal: "2",
                at: "2024-08-31T21:25:00",
              },
              carrierCode: "VJ",
              number: "843",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "VJ",
              },
              duration: "PT3H25M",
              id: "116",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SGN",
                terminal: "2",
                at: "2024-09-01T02:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-09-01T09:40:00",
              },
              carrierCode: "VJ",
              number: "862",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "VJ",
              },
              duration: "PT5H5M",
              id: "117",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1080700.00",
        base: "892500.00",
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
        grandTotal: "1080700.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["GP"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1080700.00",
            base: "892500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "38",
              cabin: "ECONOMY",
              fareBasis: "ESP",
              class: "E",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "39",
              cabin: "ECONOMY",
              fareBasis: "OSP",
              class: "O",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "116",
              cabin: "ECONOMY",
              fareBasis: "JSP",
              class: "J",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "117",
              cabin: "ECONOMY",
              fareBasis: "ISP",
              class: "I",
              includedCheckedBags: {
                weight: 20,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "179",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1168100.00",
        base: "1002500.00",
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
        grandTotal: "1168100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1168100.00",
            base: "1002500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "QA3FOKR",
              class: "Q",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "XA3FOHS",
              class: "X",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "87",
              cabin: "BUSINESS",
              fareBasis: "COWCTKR",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "180",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H25M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T09:55:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-29T13:00:00",
              },
              carrierCode: "NX",
              number: "825",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT4H5M",
              id: "19",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-29T14:30:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T16:20:00",
              },
              carrierCode: "NX",
              number: "9610",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT1H50M",
              id: "20",
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
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T09:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "2",
                at: "2024-08-31T12:05:00",
              },
              carrierCode: "BR",
              number: "712",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H10M",
              id: "98",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T14:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:25:00",
              },
              carrierCode: "MU",
              number: "8603",
              aircraft: {
                code: "73E",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H50M",
              id: "99",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1216900.00",
        base: "1046900.00",
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
        grandTotal: "1216900.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1216900.00",
            base: "1046900.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "19",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "20",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "98",
              cabin: "ECONOMY",
              fareBasis: "Y1OTW",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "99",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS8",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
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
      id: "181",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T13:20:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "2",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "KE",
              number: "186",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT2H30M",
              id: "92",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1298200.00",
        base: "1195600.00",
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
        grandTotal: "1298200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["GP"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1298200.00",
            base: "1195600.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "YRT",
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
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "YRT",
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
              segmentId: "92",
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
      id: "182",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T14:45:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T17:35:00",
              },
              carrierCode: "HX",
              number: "629",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT3H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:55:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T20:45:00",
              },
              carrierCode: "HX",
              number: "282",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "HX",
              },
              duration: "PT1H50M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT5H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T15:55:00",
              },
              arrival: {
                iataCode: "PUS",
                terminal: "I",
                at: "2024-08-31T18:55:00",
              },
              carrierCode: "KE",
              number: "5698",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT2H",
              id: "75",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PUS",
                terminal: "D",
                at: "2024-08-31T21:15:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "D",
                at: "2024-08-31T22:15:00",
              },
              carrierCode: "KE",
              number: "1834",
              aircraft: {
                code: "223",
              },
              operating: {
                carrierCode: "KE",
              },
              duration: "PT1H",
              id: "76",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1302200.00",
        base: "1195600.00",
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
        grandTotal: "1302200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["HR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1302200.00",
            base: "1195600.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "YRT",
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
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "YRT",
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
              segmentId: "75",
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
              segmentId: "76",
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
      id: "183",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T10:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T11:30:00",
              },
              carrierCode: "OZ",
              number: "711",
              aircraft: {
                code: "77L",
              },
              operating: {
                carrierCode: "OZ",
              },
              duration: "PT2H30M",
              id: "23",
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
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T09:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "2",
                at: "2024-08-31T12:05:00",
              },
              carrierCode: "B7",
              number: "7016",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H10M",
              id: "100",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T14:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:25:00",
              },
              carrierCode: "MU",
              number: "8603",
              aircraft: {
                code: "73E",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H50M",
              id: "101",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1337600.00",
        base: "1226300.00",
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
        grandTotal: "1337600.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1337600.00",
            base: "1226300.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "23",
              cabin: "ECONOMY",
              fareBasis: "YKOKS",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "100",
              cabin: "ECONOMY",
              fareBasis: "Y1OTW",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "101",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS8",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
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
      id: "184",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T15:15:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T18:45:00",
              },
              carrierCode: "OZ",
              number: "6872",
              aircraft: {
                code: "781",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "95",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1378800.00",
        base: "1209500.00",
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
        grandTotal: "1378800.00",
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
            total: "1378800.00",
            base: "1209500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "95",
              cabin: "ECONOMY",
              fareBasis: "VKOKSZ",
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
      id: "185",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT2H35M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T12:00:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-29T13:35:00",
              },
              carrierCode: "BR",
              number: "169",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H35M",
              id: "30",
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
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T09:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "2",
                at: "2024-08-31T12:05:00",
              },
              carrierCode: "BR",
              number: "712",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H10M",
              id: "98",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T14:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:25:00",
              },
              carrierCode: "MU",
              number: "8603",
              aircraft: {
                code: "73E",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H50M",
              id: "99",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1398600.00",
        base: "1257800.00",
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
        grandTotal: "1398600.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1398600.00",
            base: "1257800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "30",
              cabin: "ECONOMY",
              fareBasis: "YLOKR",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "98",
              cabin: "ECONOMY",
              fareBasis: "Y1OTW",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "99",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS8",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
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
      id: "186",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H5M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T14:40:00",
              },
              arrival: {
                iataCode: "MFM",
                at: "2024-08-31T16:50:00",
              },
              carrierCode: "NX",
              number: "627",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT2H10M",
              id: "65",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MFM",
                at: "2024-08-31T18:05:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T22:45:00",
              },
              carrierCode: "NX",
              number: "826",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "NX",
              },
              duration: "PT3H40M",
              id: "66",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1413100.00",
        base: "1204800.00",
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
        grandTotal: "1413100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1413100.00",
            base: "1204800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "65",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "66",
              cabin: "ECONOMY",
              fareBasis: "GOWKR2",
              class: "G",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
              includedCabinBags: {
                weight: 7,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "187",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 5,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT6H20M",
          segments: [
            {
              departure: {
                iataCode: "TSA",
                terminal: "1",
                at: "2024-08-31T12:30:00",
              },
              arrival: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T14:15:00",
              },
              carrierCode: "MU",
              number: "8905",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CI",
              },
              duration: "PT1H45M",
              id: "77",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SHA",
                terminal: "1",
                at: "2024-08-31T17:05:00",
              },
              arrival: {
                iataCode: "GMP",
                terminal: "I",
                at: "2024-08-31T19:50:00",
              },
              carrierCode: "MU",
              number: "8601",
              aircraft: {
                code: "789",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H45M",
              id: "78",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1736200.00",
        base: "1532200.00",
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
        grandTotal: "1736200.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1736200.00",
            base: "1532200.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "77",
              cabin: "ECONOMY",
              fareBasis: "RSC0WCN2",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "78",
              cabin: "ECONOMY",
              fareBasis: "RSE0WCS8",
              class: "R",
              includedCheckedBags: {
                quantity: 2,
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
      id: "188",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 1,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT2H30M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T07:30:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T11:00:00",
              },
              carrierCode: "BR",
              number: "170",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H30M",
              id: "87",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1892100.00",
        base: "1723800.00",
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
        grandTotal: "1892100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1892100.00",
            base: "1723800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "87",
              cabin: "BUSINESS",
              fareBasis: "COWCTKR",
              class: "C",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 2,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "189",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 5,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT7H20M",
          segments: [
            {
              departure: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-31T10:55:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-31T12:55:00",
              },
              carrierCode: "CX",
              number: "489",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT2H",
              id: "79",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-31T14:25:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T19:15:00",
              },
              carrierCode: "CX",
              number: "418",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "80",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "1978100.00",
        base: "1746500.00",
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
        grandTotal: "1978100.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["CX"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "1978100.00",
            base: "1746500.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAR",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAR",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "79",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAR",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "80",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAR",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "190",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      isUpsellOffer: false,
      lastTicketingDate: "2024-08-29",
      lastTicketingDateTime: "2024-08-29",
      numberOfBookableSeats: 5,
      itineraries: [
        {
          duration: "PT7H30M",
          segments: [
            {
              departure: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-29T13:35:00",
              },
              arrival: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T16:25:00",
              },
              carrierCode: "CX",
              number: "439",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT3H50M",
              id: "27",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "HKG",
                terminal: "1",
                at: "2024-08-29T18:15:00",
              },
              arrival: {
                iataCode: "TPE",
                terminal: "1",
                at: "2024-08-29T20:05:00",
              },
              carrierCode: "CX",
              number: "402",
              aircraft: {
                code: "32Q",
              },
              operating: {
                carrierCode: "CX",
              },
              duration: "PT1H50M",
              id: "28",
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
                iataCode: "TPE",
                terminal: "2",
                at: "2024-08-31T09:55:00",
              },
              arrival: {
                iataCode: "PVG",
                terminal: "2",
                at: "2024-08-31T12:05:00",
              },
              carrierCode: "BR",
              number: "712",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "BR",
              },
              duration: "PT2H10M",
              id: "98",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "PVG",
                terminal: "1",
                at: "2024-08-31T14:35:00",
              },
              arrival: {
                iataCode: "ICN",
                terminal: "1",
                at: "2024-08-31T17:25:00",
              },
              carrierCode: "MU",
              number: "8603",
              aircraft: {
                code: "73E",
              },
              operating: {
                carrierCode: "FM",
              },
              duration: "PT1H50M",
              id: "99",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "KRW",
        total: "2063800.00",
        base: "1859700.00",
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
        grandTotal: "2063800.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["MU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "KRW",
            total: "2063800.00",
            base: "1859700.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "27",
              cabin: "ECONOMY",
              fareBasis: "YQ21KRAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "28",
              cabin: "ECONOMY",
              fareBasis: "YQ21HKAO",
              brandedFare: "ECONLIGHT",
              brandedFareLabel: "ECONOMY LIGHT",
              class: "Y",
              includedCheckedBags: {
                quantity: 1,
              },
              includedCabinBags: {
                quantity: 1,
              },
              amenities: [
                {
                  description: "1PC MAX 23KG 158LCM EACH",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "1PC MAX 15LB 7KG 115LCM",
                  isChargeable: false,
                  amenityType: "BAGGAGE",
                  amenityProvider: {
                    name: "BrandedFare",
                  },
                },
                {
                  description: "SEAT ASSIGNMENT",
                  isChargeable: true,
                  amenityType: "PRE_RESERVED_SEAT",
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
                  description: "MILEAGE ACCRUAL",
                  isChargeable: false,
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
              ],
            },
            {
              segmentId: "98",
              cabin: "ECONOMY",
              fareBasis: "Y1OTW",
              class: "Y",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "99",
              cabin: "ECONOMY",
              fareBasis: "NSE0WCS8",
              class: "N",
              includedCheckedBags: {
                quantity: 2,
              },
              includedCabinBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*                 carrierCode가 validCarrierCodes에 포함된 객체만 필터링           */
  /* -------------------------------------------------------------------------- */
  const filteredData = data.filter((offer) =>
    offer.itineraries.every((itinerary) =>
      itinerary.segments.every((segment) =>
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
        <Result
          data={filteredData}
          user={user}
          airline={airline}
          returnDate={returnDate}
        />
      </div>
    </>
  );
};

export default TicketResult;

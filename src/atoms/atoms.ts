"use client";
import { NewOrderData, OffersPriceData, OrderData } from "@/types";
import { atom } from "recoil";

interface ModalProps {
  isOpen: boolean;
  closeButton?: boolean;
  title?: string;
  content?: string;
  buttonNum?: 0 | 1 | 2;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}

type OrderProps = Pick<
  OrderData,
  "reservationId" | "totalPrice" | "itineraries" | "price"
> &
  Pick<NewOrderData, "flightOffers">;

export const modalState = atom<ModalProps>({
  key: "modalState",
  default: {
    isOpen: false,
    closeButton: true,
    title: "",
    content: "",
    buttonNum: 1,
    handleConfirm: () => {},
    handleCancel: () => {},
  },
});

export const orderState = atom<OrderProps>({
  key: "orderState",
  default: {
    reservationId: "123456",
    totalPrice: "221600.00",
    itineraries: [
      {
        duration: "PT11H40M",
        segments: [
          {
            departure: {
              iataCode: "GMP",
              terminal: "I",
              at: "2024-08-08T19:55:00",
            },
            arrival: {
              iataCode: "HND",
              at: "2024-08-08T22:15:00",
            },
            carrierCode: "NH",
            number: "868",
            aircraft: {
              code: "763",
            },
            duration: "PT2H20M",
            id: "9",
            numberOfStops: 0,
            co2Emissions: [
              {
                weight: 88,
                weightUnit: "KG",
                cabin: "ECONOMY",
              },
            ],
          },
          {
            departure: {
              iataCode: "HND",
              terminal: "3",
              at: "2024-08-09T00:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "B",
              at: "2024-08-08T19:10:00",
            },
            carrierCode: "NH",
            number: "106",
            aircraft: {
              code: "789",
            },
            duration: "PT10H40M",
            id: "10",
            numberOfStops: 0,
            co2Emissions: [
              {
                weight: 359,
                weightUnit: "KG",
                cabin: "ECONOMY",
              },
            ],
          },
        ],
      },
      {
        duration: "PT10H40M",
        segments: [
          {
            departure: {
              iataCode: "LAX",
              terminal: "B",
              at: "2024-08-11T01:20:00",
            },
            arrival: {
              iataCode: "HND",
              at: "2024-08-12T05:00:00",
            },
            carrierCode: "NH",
            number: "105",
            aircraft: {
              code: "789",
            },
            duration: "PT11H40M",
            id: "61",
            numberOfStops: 0,
            co2Emissions: [
              {
                weight: 359,
                weightUnit: "KG",
                cabin: "ECONOMY",
              },
            ],
          },
          {
            departure: {
              iataCode: "HND",
              terminal: "2",
              at: "2024-08-12T08:40:00",
            },
            arrival: {
              iataCode: "GMP",
              terminal: "I",
              at: "2024-08-12T11:05:00",
            },
            carrierCode: "NH",
            number: "861",
            aircraft: {
              code: "763",
            },
            duration: "PT2H25M",
            id: "62",
            numberOfStops: 0,
            co2Emissions: [
              {
                weight: 88,
                weightUnit: "KG",
                cabin: "ECONOMY",
              },
            ],
          },
        ],
      },
    ],
    price: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "KRW",
          total: "110800",
          base: "40000",
          taxes: [
            {
              amount: "9000.00",
              code: "SW",
            },
            {
              amount: "9200.00",
              code: "TK",
            },
            {
              amount: "27600.00",
              code: "YR",
            },
            {
              amount: "25000.00",
              code: "BP",
            },
          ],
          refundableTaxes: "70800",
        },
        fareDetailsBySegment: [
          {
            segmentId: "14",
            cabin: "ECONOMY",
            fareBasis: "AKJ",
            class: "A",
            includedCheckedBags: {
              weight: 10,
              weightUnit: "KG",
            },
          },
          {
            segmentId: "40",
            cabin: "ECONOMY",
            fareBasis: "AKJ",
            class: "A",
            includedCheckedBags: {
              weight: 0,
              weightUnit: "KG",
            },
          },
        ],
      },
      {
        travelerId: "2",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "KRW",
          total: "110800",
          base: "40000",
          taxes: [
            {
              amount: "9000.00",
              code: "SW",
            },
            {
              amount: "9200.00",
              code: "TK",
            },
            {
              amount: "27600.00",
              code: "YR",
            },
            {
              amount: "25000.00",
              code: "BP",
            },
          ],
          refundableTaxes: "70800",
        },
        fareDetailsBySegment: [
          {
            segmentId: "14",
            cabin: "ECONOMY",
            fareBasis: "AKJ",
            class: "A",
            includedCheckedBags: {
              weight: 0,
              weightUnit: "KG",
            },
          },
          {
            segmentId: "40",
            cabin: "ECONOMY",
            fareBasis: "AKJ",
            class: "A",
            includedCheckedBags: {
              weight: 0,
              weightUnit: "KG",
            },
          },
        ],
      },
    ],
    flightOffers: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        paymentCardRequired: false,
        lastTicketingDate: "2024-08-16",
        itineraries: [
          {
            segments: [
              {
                departure: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-16T10:05:00",
                },
                arrival: {
                  iataCode: "FUK",
                  terminal: "I",
                  at: "2024-08-16T11:30:00",
                },
                carrierCode: "TW",
                number: "291",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "TW",
                },
                duration: "PT1H25M",
                id: "14",
                numberOfStops: 0,
                co2Emissions: [
                  {
                    weight: 57,
                    weightUnit: "KG",
                    cabin: "ECONOMY",
                  },
                ],
              },
            ],
          },
          {
            segments: [
              {
                departure: {
                  iataCode: "FUK",
                  terminal: "I",
                  at: "2024-08-18T12:30:00",
                },
                arrival: {
                  iataCode: "ICN",
                  terminal: "1",
                  at: "2024-08-18T13:55:00",
                },
                carrierCode: "TW",
                number: "292",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "TW",
                },
                duration: "PT1H25M",
                id: "40",
                numberOfStops: 0,
                co2Emissions: [
                  {
                    weight: 57,
                    weightUnit: "KG",
                    cabin: "ECONOMY",
                  },
                ],
              },
            ],
          },
        ],
        price: {
          currency: "KRW",
          total: "221600.00",
          base: "80000.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
            {
              amount: "0.00",
              type: "FORM_OF_PAYMENT",
            },
          ],
          grandTotal: "221600.00",
          billingCurrency: "KRW",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: false,
        },
        validatingAirlineCodes: ["TW"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "110800",
              base: "40000",
              taxes: [
                {
                  amount: "9000.00",
                  code: "SW",
                },
                {
                  amount: "9200.00",
                  code: "TK",
                },
                {
                  amount: "27600.00",
                  code: "YR",
                },
                {
                  amount: "25000.00",
                  code: "BP",
                },
              ],
              refundableTaxes: "70800",
            },
            fareDetailsBySegment: [
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "AKJ",
                class: "A",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "40",
                cabin: "ECONOMY",
                fareBasis: "AKJ",
                class: "A",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "KRW",
              total: "110800",
              base: "40000",
              taxes: [
                {
                  amount: "9000.00",
                  code: "SW",
                },
                {
                  amount: "9200.00",
                  code: "TK",
                },
                {
                  amount: "27600.00",
                  code: "YR",
                },
                {
                  amount: "25000.00",
                  code: "BP",
                },
              ],
              refundableTaxes: "70800",
            },
            fareDetailsBySegment: [
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "AKJ",
                class: "A",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "40",
                cabin: "ECONOMY",
                fareBasis: "AKJ",
                class: "A",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});

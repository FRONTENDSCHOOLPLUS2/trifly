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

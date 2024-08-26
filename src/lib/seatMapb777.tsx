import { SeatMap } from "@/types";

export const seatMapb777: SeatMap = {
  meta: {
    count: 1,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cP8zP3CjQHAAtOAlM%3D&flightOrderId=eJzTd9cP8zP3CjQHAAtOAlM%3D",
    },
  },
  data: [
    {
      id: "1",
      type: "seatmap",
      departure: {
        iataCode: "BKK",
        at: "2024-08-31T21:40:00",
      },
      arrival: {
        iataCode: "ICN",
        terminal: "2",
        at: "2024-09-01T05:05:00",
      },
      carrierCode: "KE",
      number: "658",
      operating: {
        carrierCode: "KE",
      },
      aircraft: {
        code: "772",
      },
      class: "Q",
      flightOfferId: "1",
      segmentId: "2",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 11,
            length: 31,
            startSeatRow: 28,
            endSeatRow: 53,
            startWingsX: 0,
            endWingsX: 13,
            startWingsRow: 28,
            endWingsRow: 41,
            exitRowsX: [15],
          },
          facilities: [
            {
              code: "CL",
              column: "H",
              row: "41",
              position: "SEAT",
              coordinates: {
                x: 13,
                y: 9,
              },
            },
            {
              code: "CL",
              column: "J",
              row: "41",
              position: "SEAT",
              coordinates: {
                x: 13,
                y: 10,
              },
            },
            {
              code: "LA",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 14,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "J",
              position: "FRONT",
              coordinates: {
                x: 14,
                y: 10,
              },
            },
            {
              code: "LA",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 14,
                y: 4,
              },
            },
            {
              code: "GN",
              column: "D",
              row: "42",
              position: "SEAT",
              coordinates: {
                x: 15,
                y: 4,
              },
            },
            {
              code: "GN",
              column: "E",
              row: "42",
              position: "SEAT",
              coordinates: {
                x: 15,
                y: 5,
              },
            },
            {
              code: "GN",
              column: "F",
              row: "42",
              position: "SEAT",
              coordinates: {
                x: 15,
                y: 6,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 27,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "J",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 27,
                y: 10,
              },
            },
            {
              code: "LA",
              column: "D",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 27,
                y: 4,
              },
            },
            {
              code: "LA",
              column: "E",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 27,
                y: 5,
              },
            },
            {
              code: "G",
              column: "D",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 28,
                y: 4,
              },
            },
            {
              code: "G",
              column: "E",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 28,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 28,
                y: 6,
              },
            },
            {
              code: "G",
              column: "A",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 29,
                y: 0,
              },
            },
            {
              code: "G",
              column: "J",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 29,
                y: 10,
              },
            },
            {
              code: "G",
              column: "D",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 4,
              },
            },
            {
              code: "G",
              column: "E",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              row: "53",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 6,
              },
            },
          ],
          seats: [
            {
              cabin: "ECONOMY",
              number: "28A",
              characteristicsCodes: ["CH", "L", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28B",
              characteristicsCodes: ["9", "CH", "L", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28C",
              characteristicsCodes: ["A", "CH", "L", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28D",
              characteristicsCodes: ["A", "CH", "H", "K", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28E",
              characteristicsCodes: ["9", "CH", "L"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28F",
              characteristicsCodes: ["A", "CH", "L"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28G",
              characteristicsCodes: ["A", "CH", "L", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28H",
              characteristicsCodes: ["9", "CH", "L", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28J",
              characteristicsCodes: ["CH", "L", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 0,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29B",
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29F",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29G",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29H",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29J",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 1,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30B",
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30F",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30G",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30H",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30J",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 2,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31B",
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31F",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31G",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31H",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31J",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "40900",
                    base: "40900",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 3,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 4,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 5,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 6,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 7,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 8,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 9,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38E",
              characteristicsCodes: ["9", "CH", "H", "Q", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38F",
              characteristicsCodes: ["A", "CH", "H", "Q", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38J",
              characteristicsCodes: ["CH", "PC", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 10,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 11,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40E",
              characteristicsCodes: ["9", "CH", "H", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40F",
              characteristicsCodes: ["A", "CH", "H", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 12,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 13,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41B",
              characteristicsCodes: ["1M", "A", "AL", "CH", "LS", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 13,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41D",
              characteristicsCodes: ["1M", "A", "AL", "CH", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 13,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 13,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41F",
              characteristicsCodes: ["1M", "A", "AL", "CH", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 13,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42A",
              characteristicsCodes: ["1B", "1W", "E", "LS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 15,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42B",
              characteristicsCodes: ["9", "AG", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 15,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42C",
              characteristicsCodes: ["A", "AG", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 15,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42G",
              characteristicsCodes: ["A", "AG", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 15,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42H",
              characteristicsCodes: ["9", "AG", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "81800",
                    base: "81800",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 15,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42J",
              characteristicsCodes: ["1B", "1W", "E", "RS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 15,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43D",
              characteristicsCodes: ["A", "B", "CH", "I", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43E",
              characteristicsCodes: ["9", "CH", "K", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43F",
              characteristicsCodes: ["A", "B", "CH", "I", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 16,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44G",
              characteristicsCodes: ["A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44H",
              characteristicsCodes: ["9", "CH", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44J",
              characteristicsCodes: ["CH", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 17,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45G",
              characteristicsCodes: ["A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45H",
              characteristicsCodes: ["9", "CH", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45J",
              characteristicsCodes: ["CH", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 18,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46G",
              characteristicsCodes: ["A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46H",
              characteristicsCodes: ["9", "CH", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46J",
              characteristicsCodes: ["CH", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 19,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 20,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 21,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 22,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 23,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51A",
              characteristicsCodes: ["CH", "LS", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51J",
              characteristicsCodes: ["CH", "PC", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 24,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52B",
              characteristicsCodes: ["1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52C",
              characteristicsCodes: ["1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52D",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52F",
              characteristicsCodes: ["1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52G",
              characteristicsCodes: ["1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52H",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 25,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53B",
              characteristicsCodes: ["1M", "A", "AL", "CH", "LS", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53D",
              characteristicsCodes: ["1M", "A", "AL", "CH", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53E",
              characteristicsCodes: ["1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53F",
              characteristicsCodes: ["1M", "A", "AL", "CH", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53H",
              characteristicsCodes: ["1M", "A", "AL", "CH", "RS", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53J",
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 26,
                y: 10,
              },
            },
          ],
        },
      ],
      aircraftCabinAmenities: {
        power: {
          isChargeable: false,
          powerType: "USB_PORT",
          usbType: "USB_C",
        },
        seat: {
          legSpace: 29,
          spaceUnit: "INCHES",
          tilt: "NORMAL",
          medias: [
            {
              title: "Comfortable Seats",
              href: "https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg",
              description: {
                text: "Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.",
                lang: "EN",
              },
              mediaType: "image",
            },
            {
              title: "Stay Connected",
              href: "https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg",
              description: {
                text: "Stay connected next time you fly. Choose from our great value Wi-Fi plans.",
                lang: "EN",
              },
              mediaType: "image",
            },
            {
              title: "Be Curious",
              href: "https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg",
              description: {
                text: "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                lang: "EN",
              },
              mediaType: "image",
            },
          ],
        },
        wifi: {
          isChargeable: true,
          wifiCoverage: "FULL",
        },
        entertainment: [
          {
            isChargeable: false,
            entertainmentType: "AUDIO_VIDEO_ON_DEMAND",
          },
          {
            isChargeable: false,
            entertainmentType: "IP_TV",
          },
        ],
        food: {
          isChargeable: false,
          foodType: "SNACK",
        },
        beverage: {
          isChargeable: false,
          beverageType: "ALCOHOLIC_AND_NON_ALCOHOLIC",
        },
      },
      availableSeatsCounters: [
        {
          travelerId: "1",
          value: 187,
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      BKK: {
        cityCode: "BKK",
        countryCode: "TH",
      },
      ICN: {
        cityCode: "SEL",
        countryCode: "KR",
      },
    },
    facilities: {
      LA: "Lavatory",
      GN: "Galley",
      G: "Galley",
      CL: "Closet",
    },
    seatCharacteristics: {
      "1": "Restricted seat - General",
      "9": "Center seat (not window, not aisle)",
      A: "Aisle seat",
      RS: "Right side of aircraft",
      B: "Seat with bassinet facility",
      CH: "Chargeable seats",
      E: "Exit row seat",
      "1W": "Window seat without window",
      AG: "Seat adjacent to galley",
      LS: "Left side of aircraft",
      H: "Seat with facilities for handicapped/incapacitated passenger",
      I: "Seat suitable for adult with an infant",
      K: "Bulkhead seat",
      AL: "Seat adjacent to lavatory",
      L: "Leg space seat",
      O: "Preferential seat",
      Q: "Seat in a quiet zone",
      "1B": "Seat not allowed for medical",
      PC: "Pet cabin",
      V: "Seat to be left vacant or offered last",
      W: "Window seat",
      "1M": "Seat with movie view",
    },
  },
};

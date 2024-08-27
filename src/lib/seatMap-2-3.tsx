import { SeatMap } from "@/types";

export const seatMap23: SeatMap = {
  meta: {
    count: 1,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cPd%2FRwjgoAAAttAnM%3D&flightOrderId=eJzTd9cPd%2FRwjgoAAAttAnM%3D",
    },
  },
  data: [
    {
      id: "1",
      type: "seatmap",
      departure: {
        iataCode: "ICN",
        terminal: "2",
        at: "2024-08-30T09:10:00",
      },
      arrival: {
        iataCode: "OKA",
        terminal: "I",
        at: "2024-08-30T11:40:00",
      },
      carrierCode: "KE",
      number: "755",
      operating: {
        carrierCode: "KE",
      },
      aircraft: {
        code: "223",
      },
      class: "T",
      flightOfferId: "1",
      segmentId: "1",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 6,
            length: 32,
            startSeatRow: 28,
            endSeatRow: 55,
            startWingsX: 10,
            endWingsX: 19,
            startWingsRow: 36,
            endWingsRow: 45,
            exitRowsX: [13],
          },
          facilities: [
            {
              code: "LA",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 0,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 5,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 4,
              },
            },
            {
              code: "G",
              column: "B",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 1,
              },
            },
            {
              code: "CL",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 0,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 5,
              },
            },
            {
              code: "CL",
              column: "B",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 1,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 4,
              },
            },
            {
              code: "G",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 3,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "F",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 5,
              },
            },
            {
              code: "G",
              column: "A",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 0,
              },
            },
            {
              code: "G",
              column: "F",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 5,
              },
            },
            {
              code: "G",
              column: "B",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 1,
              },
            },
            {
              code: "G",
              column: "E",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 4,
              },
            },
            {
              code: "G",
              column: "D",
              row: "55",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 3,
              },
            },
          ],
          seats: [
            {
              cabin: "ECONOMY",
              number: "28A",
              characteristicsCodes: ["B", "CH", "LS", "W", "1"],
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
                x: 2,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28B",
              characteristicsCodes: ["A", "CH", "K", "LS", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "10000",
                    base: "10000",
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
              number: "28D",
              characteristicsCodes: ["A", "CH", "L", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 2,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28E",
              characteristicsCodes: ["9", "CH", "L", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 2,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28F",
              characteristicsCodes: ["CH", "L", "RS", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 2,
                y: 5,
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
                    total: "20000",
                    base: "20000",
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
              number: "29B",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "29D",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29E",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "29F",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "30A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "30B",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "30D",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30E",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "30F",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "31A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "31B",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "31D",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31E",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "31F",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "20000",
                    base: "20000",
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
              number: "32A",
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
              number: "32B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32F",
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
                y: 5,
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
                x: 7,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33F",
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
                y: 5,
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
                x: 8,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34F",
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
                y: 5,
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
                x: 9,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35F",
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
                y: 5,
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
                x: 10,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36F",
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
                x: 10,
                y: 5,
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
                x: 11,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37F",
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
                y: 5,
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
                x: 12,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38F",
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
                x: 12,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39A",
              characteristicsCodes: ["1B", "E", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 13,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39B",
              characteristicsCodes: ["A", "CH", "E", "LS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 13,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39D",
              characteristicsCodes: ["A", "CH", "E", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 13,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39E",
              characteristicsCodes: ["9", "CH", "E", "RS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 13,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39F",
              characteristicsCodes: ["1B", "E", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 13,
                y: 5,
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
                x: 14,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40B",
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
                x: 14,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40D",
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
                x: 14,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40E",
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
                x: 14,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40F",
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
                x: 14,
                y: 5,
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
                x: 15,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41B",
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
                x: 15,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41D",
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
                x: 15,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41E",
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
                x: 15,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41F",
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
                x: 15,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42A",
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
              number: "42B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42F",
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
                y: 5,
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
                x: 17,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43D",
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
                x: 17,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43E",
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
                x: 17,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43F",
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
                x: 17,
                y: 5,
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
                x: 18,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44D",
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
                x: 18,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44E",
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
                x: 18,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44F",
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
                x: 18,
                y: 5,
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
                x: 19,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45D",
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
                x: 19,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45E",
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
                x: 19,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45F",
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
                x: 19,
                y: 5,
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
                x: 20,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46F",
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
                y: 5,
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
                x: 21,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47F",
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
                y: 5,
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
                x: 22,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48F",
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
                y: 5,
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
                x: 23,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49F",
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
                y: 5,
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
                x: 24,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50B",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50F",
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
                x: 24,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51A",
              characteristicsCodes: ["CH", "H", "LS", "Q", "W", "1"],
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
                x: 25,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51B",
              characteristicsCodes: ["A", "CH", "H", "LS", "Q", "1"],
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
                x: 25,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51D",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51E",
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51F",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52A",
              characteristicsCodes: ["CH", "H", "LS", "W", "1"],
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
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52B",
              characteristicsCodes: ["A", "CH", "H", "LS", "1"],
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
              number: "52D",
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
                x: 26,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52E",
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
                x: 26,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52F",
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
                x: 26,
                y: 5,
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
                x: 27,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53B",
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
                x: 27,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53D",
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
                x: 27,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53E",
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
                x: 27,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53F",
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
                x: 27,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54A",
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
                x: 28,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54B",
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
                x: 28,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54D",
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
                x: 28,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54E",
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
                x: 28,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54F",
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
                x: 28,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55A",
              characteristicsCodes: ["1D", "1M", "CH", "LS", "V", "W", "1"],
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
                x: 29,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55B",
              characteristicsCodes: ["1D", "1M", "A", "CH", "LS", "V", "1"],
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
                x: 29,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55D",
              characteristicsCodes: ["1D", "1M", "A", "CH", "RS", "V", "1"],
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
                x: 29,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55E",
              characteristicsCodes: ["1D", "1M", "9", "CH", "RS", "V", "1"],
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
                x: 29,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55F",
              characteristicsCodes: ["1D", "1M", "CH", "RS", "V", "W", "1"],
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
                x: 29,
                y: 5,
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
          value: 119,
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      OKA: {
        cityCode: "OKA",
        countryCode: "JP",
      },
      ICN: {
        cityCode: "SEL",
        countryCode: "KR",
      },
    },
    facilities: {
      LA: "Lavatory",
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
      LS: "Left side of aircraft",
      H: "Seat with facilities for handicapped/incapacitated passenger",
      K: "Bulkhead seat",
      L: "Leg space seat",
      O: "Preferential seat",
      "1B": "Seat not allowed for medical",
      Q: "Seat in a quiet zone",
      PC: "Pet cabin",
      "1D": "Restricted recline seat",
      V: "Seat to be left vacant or offered last",
      W: "Window seat",
      "1M": "Seat with movie view",
    },
  },
};

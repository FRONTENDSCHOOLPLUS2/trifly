import { SeatMap } from "@/types";

export const seatMap242: SeatMap = {
  meta: {
    count: 2,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cP9TVyMQsDAAsGAko%3D&flightOrderId=eJzTd9cP9TVyMQsDAAsGAko%3D",
    },
  },
  data: [
    {
      id: "1",
      type: "seatmap",
      departure: {
        iataCode: "ICN",
        terminal: "2",
        at: "2024-08-20T10:55:00",
      },
      arrival: {
        iataCode: "DAD",
        terminal: "2",
        at: "2024-08-20T13:40:00",
      },
      carrierCode: "KE",
      number: "457",
      operating: {
        carrierCode: "KE",
      },
      aircraft: {
        code: "333",
      },
      class: "U",
      flightOfferId: "1",
      segmentId: "1",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 10,
            length: 37,
            startSeatRow: 28,
            endSeatRow: 60,
            startWingsX: 2,
            endWingsX: 16,
            startWingsRow: 30,
            endWingsRow: 44,
            exitRowsX: [19],
          },
          facilities: [
            {
              code: "LA",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 18,
                y: 4,
              },
            },
            {
              code: "LA",
              column: "C",
              position: "FRONT",
              coordinates: {
                x: 18,
                y: 3,
              },
            },
            {
              code: "LA",
              column: "D",
              row: "46",
              position: "SEAT",
              coordinates: {
                x: 19,
                y: 4,
              },
            },
            {
              code: "LA",
              column: "E",
              row: "46",
              position: "SEAT",
              coordinates: {
                x: 19,
                y: 5,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 34,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "H",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 34,
                y: 9,
              },
            },
            {
              code: "G",
              column: "D",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 34,
                y: 4,
              },
            },
            {
              code: "G",
              column: "C",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 34,
                y: 3,
              },
            },
            {
              code: "AR",
              column: "A",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 35,
                y: 0,
              },
            },
            {
              code: "AR",
              column: "H",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 35,
                y: 9,
              },
            },
            {
              code: "G",
              column: "A",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 0,
              },
            },
            {
              code: "G",
              column: "H",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 9,
              },
            },
            {
              code: "G",
              column: "C",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 3,
              },
            },
            {
              code: "G",
              column: "F",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 6,
              },
            },
            {
              code: "G",
              column: "D",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 4,
              },
            },
            {
              code: "G",
              column: "E",
              row: "60",
              position: "REAR",
              coordinates: {
                x: 36,
                y: 5,
              },
            },
          ],
          seats: [
            {
              cabin: "ECONOMY",
              number: "28A",
              characteristicsCodes: ["CH", "K", "L", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["A", "AL", "CH", "K", "L", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["A", "AL", "CH", "H", "K", "L", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28D",
              characteristicsCodes: ["9", "B", "CH", "K", "1"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["9", "B", "CH", "K", "1"],
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
                {
                  travelerId: "3",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28F",
              characteristicsCodes: ["A", "AL", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["A", "AL", "CH", "K", "L", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["CH", "K", "L", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              number: "29A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29D",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "30A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30D",
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "31A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "31D",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "32A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "32D",
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              characteristicsCodes: ["1A", "CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "30000",
                    base: "30000",
                    taxes: [
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
              number: "33A",
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
                {
                  travelerId: "3",
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
                x: 5,
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
                {
                  travelerId: "3",
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
                x: 5,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33C",
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
                {
                  travelerId: "3",
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
                x: 5,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                x: 5,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33H",
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
                {
                  travelerId: "3",
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
                x: 5,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "34D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "35D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              characteristicsCodes: ["1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "OCCUPIED",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "36A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "36D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "37D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "38A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "38D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "38F",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "39D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "40A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "40D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40F",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41C",
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
                {
                  travelerId: "3",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41G",
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41H",
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
                {
                  travelerId: "3",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              number: "42B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              number: "42C",
              characteristicsCodes: ["1A", "A", "CH", "H", "Q", "1"],
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
                {
                  travelerId: "3",
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
                x: 14,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42D",
              characteristicsCodes: ["1A", "9", "CH", "H", "Q", "1"],
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
                {
                  travelerId: "3",
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
                x: 14,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "42F",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42H",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                y: 9,
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "43C",
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
                {
                  travelerId: "3",
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
              number: "43D",
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
                {
                  travelerId: "3",
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
              number: "43E",
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
                {
                  travelerId: "3",
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
              number: "43F",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43H",
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
                {
                  travelerId: "3",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44A",
              characteristicsCodes: ["1A", "CH", "LS", "PC", "W", "1"],
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
                {
                  travelerId: "3",
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
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              number: "44C",
              characteristicsCodes: ["1A", "A", "CH", "H", "1"],
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
                {
                  travelerId: "3",
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44D",
              characteristicsCodes: ["1A", "9", "CH", "H", "1"],
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
                {
                  travelerId: "3",
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
              number: "44E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "44F",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              number: "44H",
              characteristicsCodes: ["1A", "CH", "PC", "RS", "W", "1"],
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
                {
                  travelerId: "3",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45A",
              characteristicsCodes: ["1M", "1W", "CH", "LS", "V", "1"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "45C",
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
                {
                  travelerId: "3",
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
              number: "45D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "45G",
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45H",
              characteristicsCodes: ["1M", "1W", "CH", "RS", "V", "1"],
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
                {
                  travelerId: "3",
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
              number: "46A",
              characteristicsCodes: ["1A", "1B", "E", "IE", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "A",
                "AL",
                "CH",
                "E",
                "IE",
                "LS",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              number: "46G",
              characteristicsCodes: [
                "1A",
                "1B",
                "A",
                "AL",
                "CH",
                "E",
                "IE",
                "RS",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["1A", "1B", "E", "IE", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 19,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["A", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              number: "47D",
              characteristicsCodes: ["9", "B", "CH", "I", "K"],
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
                {
                  travelerId: "3",
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
                x: 20,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47E",
              characteristicsCodes: ["9", "B", "CH", "I", "K"],
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
                {
                  travelerId: "3",
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
                x: 20,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47F",
              characteristicsCodes: ["A", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
                {
                  travelerId: "3",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "60000",
                    base: "60000",
                    taxes: [
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
              characteristicsCodes: ["1A", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                x: 20,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47H",
              characteristicsCodes: ["1A", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                x: 20,
                y: 9,
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "48D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
              number: "49A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "49D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "50D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
              number: "51A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              number: "51B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "51D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "52D",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "53A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53C",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "53D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "53E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53H",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                y: 9,
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
                {
                  travelerId: "3",
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
                {
                  travelerId: "3",
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
              number: "54C",
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
                {
                  travelerId: "3",
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
              number: "54D",
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
                {
                  travelerId: "3",
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
              number: "54E",
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
                {
                  travelerId: "3",
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
              number: "54F",
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54G",
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54H",
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
                {
                  travelerId: "3",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
              number: "55B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
              number: "55C",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
              number: "55D",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "55E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
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
                {
                  travelerId: "3",
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
              number: "55F",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
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
                {
                  travelerId: "3",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55H",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56A",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56B",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56C",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56D",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56E",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56F",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56G",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56H",
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
                {
                  travelerId: "3",
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
                x: 29,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57D",
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57E",
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57H",
              characteristicsCodes: ["1A", "CH", "PC", "RS", "W", "1"],
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
                {
                  travelerId: "3",
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
                x: 30,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58A",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58B",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58D",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58E",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58G",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58H",
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
                {
                  travelerId: "3",
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
                x: 31,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59B",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59D",
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59E",
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59G",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59H",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
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
                {
                  travelerId: "3",
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
                x: 32,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60A",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60B",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60D",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60E",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60G",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "60H",
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
                {
                  travelerId: "3",
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
                x: 33,
                y: 9,
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
          value: 111,
        },
        {
          travelerId: "3",
          value: 217,
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
      DAD: {
        cityCode: "DAD",
        countryCode: "VN",
      },
    },
    facilities: {
      AR: "Airphone",
      LA: "Lavatory",
      G: "Galley",
    },
    seatCharacteristics: {
      "1": "Restricted seat - General", // 일반좌석
      "9": "Center seat (not window, not aisle)", // 중앙 좌석(통로쪽이나 창가가 아님)
      A: "Aisle seat", // 통로좌석
      RS: "Right side of aircraft", // 항공기의 오른쪽
      B: "Seat with bassinet facility", // 유아용 침대가 있는 좌석
      CH: "Chargeable seats", // 유료좌석
      E: "Exit row seat", // 비상구 좌석
      "1W": "Window seat without window", // 창문이 없는 창가좌석
      LS: "Left side of aircraft", // 항공기의 왼쪽
      H: "Seat with facilities for handicapped/incapacitated passenger", // 장애인 승객을 위한 시설을 갖춘 좌석
      I: "Seat suitable for adult with an infant", // 유아를 동반한 성인에게 적합한 좌석
      K: "Bulkhead seat", // 벌크 좌석 여객기 객실 좌석 열에서 맨 첫번째 열 (앞이 벽임)
      AL: "Seat adjacent to lavatory", // 화장실 옆 좌석
      L: "Leg space seat", // 다리 공간이 있는 좌석
      O: "Preferential seat", // 우대석
      "1A": "Seat not allowed for infant", // 유아 탑승 불가 좌석
      Q: "Seat in a quiet zone", // 조용한 구역
      "1B": "Seat not allowed for medical", // 의료용으로는 비적합
      PC: "Pet cabin", // 반려동물
      V: "Seat to be left vacant or offered last", // 비워두거나 마지막으로 제공되는 좌석
      W: "Window seat", // 창가좌석
      "1M": "Seat with movie view", // 영화스크린
      IE: "Seat not suitable for child", // 어린이에게 적합하지 않은 좌석
    },
  },
};

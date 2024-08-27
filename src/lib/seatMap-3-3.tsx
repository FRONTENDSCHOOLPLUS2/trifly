import { SeatMap } from "@/types";

export const seatMap33: SeatMap = {
  meta: {
    count: 1,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cP87MIMg4DAAtNAl0%3D&flightOrderId=eJzTd9cP87MIMg4DAAtNAl0%3D",
    },
  },
  data: [
    {
      id: "1",
      type: "seatmap",
      departure: {
        iataCode: "NRT",
        terminal: "1",
        at: "2024-08-31T17:20:00",
      },
      arrival: {
        iataCode: "ICN",
        terminal: "2",
        at: "2024-08-31T20:00:00",
      },
      carrierCode: "KE",
      number: "712",
      operating: {
        carrierCode: "KE",
      },
      aircraft: {
        code: "32Q",
      },
      class: "U",
      flightOfferId: "1",
      segmentId: "2",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 7,
            length: 32,
            startSeatRow: 28,
            endSeatRow: 56,
            startWingsX: 7,
            endWingsX: 15,
            startWingsRow: 35,
            endWingsRow: 43,
            exitRowsX: [10, 11],
          },
          facilities: [
            {
              code: "LA",
              column: "A",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 29,
                y: 0,
              },
            },
            {
              code: "G",
              column: "F",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 29,
                y: 6,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "F",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 30,
                y: 6,
              },
            },
            {
              code: "G",
              column: "B",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 1,
              },
            },
            {
              code: "G",
              column: "E",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 5,
              },
            },
            {
              code: "G",
              column: "C",
              row: "56",
              position: "REAR",
              coordinates: {
                x: 31,
                y: 2,
              },
            },
          ],
          seats: [
            {
              cabin: "ECONOMY",
              number: "28A",
              characteristicsCodes: ["CH", "K", "LS", "V", "W", "1"],
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
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28B",
              characteristicsCodes: ["9", "B", "CH", "L", "LS", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
                x: 0,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28C",
              characteristicsCodes: ["A", "CH", "H", "K", "LS", "V", "1"],
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28D",
              characteristicsCodes: ["A", "CH", "L", "RS"],
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
                x: 0,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28E",
              characteristicsCodes: ["9", "CH", "L", "RS"],
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
                x: 0,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28F",
              characteristicsCodes: ["CH", "L", "RS", "W"],
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
                x: 0,
                y: 6,
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
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "H", "LS", "1"],
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
                x: 1,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29C",
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
                x: 1,
                y: 2,
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
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              number: "30A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
                    total: "27300",
                    base: "27300",
                    taxes: [
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
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              number: "31A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "H", "LS", "Q", "1"],
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
                x: 3,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31C",
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
                x: 3,
                y: 2,
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
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "27300",
                    base: "27300",
                    taxes: [
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32E",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32F",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
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
                y: 4,
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
                x: 5,
                y: 5,
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
                x: 5,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34A",
              characteristicsCodes: ["1M", "CH", "LS", "W"],
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
                y: 4,
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
                x: 6,
                y: 5,
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
                x: 6,
                y: 6,
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
                y: 4,
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
                x: 7,
                y: 5,
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
                x: 7,
                y: 6,
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
                y: 4,
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
                x: 8,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36F",
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
                x: 8,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37A",
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
                x: 9,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37B",
              characteristicsCodes: ["1D", "1M", "9", "CH", "LS", "V", "1"],
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
                x: 9,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37C",
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
                x: 9,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37D",
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
                x: 9,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37E",
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
                x: 9,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37F",
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
                x: 9,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38A",
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "E",
                "IE",
                "LS",
                "V",
                "W",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "9",
                "E",
                "IE",
                "LS",
                "V",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "A",
                "E",
                "IE",
                "LS",
                "V",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "A",
                "E",
                "IE",
                "RS",
                "V",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "9",
                "E",
                "IE",
                "RS",
                "V",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
              characteristicsCodes: [
                "1A",
                "1B",
                "1D",
                "E",
                "IE",
                "RS",
                "V",
                "W",
              ],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 10,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39A",
              characteristicsCodes: ["1A", "1B", "CH", "E", "IE", "LS", "W"],
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
                x: 11,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39B",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "IE", "LS"],
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
                x: 11,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39C",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "IE", "LS"],
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
                x: 11,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39D",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "IE", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
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
                x: 11,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39E",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "IE", "RS"],
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
                x: 11,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39F",
              characteristicsCodes: ["1A", "1B", "CH", "E", "IE", "RS", "W"],
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
                x: 11,
                y: 6,
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40E",
              characteristicsCodes: ["1M", "9", "CH", "RS"],
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
              ],
              coordinates: {
                x: 12,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40F",
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
              ],
              coordinates: {
                x: 12,
                y: 6,
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
                x: 13,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41C",
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
                x: 13,
                y: 2,
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
                x: 13,
                y: 4,
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
                x: 13,
                y: 5,
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
                x: 13,
                y: 6,
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
                x: 14,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42B",
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
                x: 14,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42C",
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
                y: 2,
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
                x: 14,
                y: 4,
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
                x: 14,
                y: 5,
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
                x: 14,
                y: 6,
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
                x: 15,
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
                x: 15,
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
                x: 15,
                y: 2,
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
                x: 15,
                y: 4,
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
                x: 15,
                y: 5,
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
                x: 15,
                y: 6,
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
                x: 16,
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
                x: 16,
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
                x: 16,
                y: 2,
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
                x: 16,
                y: 4,
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
                x: 16,
                y: 5,
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
                x: 16,
                y: 6,
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
                x: 17,
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
                x: 17,
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
                x: 17,
                y: 2,
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
                x: 17,
                y: 4,
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
                x: 17,
                y: 5,
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
                x: 17,
                y: 6,
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
                x: 18,
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
                x: 18,
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
                x: 18,
                y: 2,
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
                x: 18,
                y: 4,
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
                x: 18,
                y: 5,
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
                x: 18,
                y: 6,
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
                x: 19,
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
                x: 19,
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
                x: 19,
                y: 2,
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
                x: 19,
                y: 4,
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
                x: 19,
                y: 5,
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
                x: 19,
                y: 6,
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
                x: 20,
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
                x: 20,
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
                x: 20,
                y: 2,
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
                x: 20,
                y: 4,
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
                x: 20,
                y: 5,
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
                x: 20,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49A",
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
              ],
              coordinates: {
                x: 21,
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
                x: 21,
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
                x: 21,
                y: 2,
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
                x: 21,
                y: 4,
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
                x: 21,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49F",
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
              ],
              coordinates: {
                x: 21,
                y: 6,
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
                x: 22,
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
                x: 22,
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
                x: 22,
                y: 2,
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
                x: 22,
                y: 4,
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
                x: 22,
                y: 5,
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
                x: 22,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51A",
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
                x: 23,
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
                x: 23,
                y: 2,
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
                x: 23,
                y: 4,
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
                x: 23,
                y: 5,
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
                x: 23,
                y: 6,
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
                x: 24,
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
                x: 24,
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
                x: 24,
                y: 2,
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
                x: 24,
                y: 4,
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
                x: 24,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52F",
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
                y: 6,
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
                x: 25,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53B",
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
              number: "53C",
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
                x: 25,
                y: 4,
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
                x: 25,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53F",
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
                x: 25,
                y: 6,
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
                x: 26,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54B",
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
                x: 26,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54C",
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
                x: 26,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54D",
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
                x: 26,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54E",
              characteristicsCodes: ["1M", "9", "CH", "RS", "1"],
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
              number: "54F",
              characteristicsCodes: ["1M", "CH", "RS", "W", "1"],
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
              number: "55A",
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
              number: "55B",
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
                x: 27,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55C",
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55D",
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
                x: 27,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55E",
              characteristicsCodes: ["1M", "9", "CH", "RS", "1"],
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
                x: 27,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55F",
              characteristicsCodes: ["1M", "CH", "RS", "W", "1"],
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
                x: 27,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56A",
              characteristicsCodes: ["1M", "AL", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "56B",
              characteristicsCodes: ["1M", "9", "AL", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "56C",
              characteristicsCodes: ["1M", "A", "AL", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56D",
              characteristicsCodes: ["1M", "A", "AL", "CH", "RS"],
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
                x: 28,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56E",
              characteristicsCodes: ["1M", "9", "AL", "CH", "RS", "1"],
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
                x: 28,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56F",
              characteristicsCodes: ["1M", "AL", "CH", "RS", "W", "1"],
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
                x: 28,
                y: 6,
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
          value: 130,
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      NRT: {
        cityCode: "TYO",
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
      LS: "Left side of aircraft",
      H: "Seat with facilities for handicapped/incapacitated passenger",
      K: "Bulkhead seat",
      AL: "Seat adjacent to lavatory",
      L: "Leg space seat",
      O: "Preferential seat",
      "1A": "Seat not allowed for infant",
      Q: "Seat in a quiet zone",
      "1B": "Seat not allowed for medical",
      PC: "Pet cabin",
      "1D": "Restricted recline seat",
      V: "Seat to be left vacant or offered last",
      W: "Window seat",
      "1M": "Seat with movie view",
      IE: "Seat not suitable for child",
    },
  },
};

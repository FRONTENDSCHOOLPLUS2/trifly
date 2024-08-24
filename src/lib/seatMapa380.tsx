import { SeatMap } from "@/types";

export const seatMapa380: SeatMap = {
  meta: {
    count: 1,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cP8zP3sfQEAAs2Ak8%3D&flightOrderId=eJzTd9cP8zP3sfQEAAs2Ak8%3D",
    },
  },
  data: [
    {
      id: "1",
      type: "seatmap",
      departure: {
        iataCode: "LAX",
        terminal: "B",
        at: "2024-08-31T23:50:00",
      },
      arrival: {
        iataCode: "ICN",
        terminal: "2",
        at: "2024-09-02T04:30:00",
      },
      carrierCode: "KE",
      number: "12",
      operating: {
        carrierCode: "KE",
      },
      aircraft: {
        code: "388",
      },
      class: "E",
      flightOfferId: "1",
      segmentId: "2",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 12,
            length: 40,
            startSeatRow: 28,
            endSeatRow: 59,
            startWingsX: 0,
            endWingsX: 21,
            startWingsRow: 28,
            endWingsRow: 46,
            exitRowsX: [17, 29],
          },
          facilities: [
            {
              code: "G",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 4,
              },
            },
            {
              code: "G",
              column: "G",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 7,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 6,
              },
            },
            {
              code: "LA",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 0,
              },
            },
            {
              code: "G",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 4,
              },
            },
            {
              code: "G",
              column: "H",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 9,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 1,
                y: 6,
              },
            },
            {
              code: "GN",
              column: "D",
              row: "28",
              position: "SEAT",
              coordinates: {
                x: 2,
                y: 4,
              },
            },
            {
              code: "GN",
              column: "E",
              row: "28",
              position: "SEAT",
              coordinates: {
                x: 2,
                y: 5,
              },
            },
            {
              code: "GN",
              column: "F",
              row: "28",
              position: "SEAT",
              coordinates: {
                x: 2,
                y: 6,
              },
            },
            {
              code: "GN",
              column: "G",
              row: "28",
              position: "SEAT",
              coordinates: {
                x: 2,
                y: 7,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "41",
              position: "REAR",
              coordinates: {
                x: 16,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "K",
              row: "41",
              position: "REAR",
              coordinates: {
                x: 16,
                y: 11,
              },
            },
            {
              code: "LA",
              column: "E",
              row: "41",
              position: "REAR",
              coordinates: {
                x: 16,
                y: 5,
              },
            },
            {
              code: "LA",
              column: "D",
              row: "41",
              position: "REAR",
              coordinates: {
                x: 16,
                y: 4,
              },
            },
            {
              code: "G",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 0,
              },
            },
            {
              code: "G",
              column: "B",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 1,
              },
            },
            {
              code: "G",
              column: "K",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 11,
              },
            },
            {
              code: "G",
              column: "J",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 10,
              },
            },
            {
              code: "G",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 4,
              },
            },
            {
              code: "G",
              column: "G",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 7,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 27,
                y: 6,
              },
            },
            {
              code: "G",
              column: "A",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 0,
              },
            },
            {
              code: "G",
              column: "B",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 1,
              },
            },
            {
              code: "G",
              column: "K",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 11,
              },
            },
            {
              code: "G",
              column: "J",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 10,
              },
            },
            {
              code: "G",
              column: "D",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 4,
              },
            },
            {
              code: "G",
              column: "G",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 7,
              },
            },
            {
              code: "G",
              column: "E",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 5,
              },
            },
            {
              code: "G",
              column: "F",
              position: "FRONT",
              coordinates: {
                x: 28,
                y: 6,
              },
            },
            {
              code: "GF",
              column: "A",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 0,
              },
            },
            {
              code: "GF",
              column: "B",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 1,
              },
            },
            {
              code: "GF",
              column: "C",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 2,
              },
            },
            {
              code: "GF",
              column: "E",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 5,
              },
            },
            {
              code: "LA",
              column: "H",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 9,
              },
            },
            {
              code: "LA",
              column: "F",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 6,
              },
            },
            {
              code: "LA",
              column: "G",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 37,
                y: 7,
              },
            },
            {
              code: "ST",
              column: "D",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 38,
                y: 4,
              },
            },
            {
              code: "ST",
              column: "G",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 38,
                y: 7,
              },
            },
            {
              code: "ST",
              column: "E",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 38,
                y: 5,
              },
            },
            {
              code: "ST",
              column: "F",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 38,
                y: 6,
              },
            },
            {
              code: "ST",
              column: "D",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 39,
                y: 4,
              },
            },
            {
              code: "ST",
              column: "G",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 39,
                y: 7,
              },
            },
            {
              code: "ST",
              column: "E",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 39,
                y: 5,
              },
            },
            {
              code: "ST",
              column: "F",
              row: "59",
              position: "REAR",
              coordinates: {
                x: 39,
                y: 6,
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
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "K", "L", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "28C",
              characteristicsCodes: ["A", "AG", "CH", "K", "L", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "29A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["1A", "9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "29C",
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "30A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "30C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "30D",
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
                x: 4,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30E",
              characteristicsCodes: ["9", "CH", "H", "K", "L", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "30F",
              characteristicsCodes: ["9", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "30G",
              characteristicsCodes: ["A", "B", "CH", "K", "1"],
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30H",
              characteristicsCodes: ["A", "CH", "K", "L", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "30J",
              characteristicsCodes: ["9", "CH", "K", "L", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "30K",
              characteristicsCodes: ["CH", "K", "L", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["1A", "9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31C",
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31D",
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
              ],
              coordinates: {
                x: 5,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31E",
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31F",
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31G",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31H",
              characteristicsCodes: ["1A", "A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31J",
              characteristicsCodes: ["1A", "9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "31K",
              characteristicsCodes: ["1A", "CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32F",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32G",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32H",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32J",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "32K",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33A",
              characteristicsCodes: ["1A", "CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["1A", "9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "33C",
              characteristicsCodes: ["1A", "A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "33D",
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
              ],
              coordinates: {
                x: 7,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33E",
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
              ],
              coordinates: {
                x: 7,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33F",
              characteristicsCodes: ["1A", "9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "33G",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33H",
              characteristicsCodes: ["1A", "A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "33J",
              characteristicsCodes: ["1A", "9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "33K",
              characteristicsCodes: ["1A", "CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34A",
              characteristicsCodes: ["CH", "LS", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              characteristicsCodes: ["9", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34C",
              characteristicsCodes: ["A", "CH", "LS", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34F",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34G",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34H",
              characteristicsCodes: ["A", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34J",
              characteristicsCodes: ["9", "CH", "O", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
              number: "34K",
              characteristicsCodes: ["CH", "O", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "95400",
                    base: "95400",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35A",
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
              ],
              coordinates: {
                x: 9,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
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
              number: "35C",
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
              ],
              coordinates: {
                x: 9,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35D",
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
              ],
              coordinates: {
                x: 9,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35E",
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
              ],
              coordinates: {
                x: 9,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35F",
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
              ],
              coordinates: {
                x: 9,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35G",
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
              ],
              coordinates: {
                x: 9,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "35J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "35K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 10,
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
                x: 10,
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
                x: 10,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36F",
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
                x: 10,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "37K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 12,
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
                x: 12,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38E",
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
                x: 12,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38F",
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
                x: 12,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "39J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39K",
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
              ],
              coordinates: {
                x: 13,
                y: 11,
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
                x: 14,
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
                x: 14,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40E",
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
                x: 14,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40F",
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
                x: 14,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40G",
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
                x: 14,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "41C",
              characteristicsCodes: [
                "1A",
                "1M",
                "A",
                "AL",
                "CH",
                "LS",
                "V",
                "1",
              ],
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
                x: 15,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41H",
              characteristicsCodes: [
                "1A",
                "1M",
                "A",
                "AL",
                "CH",
                "RS",
                "V",
                "1",
              ],
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
                x: 15,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42A",
              characteristicsCodes: ["1A", "1B", "1W", "E", "LS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 17,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42B",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42C",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42D",
              characteristicsCodes: ["A", "B", "CH", "I", "K", "1"],
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42E",
              characteristicsCodes: ["9", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42F",
              characteristicsCodes: ["9", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42G",
              characteristicsCodes: ["A", "B", "CH", "I", "K", "1"],
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42H",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42J",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "42K",
              characteristicsCodes: ["1A", "1B", "1W", "E", "RS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 17,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "43K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 19,
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
                x: 19,
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
                x: 19,
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
                x: 19,
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
                x: 19,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44F",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "45K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 21,
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
                x: 21,
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
                x: 21,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46E",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46F",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "47K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 23,
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
                x: 23,
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
                x: 23,
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
                x: 23,
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
                x: 23,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48F",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "49K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 11,
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
                x: 25,
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
                x: 25,
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
                x: 25,
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
                x: 25,
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
                x: 25,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50F",
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50G",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50H",
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
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50J",
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50K",
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
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51A",
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
              ],
              coordinates: {
                x: 26,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "51J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
            {
              cabin: "ECONOMY",
              number: "51K",
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
              ],
              coordinates: {
                x: 26,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52A",
              characteristicsCodes: ["1A", "1B", "1W", "E", "LS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 29,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52B",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "52C",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52D",
              characteristicsCodes: ["A", "B", "CH", "I", "K", "1"],
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
              number: "52E",
              characteristicsCodes: ["9", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "52F",
              characteristicsCodes: ["9", "CH", "K", "L", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "52G",
              characteristicsCodes: ["A", "B", "CH", "I", "K", "1"],
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52H",
              characteristicsCodes: ["1A", "1B", "A", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
              number: "52J",
              characteristicsCodes: ["1A", "1B", "9", "CH", "E", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "204400",
                    base: "204400",
                    taxes: [
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
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52K",
              characteristicsCodes: ["1A", "1B", "1W", "E", "RS", "V"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 29,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "53B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "53C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "53E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "53F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53H",
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
              ],
              coordinates: {
                x: 30,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53J",
              characteristicsCodes: ["1A", "9", "CH", "RS", "1"],
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
                x: 30,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "53K",
              characteristicsCodes: ["1A", "CH", "RS", "W", "1"],
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
                x: 30,
                y: 11,
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
                x: 31,
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
                x: 31,
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
                x: 31,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54D",
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
                x: 31,
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
              ],
              coordinates: {
                x: 31,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54F",
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
                x: 31,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54G",
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
                x: 31,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54H",
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
                x: 31,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54J",
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
                x: 31,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "54K",
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
                x: 31,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "55B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "55C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "55E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
              number: "55F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55H",
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
              ],
              coordinates: {
                x: 32,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55J",
              characteristicsCodes: ["1A", "9", "CH", "RS", "1"],
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
                x: 32,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "55K",
              characteristicsCodes: ["1A", "CH", "RS", "W", "1"],
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
                x: 32,
                y: 11,
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
              ],
              coordinates: {
                x: 33,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56B",
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
                x: 33,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56C",
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
                x: 33,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56D",
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
                x: 33,
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
              ],
              coordinates: {
                x: 33,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56F",
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
                x: 33,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56G",
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
                x: 33,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56H",
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
                x: 33,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56J",
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
                x: 33,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "56K",
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
                x: 33,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57G",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57H",
              characteristicsCodes: ["1A", "1M", "A", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "57K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 34,
                y: 11,
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
              ],
              coordinates: {
                x: 35,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58B",
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
                x: 35,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58C",
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
                x: 35,
                y: 2,
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
              ],
              coordinates: {
                x: 35,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58E",
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
                x: 35,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58F",
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
                x: 35,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58G",
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
                x: 35,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58H",
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
                x: 35,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58J",
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
                x: 35,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "58K",
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
                x: 35,
                y: 11,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59A",
              characteristicsCodes: ["1A", "1M", "CH", "LS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59B",
              characteristicsCodes: ["1A", "1M", "9", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59C",
              characteristicsCodes: ["1A", "1M", "A", "CH", "LS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 2,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59D",
              characteristicsCodes: ["1A", "1M", "A", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59E",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59F",
              characteristicsCodes: ["1A", "1M", "9", "CH"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 6,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59G",
              characteristicsCodes: ["1A", "1M", "A", "AL", "CH", "V", "1"],
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
                x: 36,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59H",
              characteristicsCodes: [
                "1A",
                "1M",
                "A",
                "AL",
                "CH",
                "RS",
                "V",
                "1",
              ],
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
                x: 36,
                y: 9,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59J",
              characteristicsCodes: ["1A", "1M", "9", "CH", "RS"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 10,
              },
            },
            {
              cabin: "ECONOMY",
              number: "59K",
              characteristicsCodes: ["1A", "1M", "CH", "RS", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "0",
                    base: "0",
                    taxes: [
                      {
                        amount: "0",
                        code: "SUPPLIER",
                      },
                    ],
                  },
                },
              ],
              coordinates: {
                x: 36,
                y: 11,
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
          value: 259,
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      LAX: {
        cityCode: "LAX",
        countryCode: "US",
      },
      ICN: {
        cityCode: "SEL",
        countryCode: "KR",
      },
    },
    facilities: {
      ST: "Stairs to upper deck",
      LA: "Lavatory",
      G: "Galley",
      GN: "Galley",
      GF: "General facility",
    },
    seatCharacteristics: {
      "1": "Restricted seat - General",
      "9": "Center seat (not window, not aisle)",
      A: "Aisle seat",
      RS: "Right side of aircraft",
      B: "Seat with bassinet facility",
      CH: "Chargeable seats",
      E: "Exit row seat",
      AG: "Seat adjacent to galley",
      "1W": "Window seat without window",
      LS: "Left side of aircraft",
      H: "Seat with facilities for handicapped/incapacitated passenger",
      I: "Seat suitable for adult with an infant",
      K: "Bulkhead seat",
      AL: "Seat adjacent to lavatory",
      L: "Leg space seat",
      O: "Preferential seat",
      "1A": "Seat not allowed for infant",
      Q: "Seat in a quiet zone",
      "1B": "Seat not allowed for medical",
      PC: "Pet cabin",
      V: "Seat to be left vacant or offered last",
      W: "Window seat",
      "1M": "Seat with movie view",
    },
  },
};

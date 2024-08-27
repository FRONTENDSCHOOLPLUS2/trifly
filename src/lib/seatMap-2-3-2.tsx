import { SeatMap } from "@/types";

export const seatMap232: SeatMap = {
  meta: {
    count: 1,
    links: {
      self: "https://test.api.amadeus.com/v1/shopping/seatmaps?flight-orderId=eJzTd9cPd%2FR0c%2FIFAAtHAlw%3D&flightOrderId=eJzTd9cPd%2FR0c%2FIFAAtHAlw%3D",
    },
  },
  data: [
    {
      id: "2",
      type: "seatmap",
      departure: {
        iataCode: "CJU",
        at: "2024-09-02T09:20:00",
      },
      arrival: {
        iataCode: "GMP",
        terminal: "D",
        at: "2024-09-02T10:30:00",
      },
      carrierCode: "OZ",
      number: "8914",
      operating: {
        carrierCode: "OZ",
      },
      aircraft: {
        code: "763",
      },
      class: "Y",
      flightOfferId: "1",
      segmentId: "2",
      decks: [
        {
          deckType: "MAIN",
          deckConfiguration: {
            width: 9,
            length: 45,
            startSeatRow: 10,
            endSeatRow: 52,
            startWingsX: 15,
            endWingsX: 31,
            startWingsRow: 25,
            endWingsRow: 41,
            exitRowsX: [20, 21],
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
              column: "K",
              position: "FRONT",
              coordinates: {
                x: 0,
                y: 8,
              },
            },
            {
              code: "LA",
              column: "A",
              row: "52",
              position: "SEAT",
              coordinates: {
                x: 42,
                y: 0,
              },
            },
            {
              code: "LA",
              column: "K",
              row: "52",
              position: "SEAT",
              coordinates: {
                x: 42,
                y: 8,
              },
            },
            {
              code: "LA",
              column: "D",
              row: "52",
              position: "REAR",
              coordinates: {
                x: 43,
                y: 3,
              },
            },
            {
              code: "G",
              column: "C",
              row: "52",
              position: "REAR",
              coordinates: {
                x: 44,
                y: 1,
              },
            },
            {
              code: "G",
              column: "H",
              row: "52",
              position: "REAR",
              coordinates: {
                x: 44,
                y: 7,
              },
            },
            {
              code: "G",
              column: "D",
              row: "52",
              position: "REAR",
              coordinates: {
                x: 44,
                y: 3,
              },
            },
          ],
          seats: [
            {
              cabin: "ECONOMY",
              number: "10A",
              characteristicsCodes: ["CH", "K", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "10C",
              characteristicsCodes: ["A", "B", "CH", "K"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "10D",
              characteristicsCodes: ["A", "CH", "K"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "10E",
              characteristicsCodes: ["9", "B", "CH", "K"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "10G",
              characteristicsCodes: ["A", "CH", "K"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "10H",
              characteristicsCodes: ["A", "B", "CH", "K"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "10K",
              characteristicsCodes: ["CH", "K", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "15000",
                    base: "15000",
                    taxes: [
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
              number: "11A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 2,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 2,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11D",
              characteristicsCodes: ["A", "CH", "EK"],
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
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11E",
              characteristicsCodes: ["9", "CH", "EK"],
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
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11G",
              characteristicsCodes: ["A", "CH", "EK"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11H",
              characteristicsCodes: ["1A", "A", "CH", "EK"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "11K",
              characteristicsCodes: ["1A", "CH", "EK", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12A",
              characteristicsCodes: ["1A", "CH", "EK", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                x: 3,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12C",
              characteristicsCodes: ["1A", "A", "CH", "EK"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                x: 3,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 3,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 3,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12G",
              characteristicsCodes: ["A", "CH", "EK"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                x: 3,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 3,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "12K",
              characteristicsCodes: ["1A", "CH", "EK", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
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
                x: 3,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "14A",
              characteristicsCodes: ["1A", "CH", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14C",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14G",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14H",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "14K",
              characteristicsCodes: ["1A", "CH", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15A",
              characteristicsCodes: ["1A", "CH", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15C",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15D",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15E",
              characteristicsCodes: ["9", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15G",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15H",
              characteristicsCodes: ["1A", "A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "15K",
              characteristicsCodes: ["1A", "CH", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "16A",
              characteristicsCodes: ["W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 6,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "16C",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 6,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "16D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 6,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "16E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 6,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "16G",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "16H",
              characteristicsCodes: ["A", "CH", "O"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "16K",
              characteristicsCodes: ["CH", "O", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                  price: {
                    currency: "KRW",
                    total: "7000",
                    base: "7000",
                    taxes: [
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
              number: "17A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "17K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 7,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "18K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 8,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "19K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 9,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20A",
              characteristicsCodes: ["1A", "1W", "V", "1"],
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
              number: "20C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 10,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 10,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 10,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 10,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 10,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "20K",
              characteristicsCodes: ["1A", "1W", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 10,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "21K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 11,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 12,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "22K",
              characteristicsCodes: ["1A", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 12,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "23K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 13,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "24K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 14,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25A",
              characteristicsCodes: ["1A", "1W", "V", "1"],
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
              number: "25C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 15,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 15,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 15,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 15,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 15,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "25K",
              characteristicsCodes: ["1A", "1W", "V", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 15,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "26K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 16,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "27K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 17,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "28K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 18,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 19,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "29K",
              characteristicsCodes: ["1A", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 19,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30A",
              characteristicsCodes: ["1A", "E", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30C",
              characteristicsCodes: ["1A", "A", "E"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30H",
              characteristicsCodes: ["1A", "A", "E"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "30K",
              characteristicsCodes: ["1A", "E", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 20,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31A",
              characteristicsCodes: ["1A", "E", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31C",
              characteristicsCodes: ["1A", "A", "E"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31H",
              characteristicsCodes: ["1A", "A", "E"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "31K",
              characteristicsCodes: ["1A", "E", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 21,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "32K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 22,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "33K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 23,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "34K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 24,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 25,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "35K",
              characteristicsCodes: ["1A", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 25,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "36K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 26,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "37K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 27,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "38K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 28,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "39K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 29,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "40K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 30,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "41K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 31,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "42K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 32,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "43K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 33,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 34,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "44K",
              characteristicsCodes: ["1A", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 34,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "45K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 35,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "46K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 36,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "47K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 37,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48A",
              characteristicsCodes: ["1A", "PC", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 38,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "48K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 38,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "49K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 39,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "50K",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 40,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51A",
              characteristicsCodes: ["1A", "W"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 0,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51C",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 1,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 5,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51H",
              characteristicsCodes: ["1A", "A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 41,
                y: 7,
              },
            },
            {
              cabin: "ECONOMY",
              number: "51K",
              characteristicsCodes: ["1A", "PC", "W", "1"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "BLOCKED",
                },
              ],
              coordinates: {
                x: 41,
                y: 8,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52D",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 42,
                y: 3,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52E",
              characteristicsCodes: ["9"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 42,
                y: 4,
              },
            },
            {
              cabin: "ECONOMY",
              number: "52G",
              characteristicsCodes: ["A"],
              travelerPricing: [
                {
                  travelerId: "1",
                  seatAvailabilityStatus: "AVAILABLE",
                },
              ],
              coordinates: {
                x: 42,
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
          value: 261,
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      GMP: {
        cityCode: "SEL",
        countryCode: "KR",
      },
      CJU: {
        cityCode: "CJU",
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
      EK: "Economy comfort seat",
      "1W": "Window seat without window",
      LS: "Left side of aircraft",
      I: "Seat suitable for adult with an infant",
      K: "Bulkhead seat",
      O: "Preferential seat",
      "1A": "Seat not allowed for infant",
      "1B": "Seat not allowed for medical",
      PC: "Pet cabin",
      "1D": "Restricted recline seat",
      V: "Seat to be left vacant or offered last",
      W: "Window seat",
      IE: "Seat not suitable for child",
    },
  },
};

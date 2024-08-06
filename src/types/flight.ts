/* ---------------------------------------------------------------- */
/*                           offers search                          */
/* ---------------------------------------------------------------- */
export interface OffersSearch {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: OffersSearchData[];
  dictionaries: {
    locations: {
      [key: string]: {
        cityCode: string;
        countryCode: string;
      };
    };
    aircraft: {
      [key: string]: string;
    };
    currencies: {
      KRW: "S.KOREAN WON";
    };
    carriers: {
      [key: string]: string;
    };
  };
}

interface OffersSearchData extends OffersData {
  itineraries: {
    duration: string;
    segments: SegmentsData[];
  }[];
  travelerPricings: [
    {
      travelerId: string;
      fareOption: string;
      travelerType: string;
      price: {
        currency: "KRW";
        total: string;
        base: string;
      };
      fareDetailsBySegment: {
        segmentId: string;
        cabin: "ECONOMY" | "BUSINESS" | "FIRST";
        fareBasis: string;
        class: string;
        includedCheckedBags: {
          weight: number;
          weightUnit: "KG";
        };
      }[];
    },
  ];
}

/* ---------------------------------------------------------------- */
/*                           offers price                           */
/* ---------------------------------------------------------------- */
export interface OffersPrice {
  data: {
    type: "flight-offers-pricing";
    flightOffers: OffersPriceData[];
    bookingRequirements: {
      emailAddressRequired: boolean;
      mobilePhoneNumberRequired: boolean;
      travelerRequirements: {
        travelerId: string;
        genderRequired: boolean;
        documentRequired: boolean;
        dateOfBirthRequired: boolean;
        redressRequiredIfAny: boolean;
        residenceRequired: boolean;
      }[];
    };
  };
  dictionaries: {
    locations: {
      [key: string]: {
        cityCode: string;
        countryCode: string;
      };
    };
  };
}

interface OffersPriceData extends OffersData {
  itineraries: {
    segments: SegmentsData[];
  }[];
  travelerPricings: [
    {
      travelerId: string;
      fareOption: string;
      travelerType: string;
      price: {
        currency: "KRW";
        total: string;
        base: string;
        taxes: {
          amount: string;
          code: string;
        }[];
        refundableTaxes: string;
      };
      fareDetailsBySegment: {
        segmentId: string;
        cabin: "ECONOMY" | "BUSINESS" | "FIRST";
        fareBasis: string;
        brandedFare: string;
        class: string;
        includedCheckedBags: {
          quantity: number;
        };
      }[];
    },
  ];
}

/* ---------------------------------------------------------------- */
/*                         search, price 공통                         */
/* ---------------------------------------------------------------- */
interface OffersData {
  type: "flight-offer";
  id: string;
  source: "GDS";
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay?: boolean;
  paymentCardRequired?: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime?: string;
  numberOfBookableSeats?: number;
  price: Price;
  pricingOptions: {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
  };
  validatingAirlineCodes: string[];
}

interface Price {
  currency: "KRW";
  total: string;
  base: string;
  fees: {
    amount: string;
    type: string;
  }[];
  grandTotal: string;
  billingCurrency?: "KRW"; // 결제 통화
}

interface SegmentsData {
  departure: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    terminal?: string;
    at: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
  numberOfStops: number;
  co2Emissions?: {
    weight: number;
    weightUnit: "KG";
    cabin: "ECONOMY" | "BUSINESS" | "FIRST";
  }[];
  blacklistedInEU?: boolean;
}

/* ---------------------------------------------------------------- */
/*                              구매 POST                             */
/* ---------------------------------------------------------------- */
export interface OrderRequest extends OrderData {
  products: [
    {
      _id: number;
      quantity: number;
    },
  ];
}

export interface OrderResponse extends OrderRequest {
  state: string;
  user_id: number;
  _id: number;
  createdAt: string;
  updatedAt: string;
  cost: {
    products: number;
    shippingFees: number;
    discount: {
      products: number;
      shippingFees: number;
    };
    total: number;
  };
}

/* ---------------------------------------------------------------- */
/*                        구매 목록/상세 GET                            */
/* ---------------------------------------------------------------- */
export interface OrderItem extends OrderData {
  _id: number;
  products: [
    {
      _id: number;
      quantity: 1;
      seller_id: 1;
      name: "항공권";
      image: null;
      price: 0;
      extra: null;
    },
  ];
  state: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  cost: {
    products: number;
    shippingFees: number;
    discount: {
      products: number;
      shippingFees: number;
    };
    total: number;
  };
  image: string;
  history?: {
    actor: number;
    updated: {
      image?: string;
      seat?: string[][];
    };
    createdAt: string;
  }[];
}

/* ---------------------------------------------------------------- */
/*                            order 공통 타입                           */
/* ---------------------------------------------------------------- */
export interface OrderData {
  reservationId: string;
  totalPrice: string;
  itineraries: OrderItineraries[];
  price: Price[];
  passengers: Passengers[];
  purchaser: Purchaser;
}

export interface Price {
  travelerId: string;
  fareOption: string;
  travelerType: "ADULT" | "CHILD" | "INFANT";
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
  fareDetailsBySegment: FareDetailsBySegment[];
}

export interface FareDetailsBySegment {
  segmentId: string;
  cabin: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  fareBasis: string;
  brandedFare?: string;
  class: string;
  includedCheckedBags: {
    weight?: number;
    weightUnit?: "KG";
    quantity?: number;
  };
}

export interface Passengers {
  type: "adult" | "child" | "infant";
  nameKor: string;
  gender: "M" | "F";
  nameEng: string;
  birth: string;
  phone: string;
  passport: {
    number: string;
    expDate: string;
  };
  nationality: string;
  issueCountry: string;
  email: string;
  seat?: string;
}

export interface Purchaser {
  name: string;
  birth: string;
  phone: { main: string; sub: string };
  email: string;
}

export interface OrderItineraries {
  duration: string;
  segments: {
    departure: {
      iataCode: string;
      terminal?: string;
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
    operating?: {
      carrierCode: string;
    };
    duration: string;
    id: string;
    numberOfStops: number;
    co2Emissions?: {
      weight: number;
      weightUnit: "KG";
      cabin: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
    }[];
    blacklistedInEU?: boolean;
  }[];
}

export interface IMPData {
  imp_uid: string;
  merchant_uid: string;
  error_code?: string;
  error_msg?: string;
}

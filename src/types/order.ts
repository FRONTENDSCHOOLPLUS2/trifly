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
}

/* ---------------------------------------------------------------- */
/*                            order 공통 타입                           */
/* ---------------------------------------------------------------- */
export interface OrderData {
  reservationId: string;
  totalPrice: string;
  itineraries: OrderItineraries[];
  price: {
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
    fareDetailsBySegment: {
      segmentId: string;
      cabin: string;
      fareBasis: string;
      brandedFare?: string;
      class: string;
      includedCheckedBags: {
        weight?: number;
        weightUnit?: "KG";
        quantity?: number;
      };
    }[];
  }[];
  passengers: {
    type: "adult" | "child" | "infant";
    nameKor: string;
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
  }[];
  purchaser: {
    name: string;
    birth: string;
    phone: { main: string; sub: string };
    email: string;
  };
}

export interface OrderItineraries {
  segments: {
    departure: {
      iataCode: string;
      terminal: string;
      at: string;
    };
    arrival: {
      iataCode: string;
      at: string;
    };
    carrierCode: string;
    number: string;
    aircraft: {
      code: string;
    };
    duration: string;
    id: string;
    numberOfStops: number;
    co2Emissions?: [
      {
        weight: number;
        weightUnit: "KG";
        cabin: "ECONOMY" | "BUSINESS" | "FIRST";
      },
    ];
  }[];
}

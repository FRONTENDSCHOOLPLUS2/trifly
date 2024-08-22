"use client";

import { NewOrderData, OrderData } from "@/types";
import { atom, RecoilEnv } from "recoil";
import { recoilPersist } from "recoil-persist";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

interface ModalProps {
  isOpen: boolean;
  closeButton?: boolean;
  title?: string;
  content?: string;
  buttonNum?: 0 | 1 | 2;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}

interface OrderProps
  extends Pick<OrderData, "totalPrice" | "itineraries" | "price"> {
  departureDate: string;
  returnDate: string;
}

interface DateProps {
  departureDate: string;
  returnDate?: string;
}

interface SearchResultProps {
  tripType: string;
  nonStop: boolean;
  origin: {
    code: string;
    value: string;
  };
  destination: {
    code: string;
    value: string;
  };
  schedule: {
    departureDate: string;
    departureFormattedDate: string;
    returnDate: string;
    returnFormattedDate: string;
  };
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabin: {
    cabin: string;
    cabinKor: string;
  };
}

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

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
});

export const dateState = atom<DateProps>({
  key: "dateState",
  default: {
    departureDate: "",
    returnDate: "",
  },
});

const { persistAtom } = recoilPersist({
  key: "searchResult",
  storage: sessionStorage,
});

export const searchResultState = atom<SearchResultProps>({
  key: "searchResultState",
  default: {
    tripType: "round",
    nonStop: false,
    origin: {
      code: "SEL",
      value: "서울",
    },
    destination: {
      code: "",
      value: "",
    },
    schedule: {
      departureDate: "",
      departureFormattedDate: "",
      returnDate: "",
      returnFormattedDate: "",
    },
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    cabin: {
      cabin: "",
      cabinKor: "모든 클래스",
    },
  },
  effects_UNSTABLE: [persistAtom],
});

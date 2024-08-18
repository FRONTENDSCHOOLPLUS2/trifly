import React, { Dispatch, createContext } from "react";

interface CabinType {
  [index: string]: string;
}

export const cabinKor: CabinType = {
  ECONOMY: "일반석",
  BUSINESS: "비즈니스석",
  FIRST: "일등석",
};

type OrderContextType = {
  orderStatus: number;
  setOrderStatus: Dispatch<React.SetStateAction<number>>;
};

const OrderContext = createContext<OrderContextType>({
  orderStatus: 1,
  setOrderStatus: () => {},
});

export default OrderContext;

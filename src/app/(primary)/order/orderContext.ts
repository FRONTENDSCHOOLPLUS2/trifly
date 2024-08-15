import React, { Dispatch, createContext } from "react";

type OrderContextType = {
  orderStatus: number;
  setOrderStatus: Dispatch<React.SetStateAction<number>>;
};

const OrderContext = createContext<OrderContextType>({
  orderStatus: 1,
  setOrderStatus: () => {},
});

export default OrderContext;

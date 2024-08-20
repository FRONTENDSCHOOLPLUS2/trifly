"use client";

import Progress from "@/components/Progress/Progress";
import { useMemo, useState } from "react";
import OrderContext from "./orderContext";

const Order = ({ children }: { children: React.ReactNode }) => {
  const orderPages = [
    "약관 동의",
    "정보 입력 및 결제",
    "좌석 선택",
    "예약 완료",
  ];
  const [orderStatus, setOrderStatus] = useState(1);
  const contextValue = useMemo(
    () => ({
      orderStatus,
      setOrderStatus,
    }),
    [orderStatus],
  );

  return (
    <>
      <Progress textArr={orderPages} status={orderStatus} />
      <OrderContext.Provider value={contextValue}>
        {children}
      </OrderContext.Provider>
    </>
  );
};

export default Order;

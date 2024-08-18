"use client";
import Progress from "@/components/Progress/Progress";
import { useMemo, useState } from "react";
import "./order.scss";
import OrderContext from "./orderContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [orderStatus, setOrderStatus] = useState(1);
  const orderPages = [
    "약관 동의",
    "정보 입력 및 결제",
    "좌석 선택",
    "예약 완료",
  ];

  const contextValue = useMemo(
    () => ({
      orderStatus,
      setOrderStatus,
    }),
    [orderStatus]
  );

  return (
    <div className="order">
      <h2 className="hidden">항공권 예약</h2>
      <Progress textArr={orderPages} status={orderStatus} />
      <OrderContext.Provider value={contextValue}>
        {children}
      </OrderContext.Provider>
    </div>
  );
};

export default layout;

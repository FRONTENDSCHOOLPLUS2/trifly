"use client";

import React from "react";
import OrdersList from "./OrdersList";
import RQProvider from "@/lib/RQProvider";

const MobileReservationList = ({
  keyword,
  page,
}: {
  keyword: string;
  page: string;
}) => {
  return (
    <RQProvider>
      <OrdersList keyword={keyword} page={page} />
    </RQProvider>
  );
};

export default MobileReservationList;

"use client";

import React from "react";

import RQProvider from "@/lib/RQProvider";
import OrdersList from "./OrdersList";

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

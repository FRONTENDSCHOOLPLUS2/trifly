"use client";
import { modalState } from "@/atoms/atoms";
import Button from "@/components/Button/Button";
import { OrderItem } from "@/types";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSetRecoilState } from "recoil";

const TicketPrint = ({ data }: { data: OrderItem }) => {
  const componentRef = useRef<HTMLInputElement>(null);
  const setModal = useSetRecoilState(modalState);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.passengers[0].nameEng} e-ticket`,
    onAfterPrint: () =>
      setModal({
        isOpen: true,
        title: "E-Ticket",
        content: `${data.passengers[0].nameKor}님의 티켓 다운로드 완료`,
        buttonNum: 1,
        handleConfirm: () => {},
        handleCancel: () => {},
      }),
  });

  return (
    <>
      <div className="print-button">
        <Button onClick={() => handlePrint()}>E-Ticket 저장</Button>
      </div>
      <div ref={componentRef}>
        <div>탑승자명</div>
        <div className="test">{data.passengers[0].nameEng}</div>
      </div>
    </>
  );
};

export default TicketPrint;

"use client";

import { modalState } from "@/atoms/atoms";
import Button from "@/components/Button/Button";
import seatPatchAction from "@/data/actions/seatSelectAction";
import { useRouter } from "next/navigation";

import React from "react";
import { useSetRecoilState } from "recoil";

const CompleteButton = ({
  id,
  seatArr,
  setSeatArr,
  orderId,
}: {
  id: string;
  seatArr: Array<string>;
  setSeatArr: React.Dispatch<React.SetStateAction<Array<string>>>;
  orderId: number;
}) => {
  const setModal = useSetRecoilState(modalState);
  const router = useRouter();
  const findEmpty = seatArr.includes("");

  const handleClick = async () => {
    if (findEmpty) {
      setModal({
        isOpen: true,
        title: "모든 좌석을 선택해야 합니다",
        content: "좌석을 모두 선택하신 후 다시 시도해 주세요.",
        buttonNum: 1,
        handleConfirm: () => {
          setModal({ isOpen: false });
        },
      });
    } else {
      setModal({
        isOpen: true,
        title: "좌석 선택을 완료 하시겠습니까?",
        content: "지정된 좌석은 변경할 수 없습니다.",
        buttonNum: 1,
        handleConfirm: () => {
          router.push(`/order/complete/${id}`);
        },
      });
      const seats = seatArr;

      await seatPatchAction(orderId, seats);
    }
  };
  return (
    <Button size="full" onClick={handleClick}>
      선택 완료
    </Button>
  );
};

export default CompleteButton;

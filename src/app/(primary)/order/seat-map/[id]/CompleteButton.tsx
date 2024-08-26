"use client";

import { modalState } from "@/atoms/atoms";
import Button from "@/components/Button/Button";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";

import React from "react";
import { useSetRecoilState } from "recoil";

const CompleteButton = ({ id }: { id: string }) => {
  const setModal = useSetRecoilState(modalState);
  const router = useRouter();
  return (
    <>
      <Button
        size="full"
        onClick={() =>
          setModal({
            isOpen: true,
            title: "좌석 선택을 완료 하시겠습니까? ",
            content: "지정 된 좌석은 변경 할 수 없습니다",
            buttonNum: 1,
            handleConfirm: () => {
              router.push(`/order/complete/${id}`);
            },
          })
        }
      >
        선택 완료
      </Button>
    </>
  );
};

export default CompleteButton;

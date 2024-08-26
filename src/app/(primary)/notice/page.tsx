"use client";

import { modalState } from "@/atoms/atoms";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Notices = () => {
  const setModal = useSetRecoilState(modalState);
  const router = useRouter();

  useEffect(() => {
    setModal({
      isOpen: true,
      title: "준비중",
      content: "더 나은 서비스를 위해 열심히 만들고 있어요!",
      buttonNum: 1,
      handleConfirm: () => {
        router.push("/");
      },
    });
  }, []);
  return <></>;
};

export default Notices;

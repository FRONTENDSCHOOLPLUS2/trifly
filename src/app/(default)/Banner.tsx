"use client";

import { modalState } from "@/atoms/atoms";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import "./main.scss";

const Banner = ({ user }: { user: boolean }) => {
  const setModal = useSetRecoilState(modalState);
  const router = useRouter();

  const handleClick = () => {
    if (!user) {
      setModal({
        isOpen: true,
        title: "로그인 필요",
        content:
          "포토티켓을 꾸미려면 로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?",
        buttonNum: 2,
        handleConfirm: () => {
          router.push("/login");
        },
        handleCancel: () => {},
      });
    } else {
      router.push("/footprint");
    }
  };

  return (
    <section className="banner" onClick={handleClick}>
      <h3 className="hidden">포토티켓 바로가기</h3>

      <img src="/banner-stars.svg" alt="" />
      <img src="/banner-ticket.svg" alt="" />
      <img src="/banner-tag.svg" alt="" />

      <p>나만의</p>
      <p>티켓을 만들어보세요!</p>

      <div className="banner-background full-width"></div>
    </section>
  );
};

export default Banner;

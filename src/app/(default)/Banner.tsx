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
    <section className="banner full-width" onClick={handleClick}>
      <h3 className="hidden">포토티켓 바로가기</h3>
      <div className="banner-container">
        <div className="banner-images">
          <img
            className="pc banner-image-star1-pc"
            src="img/banner-star1-pc.svg"
            alt=""
          />
          <img
            className="mo banner-image-star1-mo"
            src="img/banner-star1-mobile.svg"
            alt=""
          />
          <img
            className="banner-image-star2"
            src="img/banner-star2.svg"
            alt=""
          />
          <img
            className="pc banner-image-ticket-pc"
            src="img/banner-ticket-pc.svg"
            alt=""
          />
          <img
            className="mo banner-image-ticket-mo"
            src="img/banner-ticket-mobile.svg"
            alt=""
          />
          <img className="banner-image-tag" src="img/banner-tag.svg" alt="" />
        </div>

        <div className="banner-text">
          <p className="banner-contents">나만의</p>
          <p className="banner-contents">티켓을 만들어보세요!</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

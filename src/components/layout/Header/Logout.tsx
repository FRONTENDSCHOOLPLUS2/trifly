"use client";

import { loginTypeState, modalState } from "@/atoms/atoms";
import { signOut } from "@/auth";
import { signoutAction } from "@/data/actions/signoutAction";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const Logout = ({
  type,
  loginType,
}: {
  type: string;
  loginType: "email" | "kakao" | "google";
}) => {
  const [loginTypeRecoil, setLoginTypeRecoil] = useRecoilState(loginTypeState);
  const setModal = useSetRecoilState(modalState);

  // const handleSignOut = async () => {
  //   try {
  //     setTimeout(async () => {
  //       await signOut({ redirect: true });
  //     }, 500);
  //   } catch (error) {
  //     console.error("Sign out error:", error);
  //   }
  // };

  useEffect(() => {
    if (loginType !== loginTypeRecoil) setLoginTypeRecoil(loginType);
  }, []);

  return (
    <button
      className="logout img-box"
      type="button"
      onClick={() =>
        setModal({
          isOpen: true,
          closeButton: true,
          content: "로그아웃 하시겠습니까?",
          buttonNum: 2,
          handleConfirm: () => signoutAction(),
          handleCancel: () => {},
        })
      }
    >
      <Image
        src={`/img/icon-logout-${type === "default" ? "black" : "white"}.svg`}
        alt="로그아웃"
        width={0}
        height={0}
        sizes="100%"
      />
      <i className="hidden">로그아웃</i>
    </button>
  );
};

export default Logout;

"use client";

import { loginTypeState } from "@/atoms/atoms";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Logout = ({
  type,
  loginType,
}: {
  type: string;
  loginType: "email" | "kakao" | "google";
}) => {
  const [loginTypeRecoil, setLoginTypeRecoil] = useRecoilState(loginTypeState);
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    if (loginType !== loginTypeRecoil) setLoginTypeRecoil(loginType);
  }, []);

  return (
    <button
      className="logout img-box"
      type="button"
      onClick={() => handleSignOut()}
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

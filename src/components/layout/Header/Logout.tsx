"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

const Logout = ({ type }: { type: string }) => {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

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

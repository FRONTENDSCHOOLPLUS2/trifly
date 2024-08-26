"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

const Logout = ({ type }: { type: string }) => {
  return (
    <button
      className="logout img-box"
      type="button"
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
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

"use client";
import { signOut } from "next-auth/react";

const Logout = ({ type }: { type: string }) => {
  return (
    <button type="button" onClick={() => signOut()}>
      <img
        className="logout"
        src={`/img/icon-logout-${type === "default" ? "black" : "white"}.svg`}
        alt="로그아웃"
      />
      <i className="hidden">로그아웃</i>
    </button>
  );
};

export default Logout;

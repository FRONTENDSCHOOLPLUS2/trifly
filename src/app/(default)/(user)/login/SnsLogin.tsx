"use client";

import {
  signInWithGoogle,
  signInWithKakao,
  signInWithNaver,
} from "@/data/actions/authAction";

const SnsLogin = () => {
  return (
    <div className="sns-box">
      <button type="submit" className="kakao" formAction={signInWithKakao}>
        <h4 className="hidden">카카오로 로그인</h4>
      </button>
      <button type="submit" className="naver" formAction={signInWithNaver}>
        <h4 className="hidden">네이버로 로그인</h4>
      </button>
      <button type="submit" className="google" formAction={signInWithGoogle}>
        <h4 className="hidden">구글로 로그인</h4>
      </button>
    </div>
  );
};

export default SnsLogin;

"use client";

import Anchor from "@/components/Anchor/Anchor";
import Submit from "@/components/Submit/Submit";
import { signInWithCredentials } from "@/data/actions/authAction";
import { ChangeEvent, useRef } from "react";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleTestUser = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target!.checked) {
      emailRef.current!.value = "test@trifly.com";
      passwordRef.current!.value = "11111111";
    } else {
      emailRef.current!.value = "";
      passwordRef.current!.value = "";
    }
  };

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          placeholder="이메일"
          id="email"
          name="email"
          ref={emailRef}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="비밀번호"
          id="password"
          name="password"
          ref={passwordRef}
        />
      </div>

      <div className="input-box">
        <div className="chk-box">
          <input
            type="checkbox"
            name="getTestUser"
            id="getTestUser"
            onChange={(e) => handleTestUser(e)}
          />
          <label htmlFor="getTestUser">테스트 계정 불러오기</label>
        </div>
        <div className="chk-box">
          <input type="checkbox" name="saveEmail" id="saveEmail" />
          <label htmlFor="saveEmail">이메일 저장</label>
        </div>
      </div>

      <div className="btn-box">
        <Submit size="full" formAction={signInWithCredentials}>
          로그인
        </Submit>
        <Anchor bgColor="gray" href="/signup">
          회원가입
        </Anchor>
      </div>
    </>
  );
};

export default LoginForm;

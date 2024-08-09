"use client";

import Anchor from "@/components/Anchor/Anchor";
import Submit from "@/components/Submit/Submit";
import { signInWithCredentials } from "@/data/actions/authAction";
// import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  string: string;
}

const LoginForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginForm>();

  // https://bandal.dev/React/react-hook-form-with-nextjs-server-actions

  return (
    <>
      <div className="input-box">
        <input type="text" placeholder="이메일" id="email" name="email" />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="비밀번호"
          id="password"
          name="password"
        />
      </div>

      <div className="input-box">
        <div className="chk-box">
          <input type="checkbox" name="getTestUser" id="getTestUser" />
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
        <Anchor bgColor="gray" href={`/signup`}>
          회원가입
        </Anchor>
      </div>
    </>
  );
};

export default LoginForm;

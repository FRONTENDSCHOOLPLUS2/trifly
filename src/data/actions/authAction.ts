"use server";

import { signIn } from "@/auth";
import {
  ApiRes,
  ApiResWithValidation,
  CoreErrorRes,
  OAuthUser,
  SingleItem,
  UserData,
  UserForm,
  UserLoginForm,
} from "@/types";
import { redirect } from "next/navigation";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;
const headers = {
  "client-id": CLIENT_ID,
  "Content-Type": "application/json",
};

// 회원가입
export async function signup(
  formData: FormData,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserForm>> {
  const userObj = {
    type: formData.get("type") || "user",
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
    birth: formData.get("birth") || "",
  };

  const res = await fetch(`${SERVER}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify(userObj),
  });

  return res.json();
}

// auth provider 인증 후 자동 회원 가입
export async function signupWithOAuth(
  user: OAuthUser,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserForm>> {
  const res = await fetch(`${SERVER}/users/signup/oauth`, {
    method: "POST",
    headers,
    body: JSON.stringify(user),
  });

  return res.json();
}

// Auth.js 기반 아이디/패스워드 인증 로직
export async function signInWithCredentials(
  loginData: UserLoginForm,
): Promise<ApiResWithValidation<SingleItem<UserForm>, UserLoginForm>> {
  try {
    const result = await signIn("credentials", {
      ...loginData,
      redirect: false,
    });
    // console.log("signInWithCredentials 로그인한 결과", result);
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      return err.cause as CoreErrorRes;
    }
  }
  redirect("/");
}

// 아이디/패스워드 로그인
export async function login(
  userObj: UserLoginForm,
): Promise<ApiResWithValidation<SingleItem<UserData>, UserLoginForm>> {
  const res = await fetch(`${SERVER}/users/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(userObj),
  });
  return res.json();
}

// auth provider로 인증된 사용자 로그인
export async function loginOAuth(
  providerAccountId: string,
): Promise<ApiRes<SingleItem<UserData>>> {
  const res = await fetch(`${SERVER}/users/login/with`, {
    method: "POST",
    headers,
    body: JSON.stringify({ providerAccountId }),
  });
  return res.json();
}

export async function signInWithKakao() {
  await signIn("kakao", { redirectTo: "/" });
}

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}

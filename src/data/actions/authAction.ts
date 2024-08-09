"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function signInWithCredentials(formData: FormData) {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email") || "",
      password: formData.get("password") || "",
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }
  redirect("/");
}

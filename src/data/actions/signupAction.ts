"use server";
import { UserData } from "@/app/(default)/(user)/signup/Join";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENTID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID as string;

const signupAction = async (formData: UserData) => {
  const userData = {
    type: "user",
    email: formData.email,
    password: formData.password,
    name: formData.name,
    phone: `${formData.phone1}-${formData.phone2}-${formData.phone3}`,
    extra: {
      bitrh: formData.birth || "",
    },
  };

  const res = await fetch(`${SERVER}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "client-id": CLIENTID,
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  if (!data.ok) return data.errors ? data.errors[0].msg : data.message;
  return data.ok;
};

export default signupAction;

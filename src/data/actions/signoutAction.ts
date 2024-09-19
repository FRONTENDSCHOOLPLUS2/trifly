"use server";

import { signOut } from "@/auth";

export const signoutAction = async () => {
  await signOut();
};

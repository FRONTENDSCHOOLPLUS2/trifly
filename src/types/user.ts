export interface UserData {
  _id: number;
  email: string;
  name: string;
  phone: string;
  birth: string;
  type: "user";
  loginType: "email" | "kakao";
  token: {
    accessToken: string;
    refreshToken: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type UserInToken = Pick<UserData, "_id" | "name"> & {
  accessToken: string;
  refreshToken: string;
};

export type UserForm = {
  type: "user";
  email: string;
  password: string;
  name: string;
  phone: string;
  birth?: string;
};

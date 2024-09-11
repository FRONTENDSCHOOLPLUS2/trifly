export interface UserData {
  _id: number;
  email: string;
  name: string;
  phone?: string;
  birth?: string;
  type: "user";
  loginType: "email" | "kakao" | "google";
  token: {
    accessToken: string;
    refreshToken: string;
  };
  createdAt: string;
  updatedAt: string;
  extra?: object;
}

export type OAuthUser = Required<Pick<UserData, "type" | "loginType">> &
  Partial<Pick<UserData, "name" | "email" | "phone" | "birth" | "extra">>;

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

export type UserLoginForm = Pick<UserForm, "email" | "password">;

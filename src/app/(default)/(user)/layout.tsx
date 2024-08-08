import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="user-inner">{children}</div>;
};

export default UserLayout;

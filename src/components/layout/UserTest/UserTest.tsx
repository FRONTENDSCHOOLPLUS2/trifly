"use client";

import "./UserTest.scss";
import { useSetRecoilState } from "recoil";
import { modalState } from "@/atoms/atoms";
import { useEffect } from "react";
import UserTestMain from "./UserTestMain";

const UserTest = () => {
  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    setModal({
      isOpen: true,
      title: "사용자 테스트 안내",
      content: (
        <div className="userTest">
          <UserTestMain />
        </div>
      ),
      buttonNum: 1,
      handleConfirm: () => {},
    });
  }, []);

  return <></>;
};

export default UserTest;

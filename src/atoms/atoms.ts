"use client";

import { atom } from "recoil";

interface ModalProps {
  isOpen: boolean;
  closeButton?: boolean;
  title?: string;
  content?: string;
  buttonNum?: 0 | 1 | 2;
}

export const modalState = atom<ModalProps>({
  key: "modalState",
  default: {
    isOpen: false,
    closeButton: true,
    title: "",
    content: "",
    buttonNum: 1,
  },
});

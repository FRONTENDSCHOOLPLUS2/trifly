"use client";

import { atom } from "recoil";

interface ModalProps {
  isOpen: boolean;
  closeButton?: boolean;
  title?: string;
  content?: string;
  buttonNum?: 0 | 1 | 2;
  handleConfirm?: () => void;
  handleCancel?: () => void;
}

export const modalState = atom<ModalProps>({
  key: "modalState",
  default: {
    isOpen: false,
    closeButton: true,
    title: "",
    content: "",
    buttonNum: 1,
    handleConfirm: () => {},
    handleCancel: () => {},
  },
});

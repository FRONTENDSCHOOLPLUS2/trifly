import { IMPData } from "@/types";

declare global {
  interface Window {
    IMP: {
      init(userCode: string): void;
      agency(userCode: string, tierCode: string): void;
      request_pay(
        paymentRequest: unknown,
        callback: (res: IMPData) => void,
      ): void;
      certification(
        certificationRequest: unknown,
        callback: (res: unknown) => void,
      ): void;
      loadUI(
        uiType: string,
        paymentRequest: unknown,
        callback: (res: unknown) => void,
      ): void;
      // communicate, close, naver_zzim
    };
  }
}

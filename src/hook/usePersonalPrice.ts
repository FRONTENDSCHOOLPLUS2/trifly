import { orderState } from "@/atoms/atoms";
import { OrderData } from "@/types";
import { useRecoilValueLoadable } from "recoil";

type PersonalPrice = {
  currency: "KRW";
  total: string;
  base: string;
  taxes: {
    amount: string;
    code: string;
  }[];
  refundableTaxes: string;
}[];

const usePersonalPrice = (): PersonalPrice[] => {
  const { state, contents } = useRecoilValueLoadable(orderState);
  if (state === "loading" || state === "hasError") return [[], [], []];

  const { price } = contents;
  const personalPrice: PersonalPrice[] = [[], [], []];
  const personalIdx = {
    ADULT: 0,
    CHILD: 1,
    INFANT: 2,
    HELD_INFANT: 2,
  };
  price.forEach((item) =>
    personalPrice[personalIdx[item.travelerType]].push(item.price),
  );

  return personalPrice;
};

export default usePersonalPrice;

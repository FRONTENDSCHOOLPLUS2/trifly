import { orderState } from "@/atoms/atoms";
import { useRecoilValue } from "recoil";

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

const usePersonalPrice = () => {
  const { price, totalPrice } = useRecoilValue(orderState);
  const charge = 10000;
  const personalPrice: PersonalPrice[] = [[], [], []];
  const personalIdx = {
    ADULT: 0,
    CHILD: 1,
    INFANT: 2,
  };
  price.map((item) =>
    personalPrice[personalIdx[item.travelerType]].push(item.price)
  );

  return personalPrice;
};

export default usePersonalPrice;

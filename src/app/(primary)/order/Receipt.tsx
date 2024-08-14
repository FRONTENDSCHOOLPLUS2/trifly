"use client";
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

const Receipt = () => {
  const { price, totalPrice } = useRecoilValue(orderState);
  const personalPrice: PersonalPrice[] = [[], [], []];
  const personalIdx = {
    ADULT: 0,
    CHILD: 1,
    INFANT: 2,
  };
  price.map((item) => {
    console.log(personalPrice[personalIdx[item.travelerType]]);
    personalPrice[personalIdx[item.travelerType]].push(item.price);
  });

  return (
    <article className="receipt">
      <h3>요금 영수증</h3>
      <dl>
        <dt>결제 예정 금액</dt>
        <dd>{totalPrice}원</dd>
        <dd className="sub">유류할증료 및 기타 요금 포함</dd>
      </dl>

      <div className="price-detail-box">
        <button type="button">요금 정보 상세보기</button>

        {personalPrice.map((item, idx) => {
          const type = idx === 0 ? "성인" : idx === 1 ? "소아" : "유아";
          const count = item.length;
          if (!count) return;

          return (
            <>
              <h4>
                <span>
                  {type} <strong>{count}</strong>명
                </span>
                <span>{+item[0].total * count}원</span>
              </h4>
              <table className="price-adult">
                <caption>{type} 요금 정보</caption>
                <tbody>
                  <tr>
                    <td>항공요금</td>
                    <td>{count}명</td>
                    <td>5,520원</td>
                  </tr>
                  <tr>
                    <td>유류할증료</td>
                    <td>{count}명</td>
                    <td>11,000원</td>
                  </tr>
                  <tr>
                    <td>제세공과금</td>
                    <td>{count}명</td>
                    <td>4,000원</td>
                  </tr>
                  <tr>
                    <td>발권 수수료</td>
                    <td>{count}명</td>
                    <td>
                      <s></s>1,000원
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </div>
    </article>
  );
};

export default Receipt;

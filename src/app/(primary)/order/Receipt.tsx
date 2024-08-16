"use client";
import { orderState } from "@/atoms/atoms";
import usePersonalPrice from "@/hook/usePersonalPrice";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const getLocalNum = (value: string | number) => {
  if (typeof value === "string") value = +value;
  return value.toLocaleString();
};

const Receipt = () => {
  const { totalPrice } = useRecoilValue(orderState);
  const [isDetailShow, setIsDetailShow] = useState(false);
  const charge = 10000;
  const personalPrice = usePersonalPrice();

  return (
    <article className="receipt">
      <h3>요금 영수증</h3>
      <dl>
        <dt>결제 예정 금액</dt>
        <dd>
          {getLocalNum(totalPrice)}원
          <span className="sub">유류할증료 및 제세공과금 포함</span>
        </dd>
      </dl>

      <div className="price-detail-box">
        <button
          type="button"
          className={`show-btn ${isDetailShow ? "act" : ""}`}
          onClick={() => setIsDetailShow(!isDetailShow)}
        >
          {isDetailShow ? "요금 정보 닫기" : `요금 정보 상세보기`}
        </button>

        {isDetailShow && (
          <div className="price-detail">
            {personalPrice.map((item, idx) => {
              const count = item.length;
              if (!count) return;
              const type = idx === 0 ? "성인" : idx === 1 ? "소아" : "유아";
              let YR = 0;
              let taxes = 0;

              item[0].taxes.map((tax) => {
                if (tax.code === "YR") {
                  YR = +tax.amount;
                } else {
                  taxes += +tax.amount;
                }
              });

              return (
                <div key={idx} className="price">
                  <h4>
                    <span>
                      {type} <strong>{count}</strong>명
                    </span>
                    <span>
                      {getLocalNum(+item[0].total * count + charge * count)}원
                    </span>
                  </h4>
                  <table className="price-adult">
                    <caption>{type} 요금 정보</caption>
                    <tbody>
                      <tr>
                        <td className="tit">항공요금</td>
                        <td className="count">{count}명</td>
                        <td className="price">
                          {getLocalNum(+item[0].base * count)}원
                        </td>
                      </tr>
                      <tr>
                        <td className="tit">유류할증료</td>
                        <td className="count">{count}명</td>
                        <td className="price">{getLocalNum(YR * count)}원</td>
                      </tr>
                      <tr>
                        <td className="tit">제세공과금</td>
                        <td className="count">{count}명</td>
                        <td className="price">
                          {getLocalNum(taxes * count)}원
                        </td>
                      </tr>
                      <tr>
                        <td className="tit">발권 수수료</td>
                        <td className="count">{count}명</td>
                        <td className="price">
                          {getLocalNum(charge * count)}원
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default Receipt;

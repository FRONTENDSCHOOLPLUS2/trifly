"use client";
import usePersonalPrice from "@/hook/usePersonalPrice";
import { Passengers, Purchaser } from "@/types";
import { User } from "next-auth";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OrderContext from "../orderContext";
import Submit from "@/components/Submit/Submit";
import Badge from "@/components/Badge/Badge";

type PaymentData = {
  purchaser:
    | Purchaser
    | {
        phone1: string;
        [key: string]: string;
      };
  passengers: {
    [key: string]: { NameEngLast: string; NameEngFirst: string } | Passengers;
  };
};

const PaymentForm = ({ user }: { user: User | undefined }) => {
  const { setOrderStatus } = useContext(OrderContext);
  const passengers = usePersonalPrice();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentData>();

  const handleForm = (formData: PaymentData) => {
    console.log(formData);
  };

  const [isTitleClicked, setIsTitleClicked] = useState(false);

  useEffect(() => {
    setOrderStatus(2);
  }, []);

  return (
    <form className="input-form" onSubmit={handleSubmit(handleForm)}>
      <div className="input-inner reservation">
        <h3 className="title">예약자 정보</h3>
        <div className="input-flex">
          <div className="input-box">
            <label htmlFor="name">
              이름
              <span className="errorMsg">
                {errors && errors.purchaser?.name?.message}
              </span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              defaultValue={user?.name || ""}
              {...register("purchaser.name", {
                required: "이름을 입력하세요.",
                minLength: {
                  value: 2,
                  message: "이름을 2글자 이상 입력하세요.",
                },
              })}
            />
          </div>
          <div className="input-box">
            <label htmlFor="birth">
              생년월일
              <span className="errorMsg">
                {errors && errors.purchaser?.birth?.message}
              </span>
            </label>
            <input
              type="tel"
              id="birth"
              maxLength={8}
              defaultValue={user?.birth || ""}
              {...register("purchaser.birth", {
                minLength: {
                  value: 8,
                  message: "생년월일 8자리를 입력해주세요.",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "숫자만 입력해주세요.",
                },
              })}
              placeholder="20020101"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">
              이메일
              <span className="errorMsg">
                {errors && errors.purchaser?.email?.message}
              </span>
            </label>
            <input
              id="email"
              placeholder="이메일을 입력하세요"
              type="text"
              name="email"
              defaultValue={user?.email || ""}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone1">
              휴대폰 번호
              <span className="errorMsg">
                {errors?.purchaser?.phone1
                  ? errors.purchaser?.phone1?.message
                  : errors?.purchaser?.phone2
                    ? errors.purchaser?.phone2?.message
                    : errors?.purchaser?.phone3 &&
                      errors.purchaser?.phone3?.message}
              </span>
            </label>
            <div className="input-phone">
              <input
                type="tel"
                id="phone1"
                maxLength={3}
                placeholder="010"
                defaultValue={user?.phone.split("-")[0]}
                {...register("purchaser.phone1", {
                  required: "핸드폰 번호를 입력하세요.",
                  minLength: {
                    value: 2,
                    message: "핸드폰 번호를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
              -
              <input
                type="tel"
                id="phone2"
                maxLength={4}
                placeholder="1234"
                defaultValue={user?.phone.split("-")[1]}
                {...register("purchaser.phone2", {
                  required: "핸드폰 번호를 입력하세요.",
                  minLength: {
                    value: 3,
                    message: "핸드폰 번호를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
              -
              <input
                type="tel"
                id="phone3"
                maxLength={4}
                placeholder="5678"
                defaultValue={user?.phone.split("-")[2]}
                {...register("purchaser.phone3", {
                  required: "핸드폰 번호를 입력하세요.",
                  minLength: {
                    value: 4,
                    message: "핸드폰 번호를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="emergencyPhone1">
              비상 연락처
              <span className="errorMsg">
                {/* {errors?.emergencyPhone1
              ? errors.emergencyPhone1?.message
              : errors?.emergencyPhone2
                ? errors.emergencyPhone2?.message
                : errors?.emergencyPhone3 && errors.emergencyPhone3?.message} */}
              </span>
            </label>
            <div className="input-phone">
              <input
                type="tel"
                id="emergencyPhone1"
                maxLength={3}
                placeholder="010"
                {...register("purchaser.emergencyPhone1", {
                  required: "비상 연락처를 입력하세요.",
                  minLength: {
                    value: 2,
                    message: "비상 연락처를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
              -
              <input
                type="tel"
                id="emergencyPhone2"
                maxLength={4}
                placeholder="1234"
                {...register("purchaser.emergencyPhone2", {
                  required: "비상 연락처를 입력하세요.",
                  minLength: {
                    value: 3,
                    message: "비상 연락처를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
              -
              <input
                type="tel"
                id="emergencyPhone3"
                maxLength={4}
                placeholder="5678"
                {...register("purchaser.emergencyPhone3", {
                  required: "비상 연락처를 입력하세요.",
                  minLength: {
                    value: 4,
                    message: "비상 연락처를 입력하세요.",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력해주세요.",
                  },
                })}
              />
            </div>
          </div>
        </div>
        <ul className="info-box">
          <li>
            탑승객의 승객정보 의무 수집 강화로 인해 비상연락처를 필수로 입력해야
            합니다.
          </li>
        </ul>
      </div>
      <div className="input-inner passenger">
        <h3 className="title">탑승자 정보</h3>
        <div className="input-toggle">
          {passengers.map((item, idx) => {
            const count = item.length;
            if (!count) return;
            const type = idx === 0 ? "성인" : idx === 1 ? "소아" : "유아";
            const typeEn = idx === 0 ? "adult" : idx === 1 ? "child" : "infant";

            return item.map((_, count) => {
              const key = `[${typeEn}_${count}]`;
              return (
                <div key={`${typeEn}${count}`} className="information">
                  <h4
                    className={`${typeEn} ${isTitleClicked ? "act" : ""}`}
                    onClick={() => setIsTitleClicked(!isTitleClicked)}
                  >
                    <Badge type={type === "성인" ? "primary" : "gray"}>
                      {type}
                    </Badge>
                    탑승자 정보 <span className="count">{count + 1}</span>
                  </h4>

                  <div
                    className={`input-flex ${isTitleClicked ? "hidden" : ""}`}
                  >
                    <input
                      type="hidden"
                      value={typeEn}
                      {...register(`passengers.${key}.type`)}
                    />
                    <div className="input-box">
                      <label htmlFor="nameKor">
                        이름
                        <span className="errorMsg">
                          {errors && errors.passengers?.[key]?.nameKor?.message}
                        </span>
                      </label>
                      <input
                        id="nameKor"
                        placeholder="이름을 입력하세요"
                        type="text"
                        {...register(`passengers.${key}.nameKor`, {
                          required: "이름을 입력하세요.",
                          minLength: {
                            value: 2,
                            message: "이름을 2글자 이상 입력하세요.",
                          },
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="gender">
                        성별
                        <span className="errorMsg">
                          {errors && errors.passengers?.[key]?.gender?.message}
                        </span>
                      </label>
                      <input
                        id="gender"
                        type="radio"
                        value="M"
                        {...register(`passengers.${key}.gender`, {
                          required: "성별을 선택하세요.",
                        })}
                      />
                      <input
                        id="gender"
                        type="radio"
                        value="F"
                        {...register(`passengers.${key}.gender`, {
                          required: "성별을 선택하세요.",
                        })}
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="nameEngLast">
                        영문 성
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.nameEngLast?.message}
                        </span>
                      </label>
                      <input
                        id="nameEngLast"
                        placeholder="영문 성을 입력하세요"
                        type="text"
                        {...register(`passengers.${key}.nameEngLast`, {
                          required: "영문 성을 입력하세요.",
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="nameEngFirst">
                        영문 이름
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.nameEngFirst?.message}
                        </span>
                      </label>
                      <input
                        id="nameEngFirst"
                        placeholder="영문 이름을 입력하세요"
                        type="text"
                        {...register(`passengers.${key}.nameEngFirst`, {
                          required: "영문 이름을 입력하세요.",
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="birth">
                        생년월일
                        <span className="errorMsg">
                          {errors && errors.passengers?.[key]?.birth?.message}
                        </span>
                      </label>
                      <input
                        type="tel"
                        maxLength={8}
                        placeholder="20020101"
                        {...register(`passengers.${key}.birth`, {
                          required: "생년월일을 입력하세요.",
                          minLength: {
                            value: 8,
                            message: "생년월일 8자리를 입력해주세요.",
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="phone1">
                        휴대폰 번호
                        <span className="errorMsg"></span>
                      </label>
                      <div className="input-phone">
                        <input
                          type="tel"
                          id="phone1"
                          maxLength={3}
                          placeholder="010"
                          {...register(`passengers.${key}.phone1`, {
                            required: "핸드폰 번호를 입력하세요.",
                            minLength: {
                              value: 2,
                              message: "핸드폰 번호를 입력하세요.",
                            },
                            pattern: {
                              value: /^[0-9]*$/,
                              message: "숫자만 입력해주세요.",
                            },
                          })}
                        />
                        -
                        <input
                          type="tel"
                          id="phone2"
                          maxLength={4}
                          placeholder="1234"
                          {...register(`passengers.${key}.phone2`, {
                            required: "핸드폰 번호를 입력하세요.",
                            minLength: {
                              value: 3,
                              message: "핸드폰 번호를 입력하세요.",
                            },
                            pattern: {
                              value: /^[0-9]*$/,
                              message: "숫자만 입력해주세요.",
                            },
                          })}
                        />
                        -
                        <input
                          type="tel"
                          id="phone3"
                          maxLength={4}
                          placeholder="5678"
                          {...register(`passengers.${key}.phone3`, {
                            required: "핸드폰 번호를 입력하세요.",
                            minLength: {
                              value: 4,
                              message: "핸드폰 번호를 입력하세요.",
                            },
                            pattern: {
                              value: /^[0-9]*$/,
                              message: "숫자만 입력해주세요.",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label htmlFor="passport.number">
                        여권 번호
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.passport.number?.message}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="M12345678"
                        {...register(`passengers.${key}.passport.number`, {
                          minLength: {
                            value: 9,
                            message: "여권 번호를 확인해주세요.",
                          },
                          maxLength: {
                            value: 9,
                            message: "여권 번호를 확인해주세요.",
                          },
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="passport.expDate">
                        여권 만료일
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.passport.expDate?.message}
                        </span>
                      </label>
                      <input
                        type="tel"
                        maxLength={8}
                        placeholder="20020101"
                        {...register(`passengers.${key}.passport.expDate`, {
                          minLength: {
                            value: 8,
                            message: "여권 만료일 8자리를 입력해주세요.",
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        })}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="passport.nationality">
                        국적
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.passport.nationality
                              ?.message}
                        </span>
                      </label>
                      <select>
                        <option value="대한민국">대한민국</option>
                      </select>
                    </div>
                    <div className="input-box">
                      <label htmlFor="passport.issueCountry">
                        발행 국가
                        <span className="errorMsg">
                          {errors &&
                            errors.passengers?.[key]?.passport.nationality
                              ?.message}
                        </span>
                      </label>
                      <select>
                        <option value="대한민국">대한민국</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            });
          })}
        </div>
        <ul className="info-box">
          <li>
            <strong>
              여권상의 정보와 꼭 동일하게 입력해주세요. 잘못된 정보 등록 시
              탑승할 수 없습니다.
            </strong>
            <br />
            (영문 성/이름 입력시 띄어쓰기나 "-"표시 없이 영문스펠링만 정확히
            입력해 주십시오)
          </li>
          <li>
            출발 24시간 전까지 꼭 정확한 여권 정보를 등록해주세요. <br />
            (미주 지역으로 여행하거나 경유시에는 출발 72시간 전까지 정확하게
            등록해주세요.)
          </li>
          <li>
            정확한 승객 정보 확인을 위해 탑승자별로 휴대폰 번호와 이메일을
            입력해주세요.
          </li>
        </ul>
      </div>

      <div className="btn-box">
        <Submit size="full">다음</Submit>
      </div>
    </form>
  );
};

export default PaymentForm;

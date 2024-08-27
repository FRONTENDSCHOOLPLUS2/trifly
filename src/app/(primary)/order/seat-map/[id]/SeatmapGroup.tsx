"use client";

import { AircraftData, CodeState, OrderItem, SeatMapData } from "@/types";
import React, { useEffect, useState } from "react";
import SeatmapGrid from "./SeatmapGrid";
import Image from "next/image";
import CompleteButton from "./CompleteButton";
import seatmap from "@/lib/seatmap";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { modalState } from "@/atoms/atoms";

const SeatmapGroup = ({
  data,
  id,
  orderId,
  code,
}: {
  data: OrderItem | undefined;
  id: string;
  orderId: number;
  code: CodeState<AircraftData>;
}) => {
  const router = useRouter();

  // data의 itineraries.length가 2개라면?
  // 선택된 seat를 기본 0: []으로 넘기기 seat배열 안에 배열을 담기 -> 지금 seat:[]는 배열이니 두개의 배열을 넘겨주면 되는것임!
  // data의 itineraries.length가 2개라면? 버튼 클릭 후 다음 itinerary seat 선택

  // 왕복 좌석 선택 방법
  // data의 itineraries.length가 2개라면?
  // -> Button 컴포넌트를 선택 완료가 아닌 data.itineraries[0]일때는 '다음 티켓 선택'
  // -> data.itineraries[0] 번째 일 때 Button 컴포넌트 선택 시 seatArr을 setSeatAllArr에 담기
  // data.itineraries[0]번째 seatmap -> 인원 수 만큼 좌석 선택 -> passengerLength에 따라 배열에 들어간 ''의 배열에 빈값이 없는지 확인 => 빈값 없다면 seatArr에 담기
  // data.itineraries[1]번째 seatmap -> 인원 수 만큼 좌석 선택 -> passengerLength에 따라 배열에 들어간 ''의 배열에 빈값이 없는지 확인 => 빈값 없다면 seatArr에 담기
  // 이 itineraries를 관리하는 state는 현재 [seatArr, setSeatArr]인데 seatArr = [string] 형태임 => 왕복을 관리하는 setSeatAllArr 추가
  // 현재 PATCH 하고있는 seatArr을 seatAllArr로 변경
  // 결과적으로 [[stirng], [string]] PATCH하기
  // seatAllArr에는 0번째 itineraries와 1번째 itineraries가 담겼으면? SeatAllArr을 PATCH

  // if (data.itineraries.length >= 2) {
  //   data.itineraries.map((item) => console.log);
  //itineraries를 map을 돌면서 각 출발 도착에 대해 seatmap 띄우기
  // data.itineraries[0]번째 seatmap -> 인원 수 만큼 좌석 선택 -> passengerLength에 따라 배열에 들어간 ''의 배열에 빈값이 없는지 확인 => 빈값 없다면 seatArr에 담기
  // -> Button 컴포넌트를 선택 완료가 아닌 data.itineraries[0]일때는 '다음 티켓 선택' -> data.itineraries[1] seatmap으로 이동
  // -> data.itineraries[0] 번째 일 때 Button 컴포넌트 선택 시 담은 좌석seatArr을 setSeatAllArr에 담기
  // data.itineraries[1]번째 seatmap -> 인원 수 만큼 좌석 선택 -> passengerLength에 따라 배열에 들어간 ''의 배열에 빈값이 없는지 확인 => 빈값 없다면 seatArr에 담기
  // -> data.itineraries[1] 번째 일 때 Button 컴포넌트 선택 시 담은 좌석seatArr을 setSeatAllArr에 담기
  // 이 itineraries를 관리하는 state는 현재 [seatArr, setSeatArr]인데 seatArr = [string] 형태임 => 왕복을 관리하는 setSeatAllArr 추가
  // 현재 PATCH 하고있는 seatArr을 seatAllArr로 변경
  // 결과적으로 [[stirng], [string]] PATCH하기
  // seatAllArr에는 0번째 itineraries와 1번째 itineraries가 담겼으면? SeatAllArr을 PATCH
  // } else {
  //   console.log("편도");
  // }

  // console.log(item);
  const [seatArr, setSeatArr] = useState<string[]>([]);
  const passengerData = data?.passengers.map((item, passengerIdx) => {
    return (
      <div key={`${passengerIdx}-${item.nameKor}`} className="passenger-seat">
        <p className="passenger-name">{item.nameKor}</p>
        <p
          className={`${!seatArr[passengerIdx] ? "unselected-seat" : "selected-seat"}`}
        >
          {/* {item.seat === undefined ? "선택된 좌석 없음" : item.seat} */}
          {!seatArr[passengerIdx] ? "선택된 좌석 없음" : seatArr[passengerIdx]}
        </p>
      </div>
    );
  });

  // const [seatAllArr, setSeatAllArr] = useState<string[][]>([]);

  const setModal = useSetRecoilState(modalState);
  const aircraft = data?.itineraries[0].segments[0].aircraft.code;
  let seatmapData: SeatMapData[] = [];

  if (aircraft) {
    if (code[aircraft]) {
      seatmapData = seatmap[code[aircraft].seatmap].data;
    } else {
      setModal({
        isOpen: true,
        title: "좌석 선택 불가",
        content: "해당 항공기는 현장에서 좌석 선택이 가능합니다",
        buttonNum: 1,
        handleConfirm: () => {
          router.push(`/order/complete/${id}`);
        },
      });
    }
  }

  return (
    <>
      {seatmapData.length > 0 && (
        <div className="seat-select-box">
          <div className="seat-select-left-box">
            <SeatmapGrid
              seatmapData={seatmapData}
              passengerLength={data?.passengers.length}
              seatArr={seatArr}
              setSeatArr={setSeatArr}
              orderId={orderId}
              data={data}
            />
          </div>
          <div className="seat-select-right-box">
            <div className="seat-map-guide">
              <h3>이코노미</h3>
              <div className="icon-box">
                <div className="seat-title-flex">
                  <div className="seat-title-box">
                    <div className="seat-title">
                      <Image
                        src="/img/icon-seat-select.svg"
                        alt="일반좌석"
                        className="seat-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>일반석</p>
                    </div>

                    <div className="seat-title">
                      <Image
                        src="/img/icon-seat-unselect.svg"
                        alt="선택 불가좌석"
                        className="seat-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>선택 불가</p>
                    </div>
                  </div>

                  <div className="seat-title-box">
                    <div className="seat-title">
                      <Image
                        src="/img/icon-seat-selected.svg"
                        alt="선택불가 좌석"
                        className="seat-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>선택된 일반좌석</p>
                    </div>

                    <div className="seat-title">
                      <Image
                        src="/img/icon-seat-dog.svg"
                        alt="반려동물 동반 좌석"
                        className="seat-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>반려동물 동반</p>
                    </div>
                  </div>
                </div>
                <p className="line" />
                <div className="facility-box-flex">
                  <div className="facility-box">
                    <div className="facility">
                      <Image
                        src="/img/icon-seat-exit.svg"
                        alt="비상구"
                        className="facility-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>비상구</p>
                    </div>

                    <div className="facility">
                      <Image
                        src="/img/icon-seat-galley.svg"
                        alt="갤리"
                        className="facility-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>갤리</p>
                    </div>
                  </div>
                  <div className="facility-box">
                    <div className="facility">
                      <Image
                        src="/img/icon-seat-toilet.svg"
                        alt="화장실"
                        className="facility-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>화장실</p>
                    </div>

                    <div className="facility">
                      <Image
                        src="/img/icon-seat-wing.svg"
                        alt="날개"
                        className="facility-icon"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                      <p>날개</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {passengerData}
            {/* {data?.passengers.map((item, birth) => (
          <div key={birth} className="passenger-seat">
            <p className="passenger-name">{item.nameKor}</p>
            <p
              className={`${item.seat === undefined ? "unselected-seat" : "selected-seat"}`}
            >
              {item.seat === undefined ? "선택된 좌석 없음" : item.seat}
            </p>
          </div>
        ))} */}

            <CompleteButton
              id={id}
              seatArr={seatArr}
              setSeatArr={setSeatArr}
              orderId={orderId}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SeatmapGroup;

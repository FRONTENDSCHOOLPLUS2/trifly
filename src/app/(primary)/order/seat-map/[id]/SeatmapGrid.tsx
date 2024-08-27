"use client";

import seatmap from "@/lib/seatmap";
import React, { useEffect, useState } from "react";
import "./seatmapGrid.scss";
import {
  AircraftData,
  CodeState,
  OrderItem,
  SeatData,
  SeatFacilities,
  SeatMap,
  SeatMapData,
} from "@/types";
import { useSetRecoilState } from "recoil";
import { modalState } from "@/atoms/atoms";

type IGrid = Array<SeatData | SeatFacilities | null>[];

const SeatmapGrid = ({
  seatmapData,
  passengerLength,
  seatArr,
  setSeatArr,
  orderId,
  data,
}: {
  seatmapData: SeatMapData[];
  passengerLength: number | undefined;
  seatArr: Array<[number, number] | string>;
  setSeatArr: React.Dispatch<React.SetStateAction<Array<string>>>;
  orderId: number;
  data: OrderItem | undefined;
}) => {
  const [grid, setGrid] = useState<IGrid>();
  // const [seatArr, setSeatArr] = useState<Array<[number, number] | string>>([]);
  const setModal = useSetRecoilState(modalState);
  // console.log("좌석", seatArr);
  //cell number들이 담긴 배열로 수정하기
  //class 생성을 막아주는 상태관리 만들기

  // 1. clickedCells안에 좌표 말고 number 넘기기
  // 2. 넘긴 number들을 배열로 보내기
  // 3. 탑승자 비열의 length만큼 선택 할 수 있도록 length 와 비교하기
  // 4. 탑승자 배열의 길이만큼 선택이 되었다면 선택 완료 모달 띄우기
  // 5. 탑승자 배열의 길이보다 초과해서 선택 했다면 모달을 띄우고 추가 선택 할 수 없도록 막기
  // 5. 선택된 좌석을 재선택 했을 때 재 선택 된 좌석의 number를 indexof 를 통해 선택된 배열의 index 파악 후 해당 index를 ""비워두기
  // 6.

  /**
   *
   * 버튼 클릭
   *
   * 1. 좌석을 선택한다
   * 2. 좌석 선택을 하면 배열에 cell.number가 쌓이고
   * 3. 탑승자 배열의 length와 비교해서
   *  - 좌석 배열에 담긴 length와 탑승자 배열 length가 일치한다면
   *       -> 선택완료 모달
   *       -> if(선택했던 좌석을 재선택한 경우라면)
   *                    -> true -> 재 선택한 좌석의 인덱스를 확인하고 해당 인덱스를 ''로 비운다
   *
   *                    -> false -> 모달 (선택이 완료되었습니다.)
   *       ->else if( 기존 선택 좌석이 아닌 다른 좌석을 추가로 선택 했을 때 ) -> 이미 모두 선택했습니다 모달
   *
   *
   *
   *
   *
   * 1. 탑승자 배열(3)의 길이만큼 선택이 되었다면
   *
   *  - true -> if(선택했던 좌석을 재선택한 경우라면)
   *                -> true -> 선택한 좌석의 인덱스를 확인하고 해당 인덱스를 ''로 비운다
   *                -> false -> 모달 (선택이 완료되었습니다.)
   *
   *  - false : 배열 다음 요소에 선택된 cell.number 담기
   *
   * -> if(선택했던 좌석을 재선택한 경우라면)
   *                -> true -> 선택한 좌석의 인덱스를 확인하고 해당 인덱스를 ''로 비운다
   *                -> false -> 모달 (선택이 완료되었습니다.)
   *
   *
   * 2. 탑승자 배열(3) 길이보다 초과로 선택되었다면  -> 모달 (선택이 완료되었습니다.)
   *
   *
   *
   */

  // const { data: seatDatas } = seatMapb747;
  const seatData = seatmapData.map((item) => ({
    decks: item.decks,
    seats: item.decks.map((deck) => deck.seats),
    coordinates: item.decks.map((deck) =>
      deck.seats.map((seat) => seat.coordinates),
    ),
    characteristicsCodes: item.decks.map((deck) =>
      deck.seats.map((seat) => seat.characteristicsCodes),
    ),
  }));

  // console.log("dddddd", ...seatData);

  const { width, length, startWingsX, endWingsX, exitRowsX } =
    seatData[0].decks[0].deckConfiguration;

  useEffect(() => {
    const newGrid = Array(length)
      .fill(null)
      .map(() => Array(width).fill(null));

    seatData[0].coordinates[0].forEach((seat, idx) => {
      const row = seat.x;
      const col = seat.y;
      newGrid[row][col] = seatData[0].seats[0][idx];
    });

    seatmapData[0].decks[0].facilities.forEach((item) => {
      newGrid[item.coordinates.x][item.coordinates.y] = item;
    });

    setGrid(newGrid);

    // 탑승객 수만큼 배열 "" 채우기
    if (passengerLength) {
      for (let i = 0; i < passengerLength; i++) {
        seatArr.push("");
      }
    }
  }, []);

  const handleButtonClick = (cellNumber: string) => {
    const isAlreadyClicked = seatArr.find((item) => item === cellNumber);

    const itinerarySeat = data?.itineraries.map((_, idx) => {});
    if (isAlreadyClicked) {
      setSeatArr((prevSeatArr) => {
        const targetIdx = prevSeatArr.findIndex((item) => item === cellNumber);
        // console.log("prevSeatArr", prevSeatArr);
        // console.log("targetIdx", targetIdx);
        if (targetIdx >= 0) {
          const newSeatArr = [...prevSeatArr];
          newSeatArr[targetIdx] = "";
          return newSeatArr;
        }
        return prevSeatArr;
      });
    } else {
      setSeatArr((prevSeatArr) => {
        const isSeatArrEmpty = prevSeatArr.findIndex((item) => item === "");
        if (isSeatArrEmpty >= 0) {
          const targetIdx = prevSeatArr.findIndex((item) => item === "");
          const newSeatArr = [...prevSeatArr];
          newSeatArr[targetIdx] = cellNumber;
          return newSeatArr;
        } else {
          // 상태 업데이트 이후에 모달 상태를 업데이트하도록 setTimeout을 사용
          setTimeout(() => {
            setModal({
              isOpen: true,
              title: "",
              content: "이미 모든 탑승객의 좌석을 선택 하였습니다",
              buttonNum: 1,
              handleConfirm: () => {},
              handleCancel: () => {},
            });
          }, 0);
          return prevSeatArr;
        }
      });
    }
  };

  const isClicked = (rowIndex: number, colIndex: number) => {
    // 해당 좌표가 클릭된 상태 여부 확인하는 부분
    return seatArr.some(
      ([clickedRow, clickedCol]) =>
        clickedRow === rowIndex && clickedCol === colIndex,
    );
  };

  if (!grid) {
    return null;
    // return <Loading />;
  }

  // console.log(seatArr);

  return (
    <div className="seat-box">
      <div className="wing-table-box left">
        <table>
          <tbody className="wing-table">
            {Array.from({ length }).map((_, index) => (
              <tr
                key={index}
                className={`wing-seat ${
                  index >= startWingsX && index <= endWingsX ? "wing" : null
                } ${exitRowsX.includes(index + 1) === true ? "exit" : null}`}
              >
                <td className="wing-td" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="section">
        <table className="seat-map">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr
                className="seat-map-tr"
                key={rowIndex}
                style={{ display: "flex" }}
              >
                {row.map((cell, colIndex) => {
                  const clicked = isClicked(rowIndex, colIndex); // 셀 클릭 했는지 안했는지
                  return (
                    <td className="seat_table" key={colIndex}>
                      {cell && !("code" in cell) && (
                        <button
                          type="button"
                          className={`seat ${
                            //기본을 true로 만들고 hendleclick을 했을 때 배열이 비어있지 않다면 false로 바꿔서 클래스 비워두기
                            //clicked && isAddedClass ? "clicked-seat" : ""
                            // clicked ? "clicked-seat" : ""
                            seatArr.find((item) => item === cell.number)
                              ? "clicked-seat"
                              : ""
                          } ${cell.travelerPricing[0].seatAvailabilityStatus}`}
                          onClick={() => handleButtonClick(cell.number)}
                        >
                          {cell.travelerPricing[0].seatAvailabilityStatus ===
                          "AVAILABLE"
                            ? cell.number
                            : null}
                        </button>
                      )}

                      {cell && "code" in cell && (
                        <button
                          aria-label="facility icon"
                          className={`facility ${
                            clicked ? "clicked-facility" : ""
                          } ${cell.code === "LA" ? "toilet" : ""} ${
                            cell.code === "G" ? "galley" : ""
                          }`}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="wing-table-box right">
        <table>
          <tbody className="wing-table">
            {Array.from({ length }).map((_, index) => (
              <tr
                key={index}
                className={`wing-seat ${
                  index >= startWingsX && index <= endWingsX ? "wing" : ""
                } ${exitRowsX.includes(index + 1) === true ? "exit" : ""}`}
              >
                <td className="wing-td" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatmapGrid;

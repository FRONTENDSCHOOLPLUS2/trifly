"use client";

import { seatMap } from "@/lib/seatMap";
import React from "react";
import "./seat-map.scss";

const page = () => {
  const { data } = seatMap;
  const allDecks = data.flatMap((dataItem) => dataItem.decks);
  const allSeats = allDecks.map((item) => item.seats);

  const seatData = data.map((item) => ({
    decks: item.decks,
    seats: item.decks.map((deck) => deck.seats),
    coordinates: item.decks.map((deck) =>
      deck.seats.map((seat) => seat.coordinates),
    ),
    characteristicsCodes: item.decks.map((deck) =>
      deck.seats.map((seat) => seat.characteristicsCodes),
    ),
  }));

  // console.log(allDecks);

  // 37줄, 10칸짜리 그리드를 만들어
  const grid = Array(37)
    .fill(null)
    .map(() => Array(10).fill(null));

  // console.log(seatData[0].coordinates[0]);
  // 각 자리 데이터에 따라 그리드에 채워줘
  seatData[0].coordinates[0].forEach((seat, idx) => {
    const row = seat.x; // 줄 번호
    const col = seat.y; // 칸 번호

    // if (seat.y === 2) grid[row][col] = "복도"; // 예: '자리'라고 채워넣기
    grid[row][col] = seatData[0].seats[0][idx]; // 예: '자리'라고 채워넣기
  });

  const code = seatData[0].characteristicsCodes.map((item) => item);
  console.log(code);

  return (
    <div className="seat-box">
      {/* 세로 길이만큼(length) 박스를 두고 안보이게! 그리고 비행기 날개 지점에서 날개 모양 달기 */}
      <div className="left-icon">날개</div>
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
                  // console.log(cell);
                  return (
                    <td className="seat_table" key={colIndex}>
                      {cell ? (
                        <button
                          type="button"
                          className={`seat ${cell.travelerPricing[0].seatAvailabilityStatus}`}
                        >
                          {cell.number}
                        </button>
                      ) : (
                        <span />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="right-icon">날개</div>
    </div>
  );
};

export default page;

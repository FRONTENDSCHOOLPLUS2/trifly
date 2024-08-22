"use client";

import { seatMap } from "@/lib/seatMap";
import React, { useEffect, useState } from "react";
import "./seat-map.scss";

const Page = () => {
  const [grid, setGrid] = useState<Array<Array<any>> | null>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const { data } = seatMap;
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

    const { width, length, exitRowsX } = seatData[0].decks[0].deckConfiguration;
    console.log(exitRowsX);
    // 데이터 length width에 따른 그리드
    const newGrid = Array(length)
      .fill(null)
      .map(() => Array(width).fill(null));

    // 각 자리 데이터에 따른 그리드
    seatData[0].coordinates[0].forEach((seat, idx) => {
      const row = seat.x;
      const col = seat.y;
      newGrid[row][col] = seatData[0].seats[0][idx];
    });

    setGrid(newGrid);
    setLength(length); // wing 테이블에 사용할 length
  }, []);

  if (!grid) {
    return <div>엣헴</div>;
  }

  return (
    <div className="seat-box">
      <div className="wing-table-box left">
        <table>
          <tbody className="wing-table">
            {Array.from({ length }).map((_, index) => (
              <tr
                key={index}
                className={`wing-seat ${index >= 2 && index <= 16 ? "wing" : ""} `}
              >
                {/* wing 테이블의 각 열 */}
                <td className="wing-td">{index + 1}</td>
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
                {row.map((cell, colIndex) => (
                  <td className="seat_table" key={colIndex}>
                    {cell ? (
                      <button
                        type="button"
                        className={`seat ${cell.travelerPricing[0].seatAvailabilityStatus}`}
                      >
                        {cell.number}
                      </button>
                    ) : null}
                  </td>
                ))}
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
                className={`wing-seat ${index >= 2 && index <= 16 ? "wing" : ""} `}
              >
                {/* wing 테이블의 각 열 */}
                <td className="wing-td">{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

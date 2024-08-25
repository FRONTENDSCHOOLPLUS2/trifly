"use client";

import { seatMapb747 } from "@/lib/seatMapb747";
import React, { useEffect, useState } from "react";
import "./seatmapGrid.scss";
import { SeatData, SeatFacilities } from "@/types";

type IGrid = Array<SeatData | SeatFacilities | null>[];

const SeatmapGrid = () => {
  const [grid, setGrid] = useState<IGrid>();
  const [clickedCells, setClickedCells] = useState<Array<[number, number]>>([]);

  const { data } = seatMapb747;
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

    data[0].decks[0].facilities.forEach((item) => {
      newGrid[item.coordinates.x][item.coordinates.y] = item;
    });

    setGrid(newGrid);
  }, []);

  const handleButtonClick = (rowIndex: number, colIndex: number) => {
    console.log(`좌표 (${rowIndex}, ${colIndex})`);
    // 이미 클릭된 셀인지 확인하는거임
    const isAlreadyClicked = clickedCells.some(
      ([clickedRow, clickedCol]) =>
        clickedRow === rowIndex && clickedCol === colIndex,
    );

    if (isAlreadyClicked) {
      // 이미 클릭된 셀이라면요 선택 해제잉
      setClickedCells((item) =>
        item.filter(
          ([clickedRow, clickedCol]) =>
            !(clickedRow === rowIndex && clickedCol === colIndex),
        ),
      );
    } else {
      // 클릭된 셀이 아니면 선택 가넝~
      setClickedCells((item) => [...item, [rowIndex, colIndex]]);
    }
  };

  const isClicked = (rowIndex: number, colIndex: number) => {
    // 해당 좌표가 클릭된 상태 여부 확인하는 부분
    return clickedCells.some(
      ([clickedRow, clickedCol]) =>
        clickedRow === rowIndex && clickedCol === colIndex,
    );
  };

  if (!grid) {
    return <div>엣헴g</div>;
  }

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
                            clicked ? "clicked-seat" : ""
                          } ${cell.travelerPricing[0].seatAvailabilityStatus}`}
                          onClick={() => handleButtonClick(rowIndex, colIndex)}
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
                          onClick={() => handleButtonClick(rowIndex, colIndex)}
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

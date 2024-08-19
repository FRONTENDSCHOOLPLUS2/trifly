"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { seatMap } from "@/lib/seatMap";
import "./seat-map.scss";

const Page = () => {
  const data = seatMap.data;
  const allDecks = data.flatMap((dataItem) => dataItem.decks);
  const allSeats = allDecks.map((item) => item.seats);

  console.log(data);
  console.log(allSeats[0][0].cabin);
  const seatmap = allSeats.map((item) =>
    item
      .map((seat) => seat.travelerPricing)
      .map((item) => item)
      .map((seatmap) => seatmap)
  );

  const seatData = data.map((item) => ({
    decks: item.decks,
    seats: item.decks.map((item) => item.seats),
  }));

  console.log(seatData);
  const DeckWidth = allDecks.map((deck) => deck.deckConfiguration.width);
  const DeckLength = allDecks.map((deck) => deck.deckConfiguration.length);

  const [seats, setSeats] = useState<React.JSX.Element[]>([]);
  const [number, setNumber] = useState<string[]>([]);

  useEffect(() => {
    const renderNumber = () => {
      const number = () => {
        let number = [];
        for (let i = 0; i < DeckWidth[0]; i++) {
          number.push(i);
        }
        return number;
      };

      const num = number();

      const arr = Array.from(num, (v, i) => String.fromCharCode(i + 65));

      return arr;
    };

    const renderSeats = () => {
      const seats = [];

      for (let lengthI = 0; lengthI < DeckLength[0]; lengthI++) {
        let rows = [];

        for (let widthI = 0; widthI < DeckWidth[0]; widthI++) {
          const available =
            seatData[0].seats[0][widthI].travelerPricing[0]
              .seatAvailabilityStatus;
          rows.push(
            widthI === 2 || widthI === 7 ? (
              <td className="seat_table" key={`${lengthI}-${widthI}`}>
                <button className={`seat ${available}`} type="button">
                  복도
                </button>
              </td>
            ) : (
              <td className="seat_table" key={`${lengthI}-${widthI}`}>
                <button className={`seat ${available}`} type="button">
                  {widthI + 1}
                </button>
              </td>
            )
          );
        }

        seats.push(
          <tr key={lengthI}>
            <td>{lengthI + 1}</td>
            {rows}
          </tr>
        );
      }

      return seats;
    };

    setSeats(renderSeats());
    setNumber(renderNumber());
  }, []);

  return (
    <>
      <table>{}</table>

      <table className="seat-map">
        <thead>
          <tr>
            <th>{number}</th>
          </tr>
        </thead>
        <tbody>{seats}</tbody>
      </table>
    </>
  );
};

export default Page;

import Ticket from "@/components/Ticket/Ticket";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrder } from "@/lib/fetchOrder";
import { AirportData } from "@/types";
import Image from "next/image";
import Animation from "./Animation";
import "./footprint.scss";

interface DataType {
  areaCode: string;
  duration: number | string;
  img: string;
}

interface ChartType {
  name: string;
  value: number;
}

const FootPrint = async () => {
  const { item } = await FetchOrder();
  const { code } = await fetchCodes<AirportData>();

  const getParseDuration = (duration: string) => {
    const hoursMatch = duration.match(/(\d+)H/);
    const minutesMatch = duration.match(/(\d+)M/);
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return hours * 60 + minutes; // 총 분 단위로 변환
  };

  const getFormatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `PT${hours}H${remainingMinutes}M`;
  };

  /* 통계에서 보여줄 데이터
  - 비행 횟수 (숫자)
  - 비행 시간 (경유 시간 포함) (숫자)
  - 탑승한 항공사 (차트)
  - 방문 대륙 (차트)
    */

  // 총 비행 횟수
  const flightCount = item.length;

  // 총 비행 시간 계산
  const flightTimeArr = item.map((data) =>
    data.itineraries
      .map((itinerary) => getParseDuration(itinerary.duration))
      .reduce((acc, cur) => acc + cur, 0),
  );
  const flightTime = getFormatDuration(
    flightTimeArr.reduce((acc, cur) => acc + cur, 0),
  );

  // 탑승한 항공사
  const topAirlines = item.reduce((arr, data) => {
    data.itineraries.forEach((itinerary) => {
      itinerary.segments.forEach(({ carrierCode }) => {
        const existItem = arr.find(
          (arrItem) => arrItem.name === code[carrierCode].value,
        );

        if (existItem) existItem.value += 1;
        else
          arr.push({
            name: code[carrierCode].value,
            value: 1,
          });
      });
    });
    return arr;
  }, [] as ChartType[]);

  // 방문 대륙
  const topAreas = item.reduce((arr, data) => {
    data.itineraries.forEach((itinerary) => {
      const { iataCode } =
        itinerary.segments[itinerary.segments.length - 1].arrival;
      const existItem = arr.find(
        (arrItem) => arrItem.name === code[iataCode].value,
      );

      if (existItem) existItem.value += 1;
      else
        arr.push({
          name: code[iataCode].value,
          value: 1,
        });
    });
    return arr;
  }, [] as ChartType[]);

  return (
    <div className="footprint">
      <section className="animation-box">
        <h2 className="hidden">대륙 별 여행 기록</h2>
        <Animation />
        <div className="data-box">d</div>
      </section>

      <section>
        <h2 className="hidden">포토티켓 모음</h2>
        <div className="tickets">
          {item.map((ticket) =>
            ticket.passengers.map((_, idx) => (
              <Ticket key={idx} data={ticket} code={code} passengerId={idx} />
            )),
          )}
        </div>
      </section>
    </div>
  );
};

export default FootPrint;

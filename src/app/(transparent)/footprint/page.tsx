import Ticket from "@/components/Ticket/Ticket";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { FetchOrder } from "@/lib/fetchOrder";
import { AirportData, OrderItem } from "@/types";
import Animation from "./Animation";
import "./footprint.scss";
import dynamic from "next/dynamic";

interface DataType {
  year: string;
  data: OrderItem[];
}

const ChartComponent = dynamic(() => import("./Chart"), { ssr: false });
const TicketListComponent = dynamic(() => import("./TicketList"), {
  ssr: false,
});

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
    return `PT${hours}H${remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes}M`;
  };

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

  // 연도별로 묶인 티켓 데이터
  const dataByYear = item.reduce((arr, data) => {
    const itemYear = data.createdAt.slice(0, 4);
    const existItem = arr.find((arrData) => arrData.year === itemYear);

    if (existItem) existItem.data.push(data);
    else
      arr.push({
        year: itemYear,
        data: [data],
      });

    return arr;
  }, [] as DataType[]);

  return (
    <div className="footprint">
      <section className="animation-box">
        <h2 className="hidden">여행 통계</h2>
        <Animation />
        <div className="data-box">
          {flightCount ? (
            <>
              <div className="left-box">
                <dl>
                  <dt className="data-title">
                    <h3>비행횟수</h3>
                  </dt>
                  <dd>
                    <strong>{flightCount}</strong>flights
                  </dd>
                </dl>
                <dl>
                  <dt className="data-title">
                    <h3>비행시간</h3>
                  </dt>
                  <dd>
                    <strong>{flightTime.split("H")[0].slice(2)}</strong>h
                    <strong>{flightTime.split("H")[1].slice(0, 2)}</strong>min
                  </dd>
                </dl>
              </div>
              <div className="right-box">
                <div className="pie-box">
                  <h3 className="data-title">Airline</h3>
                  <ChartComponent item={item} type="airline" />
                </div>
                <div className="pie-box">
                  <h3 className="data-title">Airport</h3>
                  <ChartComponent item={item} type="areas" />
                </div>
              </div>
            </>
          ) : (
            <div className="nodata-box">
              <p>항공권을 구매하고 나의 발자국을 확인해보세요 !</p>
            </div>
          )}
        </div>
      </section>

      <section className="tickets-box">
        <h2 className="hidden">여행 티켓</h2>
        <TicketListComponent data={dataByYear} code={code} />
      </section>
    </div>
  );
};

export default FootPrint;

import { fetchCodes } from "@/data/fetch/fetchCode";
import FetchOrderId from "@/lib/fetchOrder";
import "./ticket.scss";

const Ticket = async ({
  orderId,
  passengerId,
}: {
  orderId: string | number;
  passengerId: number;
}) => {
  const URL = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
  const { reservationId, itineraries, passengers } = await FetchOrderId(
    `${orderId}`
  );
  const { code } = await fetchCodes();
  const arrival =
    itineraries[0].segments[itineraries[0].segments.length - 1].arrival
      .iataCode;

  return (
    <div className="ticket-box">
      <div className="top-box">
        <div className="barcode">
          <img src="/img/img-ticket-barcode.svg" alt="티켓 바코드" />
        </div>
        <div className="flex-box">
          <dl>
            <dt>Passanger Name</dt>
            <dd>{passengers[passengerId].nameEng}</dd>
          </dl>
          <dl>
            <dt>E-ticket Number</dt>
            <dd>{reservationId}</dd>
          </dl>
        </div>
      </div>
      <div className="img-box">
        <img src={`${URL}${code[arrival].img}`} alt={code[arrival].value} />
      </div>
      <div className="segments">
        {itineraries.map((item) => (
          <div className="segment-box">
            <div className="path">
              <span className="departure">
                {item.segments[0].departure.iataCode}
              </span>
              <span className="arrival">
                {item.segments[item.segments.length - 1].arrival.iataCode}
              </span>
            </div>
            <div className="flight-box">
              <div className="flex-box">
                <dl>
                  <dt>Passanger Name</dt>
                  <dd>{passengers[passengerId].nameEng}</dd>
                </dl>
                <dl>
                  <dt>Date</dt>
                  <dd>{item.segments[0].departure.at.split("T")[0]}</dd>
                </dl>
                <dl>
                  <dt>Time</dt>
                  <dd>
                    {item.segments[0].departure.at.split("T")[1].slice(0, 5)}
                  </dd>
                </dl>
              </div>
              <div className="flex-box">
                <dl>
                  <dt>Filght</dt>
                  <dd>
                    {item.segments[0].operating
                      ? item.segments[0].operating.carrierCode
                      : item.segments[0].carrierCode}
                    {item.segments[0].number}
                  </dd>
                </dl>
                <dl>
                  <dt>Terminal</dt>
                  <dd>T{item.segments[0].departure.terminal}</dd>
                </dl>
                <dl>
                  <dt>Gate</dt>
                  <dd>-</dd>
                </dl>
              </div>
              <div className="barcode">
                <img src="/img/img-ticket-barcode.svg" alt="여정 바코드" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;

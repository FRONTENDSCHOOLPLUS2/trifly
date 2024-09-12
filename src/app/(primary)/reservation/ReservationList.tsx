import { FetchOrder } from "@/lib/fetchOrder";
import OrdersItem from "./OrdersItem";
import "./reservation.scss";

const ReservationList = async () => {
  const data = await FetchOrder();
  const reservationData = data.item;

  return (
    <>
      <section>
        <table className="reservation-table">
          <caption className="hidden">예약 내역 리스트</caption>
          <thead>
            <tr>
              <th>예약 번호</th>
              <th>예약일</th>
              <th>출발</th>
              <th>도착</th>
              <th>왕복/편도</th>
              <th>출발일</th>
              <th>인원</th>
              <th>총 금액</th>
            </tr>
          </thead>

          {reservationData?.map((item) => (
            <OrdersItem key={item._id} item={item} />
          ))}
        </table>
      </section>
    </>
  );
};

export default ReservationList;

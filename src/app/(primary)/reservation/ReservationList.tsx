import { FetchOrderList } from "@/lib/fetchOrder";
import OrdersItem from "./OrdersItem";
import "./reservation.scss";
import Pagination from "./Pagination";

const ReservationList = async ({
  page,
  keyword,
}: {
  page: string;
  keyword: string;
}) => {
  const data = await FetchOrderList(page);
  const reservationData = data.item;

  const filteredItems = keyword
    ? reservationData.filter((item) =>
        item.reservationId.substring(0, 6).includes(keyword),
      )
    : reservationData;

  return (
    <div>
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
          {filteredItems.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={8} className="text-center">
                  일치하는 예약번호가 없습니다
                </td>
              </tr>
            </tbody>
          ) : (
            // 필터링된 데이터를 반복 렌더링
            filteredItems.map((item) => (
              <OrdersItem key={item._id} item={item} />
            ))
          )}
        </table>
      </section>
      <Pagination {...data.pagination!} />
    </div>
  );
};

export default ReservationList;

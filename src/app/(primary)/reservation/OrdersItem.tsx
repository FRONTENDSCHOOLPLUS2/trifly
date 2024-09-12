"use client";

import Badge from "@/components/Badge/Badge";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";

const OrdersItem = ({ item }: { item: OrderItem }) => {
  const router = useRouter();
  console.log(item.itineraries[0].segments);

  // itinenary.length => 1이면 편도, length가 2면 왕복
  // segmanets.length => 경유 여부, length === 1 직항 ,, length ===2  경유
  // 목적지 :

  const handleClick = (_id: number) => {
    router.push(`/reservation/${_id}`);
  };

  return (
    <tr onClick={() => handleClick(item._id)} style={{ cursor: "pointer" }}>
      <td className="reservation-number">
        <h3>{item.reservationId.substring(0, 6)}</h3>
      </td>
      <td className="reservation-date">{item.createdAt.substring(0, 10)}</td>
      <td className="departure">
        {item.itineraries[0].segments[0].departure.iataCode}
      </td>
      <td className="arrival">
        {item.itineraries[0].segments.length === 2
          ? item.itineraries[0].segments[1].arrival.iataCode
          : item.itineraries[0].segments[0].arrival.iataCode}
      </td>
      <td className="travel">
        {item.itineraries.length === 2 ? (
          <Badge>왕복</Badge>
        ) : (
          <Badge type="secondary">편도</Badge>
        )}
      </td>
      <td className="schedule">
        {item.itineraries[0].segments[0].departure.at.substring(0, 10)}
      </td>
      <td className="personnel">{item.passengers?.length}</td>
      <td className="total">
        {Number(item.totalPrice).toLocaleString("ko-KR")} 원
      </td>
    </tr>
  );
};

export default OrdersItem;

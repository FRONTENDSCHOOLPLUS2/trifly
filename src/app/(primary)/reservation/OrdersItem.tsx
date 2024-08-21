"use client";

import Badge from "@/components/Badge/Badge";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";

const OrdersItem = ({ item }: { item: OrderItem }) => {
  const router = useRouter();

  const handleClick = (_id: number) => {
    router.push(`/reservation/${_id}`);
  };

  console.log(item.totalPrice);
  console.log(typeof item.totalPrice);

  return (
    <tr onClick={() => handleClick(item._id)} style={{ cursor: "pointer" }}>
      <td className="reservation-number">
        {item.reservationId.substring(0, 6)}
      </td>
      <td className="reservation-date">{item.createdAt.substring(0, 10)}</td>
      <td className="departure">
        {item.itineraries[0].segments[0].departure.iataCode}
      </td>
      <td className="arrival">
        {item.itineraries.slice(-1)[0].segments[0].departure.iataCode}
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

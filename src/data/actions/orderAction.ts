"use server";

import {
  PaymentData,
  PaymentPassenger,
} from "@/app/(primary)/order/payment/PaymentForm";
import { auth } from "@/auth";
import { OrderItineraries, Price } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENTID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID as string;

const orderAction = async (
  formData: PaymentData,
  itineraries: OrderItineraries[],
  price: Price[],
  totalPrice: number,
  image: string,
) => {
  const session = await auth();
  const token = session?.accessToken as string;

  const passengersArr: PaymentPassenger[] = Object.values(formData.passengers);
  const passengers = passengersArr.map((item) => ({
    type: item.type,
    nameKor: item.nameKor,
    nameEng: `${item.nameEngFirst} ${item.nameEngLast}`,
    birth: item.birth,
    phone: `${item.phone1}-${item.phone2}-${item.phone3}`,
    passport: {
      number: item.passport.number,
      expDate: item.passport.expDate,
    },
    nationality: item.nationality,
    issueCountry: item.issueCountry,
    email: item.email,
    image,
    seat: "",
  }));

  const orderData = {
    products: [
      {
        _id: 1,
        quantity: 1,
      },
    ],
    reservationId: "eJzTd9cPDjUJdPQAAAtZAlw%3D",
    totalPrice: `${totalPrice}`,
    itineraries,
    price,
    passengers,
    purchaser: {
      name: formData.purchaser.name,
      birth: formData.purchaser.birth,
      phone: {
        main: `${formData.purchaser.phone1}-${formData.purchaser.phone2}-${formData.purchaser.phone3}`,
        sub: `${formData.purchaser.emergencyPhone1}-${formData.purchaser.emergencyPhone2}-${formData.purchaser.emergencyPhone3}`,
      },
      email: formData.purchaser.email,
    },
  };

  const res = await fetch(`${SERVER}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "client-id": CLIENTID,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });

  const data = await res.json();
  if (!data.ok) return data.errors ? data.errors[0].msg : data.message;
  return data.item;
};

export default orderAction;

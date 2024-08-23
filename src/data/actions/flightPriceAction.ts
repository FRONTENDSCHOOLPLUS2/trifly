"use server";

import { OffersPrice, OffersSearchData, TravelerPricing } from "@/types";
import fetchAuth from "../fetch/fetchAuth";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;

const flightPriceAction = async (
  flightOffers: OffersSearchData,
): Promise<TravelerPricing[]> => {
  let accessToken = await fetchAuth();
  const url = `${AMADEUS_API_SERVER}/v1/shopping/flight-offers/pricing`;

  const request = {
    data: {
      type: "flight-offers-pricing",
      flightOffers: [flightOffers],
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "GET",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(request),
    });

    if (res.status === 401) {
      accessToken = await fetchAuth();

      const reRes = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-HTTP-Method-Override": "GET",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(flightOffers),
      });

      const reResJson: OffersPrice = await reRes.json();

      if (!reResJson.data) {
        throw new Error("에러가 발생했습니다.");
      }

      return reResJson.data.flightOffers[0].travelerPricings;
    }

    const resJson: OffersPrice = await res.json();
    if (!resJson.data) {
      throw new Error("에러가 발생했습니다.");
    }

    return resJson.data.flightOffers[0].travelerPricings;
  } catch (e) {
    console.error(e);
    throw new Error("오류가 발생했습니다.");
  }
};

export default flightPriceAction;

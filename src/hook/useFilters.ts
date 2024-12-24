import { FilterProps } from "@/atoms/atoms";
import { OffersSearchData } from "@/types";
import { useMemo } from "react";

const useFilters = (
  data: OffersSearchData[],
  filters: FilterProps,
  prices: number[],
  returnDate?: string,
) => {
  return useMemo(() => {
    let filteredData = [...data];

    if (filters.nonStop) {
      filteredData = filteredData.filter((offer) =>
        offer.itineraries.every((itinerary) => itinerary.segments.length === 1),
      );
    }

    if (filters.originDepTime) {
      const { originDepTime } = filters;

      filteredData = filteredData.filter((offer) => {
        const departureTime = new Date(
          offer.itineraries[0].segments[0].departure.at,
        ).getHours();

        return originDepTime.some(
          (timeRange) =>
            departureTime >= timeRange - 6 && departureTime < timeRange,
        );
      });
    }

    if (filters.originArrTime) {
      const { originArrTime } = filters;

      filteredData = filteredData.filter((offer) => {
        const segmentsLength = offer.itineraries[0].segments.length;
        const arrTime = new Date(
          offer.itineraries[0].segments[segmentsLength - 1].arrival.at,
        ).getHours();

        return originArrTime.some(
          (timeRange) => arrTime >= timeRange - 6 && arrTime < timeRange,
        );
      });
    }

    if (returnDate) {
      if (filters.returnDepTime) {
        const { returnDepTime } = filters;

        filteredData = filteredData.filter((offer) => {
          const departureTime = new Date(
            offer.itineraries[1].segments[0].departure.at,
          ).getHours();

          return returnDepTime.some(
            (timeRange) =>
              departureTime >= timeRange - 6 && departureTime < timeRange,
          );
        });
      }

      if (filters.returnArrTime) {
        const { returnArrTime } = filters;

        filteredData = filteredData.filter((offer) => {
          const segmentsLength = offer.itineraries[1].segments.length;
          const arrTime = new Date(
            offer.itineraries[1].segments[segmentsLength - 1].arrival.at,
          ).getHours();

          return returnArrTime.some(
            (timeRange) => arrTime >= timeRange - 6 && arrTime < timeRange,
          );
        });
      }
    }

    if (filters.airline) {
      const airlines = filters.airline;
      filteredData = filteredData.filter((offer) =>
        offer.itineraries.every((itinerary) =>
          itinerary.segments.every((segment) =>
            airlines.includes(segment.carrierCode),
          ),
        ),
      );
    }

    if (filters.maxPrice) {
      const { maxPrice } = filters;

      if (filters.maxPrice < Math.max(...prices)) {
        filteredData = filteredData.filter(
          (offer) => Number(offer.price.grandTotal) < maxPrice,
        );
      }
    }

    return filteredData;
  }, [data, filters]);
};

export default useFilters;

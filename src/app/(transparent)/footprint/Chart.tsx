"use client";

import { OrderItem } from "@/types";
import { useState } from "react";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

interface ChartType {
  name: string;
  value: number;
}

const Chart = ({ item, type }: { item: OrderItem[]; type: string }) => {
  const [activeIdxAirLine, setActiveIdxAirLine] = useState(0);
  const [activeIdxAreas, setActiveIdxAreas] = useState(0);

  const topAirlines = item.reduce((arr, data) => {
    data.itineraries.forEach((itinerary) => {
      itinerary.segments.forEach(({ carrierCode }) => {
        const existItem = arr.find((arrItem) => arrItem.name === carrierCode);

        if (existItem) existItem.value += 1;
        else
          arr.push({
            name: carrierCode,
            value: 1,
          });
      });
    });
    return arr;
  }, [] as ChartType[]);

  const topAreas = item.reduce((arr, data) => {
    data.itineraries.forEach((itinerary) => {
      const { iataCode } =
        itinerary.segments[itinerary.segments.length - 1].arrival;
      const existItem = arr.find((arrItem) => arrItem.name === iataCode);

      if (existItem) existItem.value += 1;
      else
        arr.push({
          name: iataCode,
          value: 1,
        });
    });
    return arr;
  }, [] as ChartType[]);

  const areaLabel = (props: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      name,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle!);
    const cos = Math.cos(-RADIAN * midAngle!);
    const mx = cx! + (outerRadius! + 17) * cos;
    const my = cy! + (outerRadius! + 23) * sin;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill="var(--color-gray-100)"
          fontSize={14}
        >
          {name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius! + 6}
          outerRadius={outerRadius! + 10}
          fill={fill}
        />
        <text
          x={mx}
          y={my}
          textAnchor={textAnchor}
          fill="var(--color-gray-30)"
          fontSize={14}
        >
          {`${(percent! * 100).toFixed()}%`}
        </text>
      </g>
    );
  };

  return (
    <PieChart width={180} height={180}>
      <Pie
        activeIndex={type === "airline" ? activeIdxAirLine : activeIdxAreas}
        activeShape={areaLabel}
        data={type === "airline" ? topAirlines : topAreas}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={40}
        fill="var(--color-gray-100)"
        dataKey="value"
        onMouseEnter={(_, idx) =>
          type === "airline" ? setActiveIdxAirLine(idx) : setActiveIdxAreas(idx)
        }
      />
    </PieChart>
  );
};

export default Chart;

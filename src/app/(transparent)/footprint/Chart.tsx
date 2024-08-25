"use client";

import { OrderItem } from "@/types";
import { useEffect, useState } from "react";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

interface ChartType {
  name: string;
  value: number;
}

const Chart = ({ item }: { item: OrderItem[] }) => {
  const [topAirlines, setTopAirlines] = useState<ChartType[]>([]);
  const [topAreas, setTopAreas] = useState<ChartType[]>([]);
  const [activeIdxAirLine, setActiveIdxAirLine] = useState(0);
  const [activeIdxAreas, setActiveIdxAreas] = useState(0);

  useEffect(() => {
    const computedData = item.reduce((arr, data) => {
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

    const computedTopAreas = item.reduce((arr, data) => {
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

    setTopAirlines(computedData);
    setTopAreas(computedTopAreas);
  }, [item]);

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
    <>
      <div className="pie-box">
        <h3 className="data-title">Airline</h3>
        <PieChart width={180} height={180}>
          <Pie
            activeIndex={activeIdxAirLine}
            activeShape={areaLabel}
            data={topAirlines}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
            fill="var(--color-gray-100)"
            dataKey="value"
            onMouseEnter={(_, idx) => setActiveIdxAirLine(idx)}
          />
        </PieChart>
      </div>
      <div className="pie-box">
        <h3 className="data-title">Airport</h3>
        <PieChart width={180} height={180}>
          <Pie
            activeIndex={activeIdxAreas}
            activeShape={areaLabel}
            data={topAreas}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
            fill="var(--color-gray-100)"
            dataKey="value"
            onMouseEnter={(_, idx) => setActiveIdxAreas(idx)}
          />
        </PieChart>
      </div>
    </>
  );
};

export default Chart;

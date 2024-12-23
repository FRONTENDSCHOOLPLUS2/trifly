import "@/app/(default)/(ticket)/ticket-result/Filter.scss";
import { FilterProps } from "@/atoms/atoms";
import { ChangeEvent, memo, useState } from "react";

const PriceFilter = memo(
  ({
    prices,
    handleFilterChange,
  }: {
    prices: number[];
    handleFilterChange: (filter: FilterProps) => void;
  }) => {
    const [maxPrice, setMaxPrice] = useState(Math.max(...prices));
    /* -------------------------------------------------------------------------- */
    /*                                   가격 설정                                  */
    /* -------------------------------------------------------------------------- */
    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value, style, max } = e.target;
      const newMaxPrice = Number(value);
      setMaxPrice(newMaxPrice);
      handleFilterChange({ maxPrice: newMaxPrice });
      const percent = 100 / +max;
      style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent * +value}%, var(--color-gray-50) ${percent * +value}%, var(--color-gray-50) 100%`;
    };

    return (
      <div className="filter-contents maxPrice">
        <label htmlFor="max-price">
          {`${maxPrice?.toLocaleString()}원 미만`}
        </label>
        <input
          type="range"
          className="input-range horizontal"
          id="max-price"
          min={0}
          max={Math.max(...prices)}
          value={maxPrice}
          step={100}
          onChange={handlePriceChange}
        />
      </div>
    );
  },
);

export default PriceFilter;

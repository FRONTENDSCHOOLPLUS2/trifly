import "@/app/(default)/(ticket)/ticket-result/Filter.scss";
import { FilterProps } from "@/atoms/atoms";
import Badge from "@/components/Badge/Badge";
import { memo, useState } from "react";

const NonStopFilter = memo(
  ({
    nonStop,
    handleFilterChange,
  }: {
    nonStop: boolean;
    handleFilterChange: (filter: FilterProps) => void;
  }) => {
    const [isNonStop, setIsNonStop] = useState(nonStop);

    /* -------------------------------------------------------------------------- */
    /*                          경유 선택 시 직항 경유 변경 처리                         */
    /* -------------------------------------------------------------------------- */
    const handleNonStopChange = () => {
      setIsNonStop(!isNonStop);
      handleFilterChange({ nonStop: !isNonStop });
    };

    return (
      <div className="filter-contents nonstop">
        <input
          type="checkbox"
          id="nonstop-filter"
          name="nonstop"
          checked={isNonStop}
          onChange={handleNonStopChange}
        />
        <label htmlFor="nonstop-filter">
          <Badge selected={isNonStop}>직항</Badge>
        </label>
      </div>
    );
  },
);

export default NonStopFilter;

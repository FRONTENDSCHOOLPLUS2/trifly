import { ChangeEvent } from "react";

const Sorting = ({
  handleSorting,
  tripType,
}: {
  handleSorting: (e: ChangeEvent<HTMLSelectElement>) => void;
  tripType: string;
}) => {
  return (
    <div className="result-list-sort">
      <div className="sort-container">
        <p>정렬</p>
        <label className="hidden" htmlFor="sorting">
          항공권 정렬
        </label>
        <select
          className="sorting"
          name="sorting"
          id="sorting"
          onChange={handleSorting}
        >
          <option value="priceLow">가격 낮은 순</option>
          <option value="durationShort">비행시간 짧은 순</option>
          <option value="depDepTime">가는날 출발시간 빠른 순</option>
          {tripType === "round" && (
            <option value="returnDepTime">오는날 출발시간 빠른 순</option>
          )}
          <option value="depArrTime">가는날 도착시간 빠른 순</option>
          {tripType === "round" && (
            <option value="returnArrTime">오는날 도착시간 빠른 순</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Sorting;

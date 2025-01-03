"use client";

import "./pagination.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationPropType {
  page: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationPropType> = ({ page, totalPages }) => {
  const searchParams = useSearchParams();
  const pageList = [];

  for (let i = 1; i <= totalPages; i += 1) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", String(i));
    const search = newSearchParams.toString();

    pageList.push(
      <li key={i} className="pagination-number">
        <Link
          href={`/reservation?${search}`}
          className={page === i ? "active" : "unactive"}
        >
          {i}
        </Link>
      </li>,
    );
  }

  return (
    <div className="pagination">
      <ul>{pageList}</ul>
    </div>
  );
};

export default Pagination;

"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Pagination = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="pagination-number">
      <ul>
        <li>
          <Link href={`/reservation?page=1`}>1</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={`/reservation?page=2`}>2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

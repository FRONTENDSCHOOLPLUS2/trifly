"use client";
import Link from "next/link";
import "./Pagination.scss";

import React from "react";

const Pagination = () => {
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

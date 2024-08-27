"use client";

import Image from "next/image";
import { useEffect } from "react";
import "./error.scss";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="no-search-result">
      <div className="img-box">
        <Image
          src="/img/icon-no-result.svg"
          alt="검색 결과 없음"
          width={0}
          height={0}
          sizes="100%"
        />
      </div>
      <div className="no-result-message">
        <p className="no-result-title">항공권을 찾을 수 없습니다.</p>
        <p className="no-result-description">
          조건에 맞는 항공편을 다시 검색해보세요.
        </p>
      </div>
    </div>
  );
};

export default Error;

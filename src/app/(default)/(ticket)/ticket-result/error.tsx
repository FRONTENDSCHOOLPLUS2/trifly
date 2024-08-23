"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <h1>오류가 발생했습니다! 다시 시도해보세요!</h1>;
};

export default Error;

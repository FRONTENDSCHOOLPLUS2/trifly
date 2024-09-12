"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { filterState } from "./atoms/atoms";

const FilterStateManager = () => {
  const pathname = usePathname();
  const setFilters = useSetRecoilState(filterState);

  useEffect(() => {
    if (!pathname.includes("result") && !pathname.includes("order")) {
      setFilters({});
    }
  }, [pathname]);

  return null;
};

export default FilterStateManager;

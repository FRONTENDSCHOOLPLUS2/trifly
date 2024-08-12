"use client";

import Badge from "../Badge/Badge";
import "./RecentSearch.scss";
import RecentSearchResult from "./RecentSearchResult";

// 로컬 스토리지 접근 필요
const RecentSearch = () => {
  // 임시
  const data1 = {
    oneway: false,
    dep: "서울/인천 (ICN)",
    arr: "오사카/간사이 (KIX)",
    schedule: "2024년 8월 20일 - 2024년 8월 23일",
    members: "성인 2",
    cabin: "일반석",
  };
  const data2 = {
    oneway: true,
    dep: "서울/인천 (ICN)",
    arr: "도쿄/나리타 (NRT)",
    schedule: "2024년 8월 13일",
    members: "성인 1",
    cabin: "일반석",
  };

  return (
    <>
      <section className="recent-search full-width">
        <div className="recent-search-wrapper">
          <div className="recent-search-layout">
            <div className="recent-search-menu">
              <h3>최근 검색</h3>
              <button>전체 삭제</button>
            </div>
            <div className="recent-search-results">
              <RecentSearchResult data={data1} />
              <RecentSearchResult data={data2} />
              <RecentSearchResult data={data1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentSearch;

"use client";

import "./RecentSearch.scss";
import RecentSearchResult from "./RecentSearchResult";

// 로컬 스토리지 접근 필요
const RecentSearch = () => {
  // 임시
  // const data = [
  //   {
  //     id: 1,
  //     oneway: false,
  //     dep: "서울/인천 (ICN)",
  //     arr: "오사카/간사이 (KIX)",
  //     schedule: "8월 20일 - 8월 23일",
  //     members: "성인 2",
  //     cabin: "일반석",
  //   },
  //   {
  //     id: 2,
  //     oneway: true,
  //     dep: "서울/인천 (ICN)",
  //     arr: "도쿄/나리타 (NRT)",
  //     schedule: "8월 13일",
  //     members: "성인 1",
  //     cabin: "일반석",
  //   },
  //   {
  //     id: 3,
  //     oneway: false,
  //     dep: "서울/김포 (GMP)",
  //     arr: "제주(CJU)",
  //     schedule: "8월 5일 - 8월 6일",
  //     members: "성인 1",
  //     cabin: "일반석",
  //   },
  // ];

  const data: {
    id: number;
    oneway: boolean;
    dep: string;
    arr: string;
    schedule: string;
    members: string;
    cabin: string;
  }[] = [];

  const result = data.map((item) => (
    <RecentSearchResult key={item.id} data={item} />
  ));

  return (
    <>
      {data.length > 0 && (
        <section className="recent-search full-width">
          <div className="recent-search-wrapper">
            <div className="recent-search-layout">
              <div className="recent-search-menu">
                <h3>최근 검색</h3>
                <button>전체 삭제</button>
              </div>
              <div className="recent-search-results">{result}</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RecentSearch;

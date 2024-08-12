"use client";

import Badge from "../Badge/Badge";
import "./RecentSearch.scss";

// 로컬 스토리지 접근 필요
const RecentSearch = () => {
  const handleClick = () => {
    console.log("검색!");
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
              <div className="recent-search-result" onClick={handleClick}>
                <button className="delete-result" type="button">
                  <img src="/img/icon-close-black.svg" alt="닫기" />
                  <i className="hidden">닫기</i>
                </button>
                {/* 왕복 or 편도 여부 확인 */}
                <Badge type="secondary">왕복</Badge>
                <div className="route">
                  <p>서울/인천(ICN)</p>
                  {/* 왕복 or 편도 여부 확인 */}
                  <img src="/img/icon-roundtrip-gray.svg" alt="왕복" />
                  <p>다낭(DAD)</p>
                </div>
                <div className="schedule">
                  <p>5월 21일 - 5월 26일</p>
                  {/* 왕복 or 편도 여부 확인 */}
                </div>
              </div>
              <div className="recent-search-result">결과 2</div>
              <div className="recent-search-result">결과 3</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentSearch;

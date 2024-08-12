import Badge from "../Badge/Badge";
import "./RecentSearchResult.scss";

interface RecentSearchData {
  oneway: boolean;
  dep: string;
  arr: string;
  schedule: string;
  members: string;
  cabin: string;
}

const RecentSearchResult = ({ data }: { data: RecentSearchData }) => {
  const handleClick = () => {
    console.log("검색!");
  };

  return (
    <div className="recent-search-result" onClick={handleClick}>
      <button className="delete-result" type="button">
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <i className="hidden">닫기</i>
      </button>
      {data.oneway ? (
        <Badge type="secondary">편도</Badge>
      ) : (
        <Badge type="secondary">왕복</Badge>
      )}

      {/* <Badge type="secondary">편도</Badge> */}
      <div className="route">
        <p>{data.dep}</p>
        {data.oneway ? (
          <img src="/img/icon-oneway-gray.svg" alt="편도" />
        ) : (
          <img src="/img/icon-roundtrip-gray.svg" alt="왕복" />
        )}
        <p>{data.arr}</p>
      </div>
      <div className="schedule">
        <p>{data.schedule}</p>
        <p>{data.members}</p>
        <p>{data.cabin}</p>
      </div>
    </div>
  );
};

export default RecentSearchResult;

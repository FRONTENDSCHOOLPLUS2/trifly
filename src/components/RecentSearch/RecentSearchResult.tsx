import { recentSearchState, SearchResultProps } from "@/atoms/atoms";
import { useRecoilState } from "recoil";
import Badge from "../Badge/Badge";
import "./RecentSearchResult.scss";

const RecentSearchResult = ({
  data,
  id,
}: {
  data: SearchResultProps;
  id: number;
}) => {
  const [recentSearch, setRecentSearch] = useRecoilState(recentSearchState);

  const handleClick = () => {
    console.log("검색!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    const newRecentSearch = [...recentSearch];

    newRecentSearch.splice(id, 1);

    setRecentSearch([...newRecentSearch]);
  };

  return (
    <div className="recent-search-result" onClick={handleClick}>
      <button className="delete-result" type="button" onClick={handleDelete}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <i className="hidden">닫기</i>
      </button>
      {data.tripType === "oneway" ? (
        <Badge type="secondary">편도</Badge>
      ) : (
        <Badge type="secondary">왕복</Badge>
      )}

      {/* <Badge type="secondary">편도</Badge> */}
      <div className="route">
        <p>
          {data.origin.value} ({data.origin.code})
        </p>
        {data.tripType === "oneway" ? (
          <img src="/img/icon-oneway-gray.svg" alt="편도" />
        ) : (
          <img src="/img/icon-roundtrip-gray.svg" alt="왕복" />
        )}
        <p>
          {data.destination.value} ({data.destination.code})
        </p>
      </div>
      <div className="schedule">
        {data.tripType === "oneway" ? (
          <p>{data.schedule.departureFormattedDate}</p>
        ) : (
          <p>
            {data.schedule.departureFormattedDate} -{" "}
            {data.schedule.returnFormattedDate}
          </p>
        )}

        <p>{`성인 ${data.passengers.adults}명${data.passengers.children ? `, 소아 ${data.passengers.children}명` : ""}${data.passengers.infants ? `, 유아 ${data.passengers.infants}명` : ""}`}</p>
        <p>{data.cabin.cabinKor}</p>
      </div>
    </div>
  );
};

export default RecentSearchResult;

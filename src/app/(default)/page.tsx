import { auth } from "@/auth";
import Banner from "./Banner";
import "./main.scss";
import Link from "next/link";

const Home = async () => {
  const session = await auth();
  const user = session?.user ? true : false;

  return (
    <div className="main">
      <h2 className="hidden">메인</h2>
      <section className="search-container full-width">
        <h3 className="hidden">항공권 검색</h3>
        <div className="search-box"></div>
      </section>

      <Banner user={user} />

      <section className="notices">
        <div className="notice-menu">
          <h3>공지사항</h3>
          <Link href="/notice">
            <span>더보기</span>
            <img src="img/icon-arrow.svg" alt="더보기" />
          </Link>
        </div>

        <div>
          <Link href="/notices/1">
            <span>HOT</span>
            <span>
              최초 발권 후 24시 이내 환불 처리 방침 변경 항공(국제선) 안내
            </span>
            <span className="pc">2024.05.01</span>
          </Link>
          <Link href="/notices/2">
            <span>HOT</span>
            <span>2024년 8월 유류할증 안내</span>
            <span className="pc">2024.07.12</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

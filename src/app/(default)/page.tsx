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
            <img src="" alt="더보기" />
          </Link>
        </div>
        공지사항
      </section>
    </div>
  );
};

export default Home;

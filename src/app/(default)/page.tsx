import { auth } from "@/auth";
import Banner from "./Banner";
import "./main.scss";

const Home = async () => {
  const session = await auth();
  const user = session?.user ? true : false;

  return (
    <div className="main">
      <h2 className="hidden">메인</h2>
      <section className="search-container full-width">
        <h3 className="hidden">항공권 검색</h3>
      </section>

      <Banner user={user} />

      <section className="notices">
        <h3 className="hidden">공지사항</h3>
        공지사항
      </section>
    </div>
  );
};

export default Home;

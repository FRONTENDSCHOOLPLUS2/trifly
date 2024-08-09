import "./main.scss";

const Home = () => {
  return (
    <div className="main">
      <h2 className="hidden">메인</h2>
      <section className="search-container">
        <h3 className="hidden">검색창</h3>
      </section>

      <section className="banner">
        <h3 className="hidden">배너-포토티켓 꾸미기</h3>
        배너
      </section>

      <section className="notices">
        <h3 className="hidden">공지사항</h3>
        공지사항
      </section>
    </div>
  );
};

export default Home;

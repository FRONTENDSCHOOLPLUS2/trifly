import "@/styles/not-found.scss";

import Header from "@/components/layout/Header/Header";
import Anchor from "@/components/Anchor/Anchor";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <div className="layout">
          <h2 className="hidden">404 에러</h2>
          <p className="error-number">404</p>
          <p className="error-title">예상치 못한 에러가 발생했어요</p>

          <p className="error-content">
            서버와의 통신이 원활하지 않아
            <br />
            데이터를 불러올 수 없습니다
          </p>

          <Anchor href="/" size="sm">
            HOME
          </Anchor>
        </div>
      </div>
    </>
  );
}

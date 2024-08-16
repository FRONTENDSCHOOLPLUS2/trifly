import Link from "next/link";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="layout">
        <div className="footer_infobox">
          <div className="footer_info">
            <Link href={"#"}>이용약관</Link>
            <Link href={"#"}>개인정보 처리방침</Link>
            <Link href={"#"}>취소 및 환불 정책</Link>
          </div>
          <img src="/img/logo-text-gray.svg" alt="로고" />
        </div>
        <div className="footer_content">
          <p>
            트리플라이 | 대표 정진욱 | 책임자 전희선 | 대장 이소정 |
            사업자등록번호 200-12-34567 | 멋쟁이사자처럼 플러스 2기 파이널
            프로젝트
          </p>
          <p>
            정진욱 | 이메일 busy39@naver.com 이소정 | 이메일 dlth95@naver.com
            전희선 | 이메일 designh2sun@gmail.com
          </p>
          <p className="footer_end">
            트리플라이는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
          </p>
          <p>
            부득이한 사정에 의해 확정된 여행일정이 변경되는 경우 여행자의 사전
            동의를 받습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

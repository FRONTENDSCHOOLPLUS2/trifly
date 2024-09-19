import Link from "next/link";
import "./Footer.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="layout">
        <div className="footer-infobox">
          <div className="footer-info">
            <Link href={"#"}>이용약관</Link>
            <Link className="info-bold" href={"#"}>
              개인정보 처리방침
            </Link>
            <Link href={"#"}>취소 및 환불 정책</Link>
          </div>
          <div className="img-box">
            <Image
              src="/img/logo-text-gray.svg"
              alt="로고"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        </div>
        <div className="footer-content">
          <p>
            © 2024 Trifly. All rights reserved. 트리플라이 | 정진욱 이소정
            전희선
          </p>
          <p className="footer-end">
            트리플라이는 프로젝트 서비스이며 통신판매의 당사자가 아닙니다.
            따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
            <br />
            구매 과정의 결제 시스템은 테스트 결제이므로 실제로 결제되지
            않습니다.
          </p>
        </div>
        <Link
          className="github-link"
          href={
            "https://github.com/FRONTENDSCHOOLPLUS2/trifly/tree/dev?tab=readme-ov-file"
          }
        >
          GitHub 바로가기
        </Link>
      </div>
    </footer>
  );
};

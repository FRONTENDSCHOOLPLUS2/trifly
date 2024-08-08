import Link from "next/link";
import "./Header.scss";

const Header = ({ type = "white" }) => {
  return (
    <header className={`header ${type}Type`}>
      <div className="layout">
        Header
        <Link href={`/`}>메인</Link>
        <Link href={`/order`}>결제</Link>
        <Link href={`/footprint`}>발자국</Link>
        <div className="corner">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

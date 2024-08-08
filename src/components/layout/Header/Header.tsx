import Link from "next/link";
import "./Header.scss";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "default" | "primary" | "transparent";
}

const Header: React.FC<HeaderProps> = ({ type = "default" }) => {
  return (
    <header className={`header ${type}Type`}>
      <div className="layout header-contents">
        <div className="header-logo">
          <Link href={`/`}>
            <img src={`logo-${type}.svg`} alt="TriFly" />
            <i className="hidden">메인</i>
          </Link>
        </div>

        <nav className="header-nav">
          <Link href={`/order`}>예약내역</Link>
          <Link href={`/footprint`}>발자국</Link>
        </nav>

        <div className="header-user">
          {/* {user ? (
            <button type="button">
              <img src={`icon-logout-${type === "default" ? "black" : "white"}.svg`} alt="로그아웃" />
              <i className="hidden">로그아웃</i>
            </button>
          ) : (
            <Link href={`/login`}>
              <img src={`icon-login-${type === "default" ? "black" : "white"}.svg`} alt="로그인" />
              <i className="hidden">로그인</i>
            </Link>
          )} */}

          <Link href={`/login`}>
            <img
              src={`icon-login-${type === "default" ? "black" : "white"}.svg`}
              alt="로그인"
            />
            <i className="hidden">로그인</i>
          </Link>
        </div>

        <div className="corner">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import "./Header.scss";
import { auth } from "@/auth";
import Logout from "./Logout";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "default" | "primary" | "transparent";
}

const Header: React.FC<HeaderProps> = async ({ type = "default" }) => {
  const session = await auth();
  const user = session?.user ? true : false;

  return (
    <header className={`header ${type}Type`}>
      <div className="layout header-contents">
        <div className="header-logo">
          <Link href={`/`}>
            <img src={`/img/logo-${type}.svg`} alt="TriFly" />
            <h1 className="hidden">TriFly</h1>
          </Link>
        </div>

        <nav className="header-nav">
          <Link href={`/order`}>예약내역</Link>
          <Link href={`/footprint`}>발자국</Link>
        </nav>

        <div className="header-user">
          {user ? (
            <Logout type={type} />
          ) : (
            <Link href={`/login`}>
              <img
                src={`/img/icon-login-${type === "default" ? "black" : "white"}.svg`}
                alt="로그인"
              />
              <i className="hidden">로그인</i>
            </Link>
          )}

          {/* <Link href={`/login`}>
            <img
              src={`/img/icon-login-${type === "default" ? "black" : "white"}.svg`}
              alt="로그인"
            />
            <i className="hidden">로그인</i>
          </Link> */}
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

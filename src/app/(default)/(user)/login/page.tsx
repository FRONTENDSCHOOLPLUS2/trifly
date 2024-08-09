import "../user.scss";
import "./login.scss";
import LoginForm from "./LoginForm";

const Login = async () => {
  return (
    <div className="login">
      <h2 className="hidden">로그인</h2>
      <div className="logo">
        <img src="/img/logo-text-primary.svg" alt="trifly" />
      </div>

      <section>
        <h3 className="hidden">일반 로그인</h3>
        <LoginForm />
      </section>

      <section className="sns-wrap">
        <h3 className="sns-tit">
          <span>SNS</span> <span className="hidden">로그인</span>
        </h3>
        <div className="sns-box">
          <button type="button" className="kakao">
            <h4 className="hidden">카카오로 로그인</h4>
          </button>
          <button type="button" className="naver">
            <h4 className="hidden">네이버로 로그인</h4>
          </button>
          <button type="button" className="google">
            <h4 className="hidden">구글로 로그인</h4>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;

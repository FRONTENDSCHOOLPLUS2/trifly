import "../user.scss";
import "./login.scss";
import LoginForm from "./LoginForm";
import SnsLogin from "./SnsLogin";
import { signInWithCredentials } from "@/data/actions/authAction";

const Login = async () => {
  return (
    <div className="login">
      <h2 className="hidden">로그인</h2>
      <div className="logo">
        <img src="/img/logo-text-primary.svg" alt="trifly" />
      </div>

      <form className="form" action={signInWithCredentials}>
        <section>
          <h3 className="hidden">일반 로그인</h3>
          <LoginForm />
        </section>

        <section className="sns-wrap">
          <h3 className="sns-tit">
            <span>SNS</span> <span className="hidden">로그인</span>
          </h3>
          <SnsLogin />
        </section>
      </form>
    </div>
  );
};

export default Login;

import { signInWithCredentials } from "@/data/actions/authAction";
import Image from "next/image";
import "../user.scss";
import "./login.scss";
import LoginForm from "./LoginForm";
import SnsLogin from "./SnsLogin";

const Login = async () => {
  return (
    <div className="login">
      <h2 className="hidden">로그인</h2>
      <div className="logo">
        <div className="img-box">
          <Image
            alt="trifly"
            src="/img/logo-text-primary.svg"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
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

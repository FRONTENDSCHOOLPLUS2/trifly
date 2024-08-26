import Image from "next/image";
import "../user.scss";
import "./login.scss";
import LoginForm from "./LoginForm";

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

      <LoginForm />
    </div>
  );
};

export default Login;

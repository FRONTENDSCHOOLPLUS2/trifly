import Submit from "@/components/Submit/Submit";
import Link from "next/link";
import "../user.scss";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h2 className="hidden">로그인</h2>
      <div className="logo">
        <img src="/img/logo-text-primary.svg" alt="trifly" />
      </div>

      <section>
        <h3 className="hidden">일반 로그인</h3>
        <form className="form">
          <div className="input-box">
            <input type="text" placeholder="이메일" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="input-box">
            <div className="chk-box">
              <input type="checkbox" name="getTestUser" id="getTestUser" />
              <label htmlFor="getTestUser">테스트 계정 불러오기</label>
            </div>
            <div className="chk-box">
              <input type="checkbox" name="saveEmail" id="saveEmail" />
              <label htmlFor="saveEmail">이메일 저장</label>
            </div>
          </div>
          <div className="btn-box">
            <Submit size="full">로그인</Submit>
            <Link href={`/signup`}>회원가입</Link>
          </div>
        </form>
      </section>

      <section className="sns-wrap">
        <h3 className="sns-tit">
          <span>SNS</span> <span className="hidden">로그인</span>
        </h3>
        <div className="sns-box">
          <button type="button" className="github">
            <h4 className="hidden">깃헙으로 로그인</h4>
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

import Anchor from "@/components/Anchor/Anchor";
import Image from "next/image";

const Complete = ({ name }: { name: string }) => {
  return (
    <>
      <section className="complete">
        <h3 className="hidden">가입 완료</h3>
        <div className="img-box">
          <Image
            src="/img/icon-accordion-primary.svg"
            alt="가입 완료"
            sizes="100%"
            width={0}
            height={0}
          ></Image>
        </div>
        <div className="text-box">
          <p>
            <strong>{name}</strong>님 <span>TriFly</span> 가입을 환영합니다.
            <br />
            로그인 후 항공권 구매가 가능합니다. <br />
            원하는 좌석을 고르고 티켓을 커스텀 해보세요 !
          </p>
        </div>
        <div className="link-box">
          <Anchor href="/login">로그인 하기</Anchor>
          <Anchor href="/" bgColor="gray">
            메인으로 가기
          </Anchor>
        </div>
      </section>
    </>
  );
};

export default Complete;

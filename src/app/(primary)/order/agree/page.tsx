import { fetchCodes } from "@/data/fetch/fetchCode";
import Detail from "../Detail";
import Receipt from "../Receipt";
import AgreeForm from "./AgreeForm";

const AgreePage = async () => {
  const code = await fetchCodes();

  return (
    <div className="order-inner agree flexVer">
      <div className="left-box">
        <section>
          <h3 className="hidden">상세 여정</h3>
          <Detail code={code} />
        </section>

        <section>
          <h3 className="title">약관 동의</h3>
          <AgreeForm />
        </section>
      </div>

      <aside className="right-box receipt-box">
        <Receipt />
      </aside>
    </div>
  );
};

export default AgreePage;

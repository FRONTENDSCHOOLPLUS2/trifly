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
          <Detail type="agree" code={code} />
        </section>

        <section>
          <h3 className="title">약관 동의</h3>
          <AgreeForm />
        </section>
      </div>

      <aside className="right-box">
        <Receipt />
      </aside>
    </div>
  );
};

export default AgreePage;

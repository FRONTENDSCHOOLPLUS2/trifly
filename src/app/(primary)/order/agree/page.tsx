import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData } from "@/types";
import Detail from "../Detail";
import Receipt from "../Receipt";
import AgreeForm from "./AgreeForm";

const AgreePage = async () => {
  const { code } = await fetchCodes<AirportData>();

  return (
    <div className="order-inner agree flexVer">
      <div className="left-box">
        <section>
          <h3 className="hidden">상세 여정</h3>
          <Detail code={code} />
        </section>

        <section>
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

import { auth } from "@/auth";
import Receipt from "../Receipt";
import PaymentForm from "./PaymentForm";

const PaymentPage = async () => {
  const session = await auth();

  return (
    <div className="order-inner payment flexVer">
      <div className="left-box">
        <section>
          <PaymentForm user={session?.user} />
        </section>
      </div>

      <aside className="right-box receipt-box">
        <Receipt />
      </aside>
    </div>
  );
};

export default PaymentPage;

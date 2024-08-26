import "./order.scss";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="order">
      <h2 className="hidden">항공권 예약</h2>
      {children}
    </div>
  );
};

export default layout;

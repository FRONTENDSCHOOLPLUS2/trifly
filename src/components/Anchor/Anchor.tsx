import Link from "next/link";
import "./Anchor.scss";

const Anchor = ({ children, size = "full", bgColor = "primary", href }) => {
  return (
    <Link className={`anchor ${size} ${bgColor}`} href={href}>
      {children}
    </Link>
  );
};

export default Anchor;

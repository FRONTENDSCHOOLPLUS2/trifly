import Link from "next/link";
import "./Anchor.scss";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  size?: "xs" | "sm" | "md" | "lg" | "full";
  bgColor?: "primary" | "gray";
}

const Anchor: React.FC<AnchorProps> = ({
  children,
  size = "full",
  bgColor = "primary",
  href,
}) => {
  return (
    <Link className={`anchor ${size} ${bgColor}`} href={href}>
      {children}
    </Link>
  );
};

export default Anchor;

import "./Badge.scss";

interface BadgeProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "gray";
}

const Badge = ({ children, type = "primary" }: BadgeProps) => {
  return <span className={`badge ${type}`}>{children}</span>;
};

export default Badge;

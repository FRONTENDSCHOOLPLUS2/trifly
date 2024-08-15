import "./Badge.scss";

interface BadgeProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "gray";
  selected?: boolean;
}

const Badge = ({
  children,
  type = "primary",
  selected = false,
}: BadgeProps) => {
  return <span className={`badge ${type} ${selected}`}>{children}</span>;
};

export default Badge;

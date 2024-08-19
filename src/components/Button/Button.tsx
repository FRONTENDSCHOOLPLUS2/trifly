import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit";
  size?: "xs" | "sm" | "md" | "lg" | "full";
  bgColor?: "primary" | "primary30" | "secondary" | "gray" | "light";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  size = "sm",
  bgColor = "primary",
  ...rest
}) => {
  return (
    <button type={type} className={`button ${size} ${bgColor}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

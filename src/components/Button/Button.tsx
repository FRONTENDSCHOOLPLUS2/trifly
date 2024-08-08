import "./Button.scss";

const Button = ({
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

import React from "react";

interface ButtonProps {
  variant?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode | React.ReactNode[] | string;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, type, variant, onClick } = props;

  return (
    <button
      type={type || "button"}
      className={`button button--${variant} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

interface LogoProps {
  leftClass?: string;
  rightClass?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { leftClass, rightClass } = props;

  return (
    <p className="logo">
      <strong className={leftClass}>T</strong>
      <span className={rightClass}>ƯỜNG</span>
    </p>
  );
};

export default Logo;

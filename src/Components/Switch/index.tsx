import React from "react";

interface SwitchProps {
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { onChange } = props;

  return (
    <React.Fragment>
      <input type="checkbox" className="switch" onChange={(e) => onChange && onChange(e)} />
    </React.Fragment>
  );
};

export default Switch;

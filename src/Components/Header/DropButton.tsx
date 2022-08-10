import React from "react";

interface DropButtonProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropButton: React.FC<DropButtonProps> = (props) => {
  const { setIsOpen } = props;

  return (
    <div className="header__drop-button" onClick={() => setIsOpen(true)}>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
};

export default DropButton;

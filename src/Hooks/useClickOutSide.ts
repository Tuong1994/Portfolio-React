import React from "react";

const useClickOutSide = (ref: any, setTrigger: any) => {
  React.useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setTrigger(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  });
};

export default useClickOutSide;

import React from "react";

const useOverFlow = (trigger: boolean) => {
  React.useEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [trigger]);
};

export default useOverFlow;

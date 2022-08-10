import React from "react";
import { useDispatch } from "react-redux";
import { EMenuActionTypes } from "../redux/actionsTypes/MenuActionTypes";

const useReveal = (ref: any, setReveal?: any) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (ref.current !== null) {
        const offsetTop = ref.current.offsetTop - 200;
        const offsetHeight = ref.current.offsetHeight;
        if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
          setReveal && setReveal(true);
          dispatch({
            type: EMenuActionTypes.SET_ID,
            payload: ref.current.id,
          });
        } else {
          setReveal && setReveal(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};

export default useReveal;

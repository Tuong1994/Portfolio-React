import React from "react";
import { useDispatch } from "react-redux";
import { ELangType } from "../../Langs";
import { ELangActionTypes } from "../../redux/actionsTypes/LangActionTypes";
import * as Components from "..";

interface FeatureProps {
  lang: number;
  setIsTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Feature: React.FC<FeatureProps> = (props) => {
  const { lang, setIsTheme, setIsLoading } = props;

  const [isSwitch, setIsSwitch] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsTheme(checked);
    setIsSwitch(checked);
  };

  const handleChangeLang = (value: number) => {
    setIsLoading(true)
    setTimeout(() => {
      dispatch({
        type: ELangActionTypes.CHANGE_LANG,
        payload: value,
      });
    }, 300)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  };

  return (
    <div className="header__feature">
      <div className="feature__theme">
        <i
          className={`fa-solid fa-lightbulb theme__icon ${!isSwitch ? "theme__icon--active" : ""
            }`}
        ></i>
        <Components.Switch onChange={handleSwitch} />
        <i
          className={`fa-solid fa-moon theme__icon ${isSwitch ? "theme__icon--active" : ""
            }`}
        ></i>
      </div>

      <div className="feature__lang">
        <span
          className={`lang ${lang === ELangType.Eng ? "lang--active" : ""}`}
          onClick={() => handleChangeLang(ELangType.Eng)}
        >
          ENG
        </span>
        <span
          className={`lang ${lang === ELangType.Vn ? "lang--active" : ""}`}
          onClick={() => handleChangeLang(ELangType.Vn)}
        >
          VN
        </span>
      </div>
    </div>
  );
};

export default Feature;

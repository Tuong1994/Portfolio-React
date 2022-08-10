import React from "react";
import * as customHooks from "../../Hooks";
import * as Components from "../../Components";
import { useDispatch } from "react-redux";
import { ELangType } from "../../Langs";
import { ELangActionTypes } from "../../redux/actionsTypes/LangActionTypes";

interface HeaderMenuProps {
  menu: {
    id?: string;
    name?: string;
    icon?: string;
  }[];
  lang: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
  const { menu, lang, isOpen, setIsOpen, setIsTheme, setIsLoading } = props;

  const [isSwitch, setIsSwitch] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const menuRef = React.useRef<any>(null);

  customHooks.useClickOutSide(menuRef, setIsOpen);

  customHooks.useOverFlow(isOpen);

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsSwitch(checked);
    setIsTheme(checked);
  };

  const handleChangeLang = (value: number) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch({
        type: ELangActionTypes.CHANGE_LANG,
        payload: value,
      });
    }, 300);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className={`header__menu--rwd ${
        isOpen ? "header__menu--rwd-active" : ""
      }`}
    >
      {/* Close button */}
      <div
        className={`menu--rwd__close ${
          isOpen ? "menu--rwd__close--active" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <i className="fas fa-times"></i>
      </div>
      {/* End of close button */}

      <div
        className={`menu--rwd__wrapper ${
          isOpen ? "menu--rwd__wrapper--active" : ""
        }`}
        ref={menuRef}
      >
        {/* Menu link */}
        <div className="wrapper__link">
          {menu.map((l) => (
            <a
              href={`#${l.id}`}
              key={l.id}
              className="link__item"
              onClick={() => setIsOpen(false)}
            >
              <i className={l.icon}></i>
              <span>{l.name}</span>
            </a>
          ))}
          {/* End of menu link */}
        </div>

        {/* Menu feature */}
        <div className="wrapper__feature">
          <div className="feature__theme">
            <i
              className={`fa-solid fa-lightbulb theme__icon ${
                !isSwitch ? "theme__icon--active" : ""
              }`}
            ></i>
            <Components.Switch onChange={handleSwitch} />
            <i
              className={`fa-solid fa-moon theme__icon ${
                isSwitch ? "theme__icon--active" : ""
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
        {/* End of menu feature */}
      </div>
    </div>
  );
};

export default HeaderMenu;

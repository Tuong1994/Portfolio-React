import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMenuActionTypes } from "../../redux/actionsTypes/MenuActionTypes";
import { ReducerState } from "../../redux/store";

interface MenuProps {
  menu: {
    id?: string;
    name?: string;
  }[];
}

const Menu: React.FC<MenuProps> = (props) => {
  const { menu } = props;

  const { id } = useSelector((state: ReducerState) => state.MenuReducer);

  const dispatch = useDispatch();

  return (
    <div className="header__menu">
      {menu.map((l) => (
        <a
          href={`#${l.id}`}
          key={l.id}
          className={`menu__item ${id === l.id ? "menu__item--active" : ""}`}
          onClick={() => {
            dispatch({
              type: EMenuActionTypes.SET_ID,
              payload: l.id,
            });
          }}
        >
          {l.name}
        </a>
      ))}
    </div>
  );
};

export default Menu;

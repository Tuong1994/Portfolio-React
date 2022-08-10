import { MenuAction } from "../actions/MenuAction";
import { EMenuActionTypes } from "../actionsTypes/MenuActionTypes";

interface IStateDefault {
  id: string;
}

const stateDefault: IStateDefault = {
  id: "home",
};

export const MenuReducer = (state = stateDefault, action: MenuAction) => {
  switch (action.type) {
    case EMenuActionTypes.SET_ID: {
      let newState = { ...state };
      newState.id = action.payload;
      state = newState;
      return { ...state };
    }
    case EMenuActionTypes.REMOVE_ID: {
      let newState = { ...state };
      newState.id = "";
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

import { ELangType } from "../../Langs";
import { LangAction } from "../actions/LangAction";
import { ELangActionTypes } from "../actionsTypes/LangActionTypes";

interface IStateDefault {
  lang: number;
}

const stateDefault: IStateDefault = {
  lang: ELangType.Eng,
};

export const LangReducer = (state = stateDefault, action: LangAction) => {
  switch (action.type) {
    case ELangActionTypes.CHANGE_LANG: {
      let newState = { ...state };
      newState.lang = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

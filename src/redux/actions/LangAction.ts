import { ELangActionTypes } from "../actionsTypes/LangActionTypes";

interface CHANGE_LANG {
  type: ELangActionTypes.CHANGE_LANG;
  payload: any;
}

export type LangAction = CHANGE_LANG;

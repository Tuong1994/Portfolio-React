import { EMenuActionTypes } from "../actionsTypes/MenuActionTypes";

interface SET_ID {
  type: EMenuActionTypes.SET_ID;
  payload: any;
}

interface REMOVE_ID {
  type: EMenuActionTypes.REMOVE_ID;
}

export type MenuAction = SET_ID | REMOVE_ID;

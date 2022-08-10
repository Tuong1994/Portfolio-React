import { combineReducers, createStore } from "redux";
import { LangReducer } from "./reducer/LangReducer";
import { MenuReducer } from "./reducer/MenuReducer";

const rootReducer = combineReducers({
  LangReducer,
  MenuReducer,
});

export const store = createStore(rootReducer);

export type ReducerState = ReturnType<typeof rootReducer>;

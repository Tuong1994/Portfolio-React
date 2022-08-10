import { LangENG } from "./ENG";
import { LangVN } from "./VN";

export type ILangs = LangENG | LangVN | undefined

export enum ELangType {
    Eng = 1,
    Vn = 2,
}

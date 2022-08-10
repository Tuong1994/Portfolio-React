import { ELangType } from "../Langs";
import { langENG } from "../Langs/ENG";
import { langVN } from "../Langs/VN";

const utils = {
  changeLang: (lang: number) => {
    if (lang === ELangType.Eng) return langENG;
    else if (lang === ELangType.Vn) return langVN;
  },
};

export default utils;

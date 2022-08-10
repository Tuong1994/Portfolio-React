import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../Utils";

const Home: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const homeRef = React.useRef<any>(null);

  customHooks.useReveal(homeRef)

  const textList = [langs?.typingText.text_1, langs?.typingText.text_2];  

  return (
    <div id="home" className="home" ref={homeRef}>
      <div className="home__content">
        <h3 className="content__title">
          {langs?.home.title} <strong>TƯỜNG</strong>
        </h3>
        <Components.TypingText textList={textList as string[]} />
        <p className="content__detail">{langs?.home.content}</p>

        <a
          href="../files/Nhâm Bổn Tường - Front End Web Developer ( English ).pdf"
          download="CV - Nhâm Bổn Tường"
          className="content__download"
        >
          <span>{langs?.button.download} CV</span>
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </a>
      </div>
      <div className="home__image">
        <Components.Blob className="image__blob" />
        <img
          className="image__avatar"
          src="/images/avatar.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../Utils";

const Contact: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const contactRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHooks.useReveal(contactRef);

  return (
    <div id="contact" className="contact" ref={contactRef}>
      <h1 className="contact__title">{langs?.contact.title}</h1>
      <div className="contact__group">
        <div className="group__content">
          <p className="content__inner">
            <i className="fa-solid fa-user"></i>
            <span>Nhâm Bổn Tường</span>
          </p>
          <p className="content__inner">
            <i className="fa-solid fa-calendar"></i>
            <span>28/11/1994</span>
          </p>
          <p className="content__inner">
            <i className="fa-solid fa-phone"></i>
            <span>0793.22.99.70</span>
          </p>
          <p className="content__inner">
            <i className="fa-solid fa-envelope"></i>
            <span>nhambontuong68@gmail.com</span>
          </p>
        </div>

        <div className="group__social">
          <a
            className="social__link"
            href="https://www.facebook.com/jack.prophet.984/"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            className="social__link"
            href="https://github.com/Tuong1994"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="social__link"
            href="https://www.linkedin.com/in/nh%C3%A2m-t%C6%B0%E1%BB%9Dng-185130216/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

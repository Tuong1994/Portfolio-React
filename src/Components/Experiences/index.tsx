import React from "react";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../Utils";

const Experiences: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);

  const expRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHooks.useReveal(expRef, setReveal);

  const expList = [
    {
      id: 1,
      title: "CNV Loyalty",
      image: "/images/cnv_logo.png",
      position: langs?.experiences.position_1,
      time: `11/2021 - ${langs?.time.now}`,
    },
  ];

  return (
    <div
      id="experiences"
      className={`experiences ${reveal ? "experiences--reveal" : ""}`}
      ref={expRef}
    >
      <h1 className="experiences__title">{langs?.experiences.title}</h1>
      <div className="experiences__wrapper">
        {expList.map((e) => (
          <div className="wrapper__item" key={e.id}>
            <div className="item__image">
              <img className="image" src={e.image} alt={e.title} />
            </div>

            <div className="item__content">
              <p className="content__text">
                <strong>{langs?.experiences.company}:</strong>
                {e.title}
              </p>
              <p className="content__text">
                <strong>{langs?.experiences.position}:</strong>
                {e.position}
              </p>
              <p className="content__text">
                <strong>{langs?.experiences.time}:</strong>
                {e.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

import React from "react";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../Utils";

const Education: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);

  const eduRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHooks.useReveal(eduRef, setReveal);

  const contentList = [
    {
      id: 1,
      title: langs?.education.subTitle_1,
      content: [
        {
          id: 1,
          name: "HTML/CSS",
        },
        {
          id: 2,
          name: "Javascript/Typescript",
        },
        {
          id: 3,
          name: "ReactJs/Redux",
        },
        {
          id: 4,
          name: "Git",
        },
      ],
      trainTime: "09/2020 - 04/2021",
    },
    {
      id: 2,
      title: langs?.education.subTitle_2,
      content: [
        {
          id: 1,
          name: "MySQL",
        },
        {
          id: 2,
          name: "NodeJs/Express/Sequelize",
        },
        {
          id: 3,
          name: "Socket.IO",
        },
      ],
      trainTime: "06/2021 - 08/2021",
    },
  ];

  return (
    <div
      id="education"
      className={`education ${reveal ? "education--reveal" : ""}`}
      ref={eduRef}
    >
      <h1 className="education__title">{langs?.education.title}</h1>
      <div className="education__wrapper">
        <div className="wrapper__image">
          <img
            src="/images/cybersoft.jpg"
            alt="cybersoft"
            className="image"
          />
        </div>

        <div className="wrapper__content">
          <h2 className="content__title">{langs?.education.school}</h2>

          {contentList.map((c) => (
            <div className="content__detail" key={c.id}>
              <h4 className="detail__title">{c.title}</h4>

              <p className="detail__subTitle">{langs?.education.lessons}:</p>
              <ul className="detail__list">
                {c.content.map((i) => (
                  <li className="list__item" key={i.id}>
                    {i.name}
                  </li>
                ))}
              </ul>
              <p className="detail__date">
                {langs?.education.trainTime}: {c.trainTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

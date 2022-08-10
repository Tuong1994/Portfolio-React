import React from "react";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import utils from "../../Utils";

const Skills: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);

  const skillsRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);

  customHooks.useReveal(skillsRef, setReveal);

  const skillsList = [
    {
      id: 1,
      title: langs?.skills.subTitle_1,
      icon: "fa-solid fa-code",
      skills: [
        {
          id: 1,
          name: "HTML/HTML5",
          icon: "fa-brands fa-html5",
        },
        {
          id: 2,
          name: "CSS/CSS3",
          icon: "fab fa-css3-alt",
        },
        {
          id: 3,
          name: "Javascript/Typescript",
          icon: "fab fa-js-square",
        },
        {
          id: 4,
          name: "ReactJs/Redux",
          icon: "fab fa-react",
        },
        {
          id: 5,
          name: "Git",
          icon: "fab fa-git-square",
        },
      ],
    },
    {
      id: 2,
      title: langs?.skills.subTitle_2,
      icon: "fas fa-server",
      skills: [
        {
          id: 1,
          name: "MySQL",
          icon: "fas fa-database",
        },
        {
          id: 2,
          name: "NodeJs/Express/Sequelize",
          icon: "fab fa-node-js",
        },
        {
          id: 3,
          name: "Socket.IO",
          icon: "fab fa-rocketchat",
        },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className={`skills ${reveal ? "skills--reveal" : ""}`}
      ref={skillsRef}
    >
      <h1 className="skills__title">{langs?.skills.title}</h1>
      <div className="skills__wrapper">
        {skillsList.map((s) => (
          <div className="wrapper__group" key={s.id}>
            <div className="group__icon">
              <div className="icon">
                <i className={s.icon}></i>
              </div>
              <div className="icon__line"></div>
            </div>

            <div className="group__inner">
              <h3 className="inner__title">{s.title}</h3>
              <ul className="inner__list">
                {s.skills.map((l) => (
                  <li className="list__item" key={l.id}>
                    <i className={l.icon}></i>
                    <span>{l.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

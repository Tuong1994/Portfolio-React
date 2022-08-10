import React from "react";
import * as Components from "../../Components";
import { ILangs } from "../../Langs";

interface ProjectListProps {
  projectsList: any;
  langs: ILangs;
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { projectsList, langs } = props;

  const [isActive, setIsActive] = React.useState<number>(1);

  return (
    <div className="projects__tabs">
      <div className="tabs__title">
        <Components.Button
          className="title__item"
          variant={isActive === 1 ? "success" : ""}
          onClick={() => setIsActive(1)}
        >
          {langs?.projects.subTitle_1}
        </Components.Button>
        <Components.Button
          className="title__item"
          variant={isActive === 2 ? "success" : ""}
          onClick={() => setIsActive(2)}
        >
          {langs?.projects.subTitle_2}
        </Components.Button>
      </div>

      <div className="tabs__content">
        <div
          className={`content__group ${
            isActive === 1 ? "content__group--active" : ""
          }`}
        >
          {projectsList
            .filter((p: any) => p.type === "company")
            .map((p: any) => (
              <div className="group__inner" key={p.id}>
                {p.projects.map((i: any) => (
                  <div className="inner__item" key={i.id}>
                    <div className="item__image">
                      <img
                        className="image"
                        src={i.image}
                        alt={i.content.name}
                      />
                      <div className="image__backdrop">
                        <a
                          className="backdrop__link"
                          href={i.link}
                          target="_blank"
                        >
                          {langs?.button.detail}
                        </a>
                      </div>
                    </div>

                    <div className="item__content">
                      <p className="content__text">
                        <strong>{langs?.projects.name}:</strong>{" "}
                        {i.content.name}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.description}:</strong>{" "}
                        {i.content.desc}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.teamSize}:</strong>{" "}
                        {i.content.teamSize}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.position}:</strong>{" "}
                        {i.content.position}
                      </p>
                      <ul className="content__list">
                        <p>
                          <strong>{langs?.projects.task}:</strong>
                        </p>
                        {i.content.task.map((t: any) => (
                          <li className="list__item" key={t.id}>
                            {t.name}
                          </li>
                        ))}
                      </ul>
                      <p className="content__text">
                        <strong>{langs?.projects.tech}:</strong>{" "}
                        {i.content.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div
          className={`content__group ${
            isActive === 2 ? "content__group--active" : ""
          }`}
        >
          {projectsList
            .filter((p: any) => p.type === "private")
            .map((p: any) => (
              <div className="group__inner" key={p.id}>
                {p.projects.map((i: any) => (
                  <div className="inner__item" key={i.id}>
                    <div className="item__image">
                      <img
                        className="image"
                        src={i.image}
                        alt={i.content.name}
                      />
                      <div className="image__backdrop">
                        <a
                          className="backdrop__link"
                          href={i.link}
                          target="_blank"
                        >
                          {langs?.button.detail}
                        </a>
                      </div>
                    </div>

                    <div className="item__content">
                      <p className="content__text">
                        <strong>{langs?.projects.name}:</strong>{" "}
                        {i.content.name}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.description}:</strong>{" "}
                        {i.content.desc}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.teamSize}:</strong>{" "}
                        {i.content.teamSize}
                      </p>
                      <p className="content__text">
                        <strong>{langs?.projects.position}:</strong>{" "}
                        {i.content.position}
                      </p>
                      <ul className="content__list">
                        <p>
                          <strong>{langs?.projects.task}:</strong>
                        </p>
                        {i.content.task.map((t: any) => (
                          <li className="list__item" key={t.id}>
                            {t.name}
                          </li>
                        ))}
                      </ul>
                      <p className="content__text">
                        <strong>{langs?.projects.tech}:</strong>{" "}
                        {i.content.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

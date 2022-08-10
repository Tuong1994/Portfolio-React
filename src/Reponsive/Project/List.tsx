import React from "react";
import { ILangs } from "../../Langs";
import Item from "./Item";

interface ProjectListProps {
  langs: ILangs;
  projectsList: any;
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { langs, projectsList } = props;

  return (
    <div className="project__list--rwd">
      {projectsList.map((p: any) => (
        <div className="list--rwd__wrapper" key={p.id}>
          <h4 className="wrapper__title">{p.title}</h4>

          {p.projects.map((l: any) => (
            <Item key={l.id} l={l} langs={langs} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

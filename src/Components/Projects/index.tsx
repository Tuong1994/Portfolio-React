import React from "react";
import * as Responsive from "../../Reponsive";
import * as customHooks from "../../Hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import ProjectList from "./List";
import utils from "../../Utils";

const Projects: React.FC<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [reveal, setReveal] = React.useState<boolean>(false);

  const projRef = React.useRef<any>(null);

  customHooks.useReveal(projRef, setReveal);

  const langs = utils.changeLang(lang);

  const projectsList = [
    {
      id: 1,
      title: langs?.projects.subTitle_1,
      type: "company",
      projects: [
        {
          id: 1,
          image: "/images/cnv.png",
          link: "https://app.cnvloyalty.com/",
          content: {
            name: langs?.projects.company.projects_1.name,
            desc: langs?.projects.company.projects_1.desc,
            teamSize: 10,
            position: langs?.projects.company.projects_1.position,
            task: [
              {
                id: 1,
                name: langs?.projects.company.projects_1.task.list_1,
              },
              {
                id: 2,
                name: langs?.projects.company.projects_1.task.list_2,
              },
              {
                id: 3,
                name: langs?.projects.company.projects_1.task.list_3,
              },
              {
                id: 4,
                name: langs?.projects.company.projects_1.task.list_4,
              },
              {
                id: 5,
                name: langs?.projects.company.projects_1.task.list_5,
              },
              {
                id: 6,
                name: langs?.projects.company.projects_1.task.list_6,
              },
            ],
            tech: "ReactJs, Typescript, .Net",
          },
        },
      ],
    },
    {
      id: 2,
      title: langs?.projects.subTitle_2,
      type: "private",
      projects: [
        {
          id: 1,
          image: "/images/tix.png",
          link: "https://tix-bookingticket.surge.sh/",
          content: {
            name: langs?.projects.private.projects_1.name,
            desc: langs?.projects.private.projects_1.desc,
            teamSize: 1,
            position: langs?.projects.private.projects_1.position,
            task: [
              {
                id: 1,
                name: langs?.projects.private.projects_1.task.list_1,
              },
              {
                id: 2,
                name: langs?.projects.private.projects_1.task.list_2,
              },
              {
                id: 3,
                name: langs?.projects.private.projects_1.task.list_3,
              },
              {
                id: 4,
                name: langs?.projects.private.projects_1.task.list_4,
              },
              {
                id: 5,
                name: langs?.projects.private.projects_1.task.list_5,
              },
              {
                id: 6,
                name: langs?.projects.private.projects_1.task.list_6,
              },
            ],
            tech: "ReactJs, Redux, React Hooks, Bootstrap 4, Axios, SASS, Github",
          },
        },
        {
          id: 2,
          image: "/images/cyberlearn.png",
          link: "/",
          content: {
            name: langs?.projects.private.projects_2.name,
            desc: langs?.projects.private.projects_2.desc,
            teamSize: 1,
            position: langs?.projects.private.projects_2.position,
            task: [
              {
                id: 1,
                name: langs?.projects.private.projects_2.task.list_1,
              },
              {
                id: 2,
                name: langs?.projects.private.projects_2.task.list_2,
              },
              {
                id: 3,
                name: langs?.projects.private.projects_2.task.list_3,
              },
              {
                id: 4,
                name: langs?.projects.private.projects_2.task.list_4,
              },
              {
                id: 5,
                name: langs?.projects.private.projects_2.task.list_5,
              },
              {
                id: 6,
                name: langs?.projects.private.projects_2.task.list_6,
              },
              {
                id: 7,
                name: langs?.projects.private.projects_2.task.list_7,
              },
              {
                id: 8,
                name: langs?.projects.private.projects_2.task.list_8,
              },
            ],
            tech: "ReactJs, Redux, React Hooks, Bootstrap 4, Axios, SASS, Github, NodeJs, ExpressJs, Sequelize, MySQL",
          },
        },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className={`projects ${reveal ? "projects--reveal" : ""}`}
      ref={projRef}
    >
      <h1 className="projects__title">{langs?.projects.title}</h1>
      <ProjectList langs={langs} projectsList={projectsList} />
      <Responsive.ProjectList langs={langs} projectsList={projectsList} />
    </div>
  );
};

export default Projects;

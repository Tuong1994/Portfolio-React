import React from "react";
import * as Components from "..";
import * as Responsive from "../../Reponsive";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Menu from "./Menu";
import Feature from "./Feature";
import DropButton from "./DropButton";
import utils from "../../Utils";

interface HeaderProps {
  setIsTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { setIsTheme, setIsLoading } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const langs = utils.changeLang(lang);

  const menu = [
    {
      id: "home",
      name: langs?.header.menu.home,
      icon: "fa-solid fa-house",
    },
    {
      id: "education",
      name: langs?.header.menu.education,
      icon: "fa-solid fa-graduation-cap",
    },
    {
      id: "skills",
      name: langs?.header.menu.skills,
      icon: "fa-solid fa-book-open",
    },
    {
      id: "projects",
      name: langs?.header.menu.projects,
      icon: "fa-solid fa-diagram-project",
    },
    {
      id: "experiences",
      name: langs?.header.menu.experiences,
      icon: "fa-solid fa-pen",
    },
    {
      id: "contact",
      name: langs?.header.menu.contact,
      icon: "fa-solid fa-phone",
    },
  ];

  return (
    <div className="header">
      <Components.Logo />
      <Menu menu={menu} />
      <Feature
        lang={lang}
        setIsTheme={setIsTheme}
        setIsLoading={setIsLoading}
      />

      <DropButton setIsOpen={setIsOpen} />

      <Responsive.HeaderMenu
        menu={menu}
        lang={lang}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsTheme={setIsTheme}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default Header;

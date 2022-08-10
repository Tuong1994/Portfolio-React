import React from "react";
import { ILangs } from "../../Langs";

interface ItemProps {
  l: any;
  langs: ILangs;
}

const Item: React.FC<ItemProps> = (props) => {
  const { l, langs } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="wrapper__item">
      <div className="item__image">
        <img className="image" src={l.image} alt={l.content.name} />
        <div className="image__action">
          <a href={l.link} className="action__link">
            {langs?.button.detail}
          </a>
          <span
            className="action__view"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span>{langs?.button.view}</span>
            <i
              className={`fas fa-angle-down ${isOpen ? "icon--rotate" : ""}`}
            ></i>
          </span>
        </div>
      </div>

      <div className={`item__content ${isOpen ? "item__content--active" : ""}`}>
        <p className="content__text">
          <strong>{langs?.projects.name}:</strong> {l.content.name}
        </p>
        <p className="content__text">
          <strong>{langs?.projects.description}:</strong> {l.content.desc}
        </p>
        <p className="content__text">
          <strong>{langs?.projects.teamSize}:</strong> {l.content.teamSize}
        </p>
        <p className="content__text">
          <strong>{langs?.projects.position}:</strong> {l.content.position}
        </p>
        <ul className="content__list">
          <p className="list__title">
            <strong>{langs?.projects.task}:</strong>
          </p>
          {l.content.task.map((t: any) => (
            <li className="list__item" key={t.id}>
              {t.name}
            </li>
          ))}
        </ul>
        <p className="content__text">
          <strong>{langs?.projects.tech}:</strong> {l.content.tech}
        </p>
      </div>
    </div>
  );
};

export default Item;

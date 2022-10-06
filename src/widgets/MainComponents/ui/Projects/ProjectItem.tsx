import { classNames } from "shared/lib/classNames/classNames";
import Vector from "shared/assets/project/Vector.svg"
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
import cls from "./Projects.module.scss";


export interface ProjectItemProps {
  title: string;
  subTitle: string;
  img: string;
  link: string;
  id: number;
  open?: number;
}

export const ProjectItem = (props: ProjectItemProps) => {
  const { width } = useWindowSize("resize")
  const { title, subTitle, img, link, id, open } = props;
  return (
    <>
      <span
        className={classNames(
          cls.ProjectsGroupTitle,
          {
            [cls.displayTitle]: (open === id || width < 650)
          })}
      >
        {title}
      </span>
      {(open === id || width < 650) &&
        <div className={classNames(cls.ProjectsGroup_items)}>
          <div className={classNames(cls.ProjectsGroup_block1)}>
            <img loading="lazy" className={classNames(cls.ProjectsGroup_img)} src={img} alt="project" />
            <span className={classNames(cls.ProjectsGroup_title)}
            >
              {title}
            </span>
            <span className={classNames(cls.ProjectsGroup_subTitle)}>
              {subTitle}
            </span>
          </div>
          <div className={classNames(cls.ProjectsGroup_links)}>
            <p className={classNames(cls.ProjectsGroup_link)}>{link}</p>
            <Vector />
          </div>
        </div>
      }
    </>
  )
};
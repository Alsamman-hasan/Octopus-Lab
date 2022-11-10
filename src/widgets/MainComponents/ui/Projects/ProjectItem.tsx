import { classNames } from "shared/lib/classNames/classNames";
import Vector from "shared/assets/project/Vector.svg";
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
import { memo, useCallback, useMemo, useState } from "react";
import cls from "./Projects.module.scss";
import { projectItems } from "./helpers";

export interface ProjectItemProps {
  title: string;
  subTitle: string;
  img: string;
  link: string;
  id: number;
  open?: number;
}

const ProjectItemUI = () => {
  const { width } = useWindowSize("resize");
  const [open, setOpen] = useState(1);
  const items = useMemo(() => projectItems, []);
  const onOpen = useCallback((item: number) => {
    setOpen(item);
  }, []);

  return (
    <>
      {items.map((item) => (
        <div
          className={classNames(cls.ProjectsGroup)}
          onClick={() => onOpen(item.id)}
          key={item.id}
        >
          <span
            className={classNames(cls.ProjectsGroupTitle, {
              [cls.displayTitle]: Boolean(open === item.id || width < 769),
            })}
          >
            {item.title}
          </span>
          {(open === item.id || width < 769) && (
            <div className={classNames(cls.ProjectsGroup_items)}>
              <div className={classNames(cls.ProjectsGroup_block1)}>
                <img
                  loading="lazy"
                  className={classNames(cls.ProjectsGroup_img)}
                  src={item.img}
                  alt="project"
                />
                <span className={classNames(cls.ProjectsGroup_title)}>{item.title}</span>
                <span className={classNames(cls.ProjectsGroup_subTitle)}>{item.subTitle}</span>
              </div>
              <div className={classNames(cls.ProjectsGroup_links)}>
                <p className={classNames(cls.ProjectsGroup_link)}>{item.link}</p>
                <Vector />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export const ProjectItem = memo(ProjectItemUI);

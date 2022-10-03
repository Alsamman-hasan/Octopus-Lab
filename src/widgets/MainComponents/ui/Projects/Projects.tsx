import { classNames } from "shared/lib/classNames/classNames";
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import cls from "./Projects.module.scss";
import { projectItems } from "./helpers";
import { ProjectItem } from "./ProjectItem";

export interface ProjectsProps {
  className?: string;
}
export const Projects = ({ className }: ProjectsProps) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(1);
  const onOpen = (item: number) => {
    setOpen(item)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={yAnimation}
      viewport={{ amount: 0.2, once: true }}
      custom={2}
      className={classNames(cls.Projects, {}, [className])}
    >
      <motion.h1
        variants={yAnimation}
        custom={2}
        className={classNames(cls.ProjectsTitle)}
      >
        {t("наши")} {" "}
        <span>
          {t("проекты")}
        </span>
      </motion.h1>
      <div className={classNames(cls.ProjectsGroups)}>
        {projectItems.map((item) => (
          <div
            className={classNames(cls.ProjectsGroup)}
            onClick={() => onOpen(item.id)}
            key={item.id}
          >
            <ProjectItem
              id={item.id}
              img={item.img}
              link={item.link}
              subTitle={item.subTitle}
              title={item.title}
              open={open}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
};
import { classNames } from "shared/lib/classNames/classNames";
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import { useTranslation } from "react-i18next"
import { memo} from "react";
import cls from "./Projects.module.scss";
import { ProjectItem } from "./ProjectItem";

export interface ProjectsProps {
  className?: string;
}

const ProjectsUi = ({ className }: ProjectsProps) => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      data-testid="Projects"
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
        <ProjectItem/>
      </div>
    </motion.div>
  )
};

export const Projects = memo(ProjectsUi); 
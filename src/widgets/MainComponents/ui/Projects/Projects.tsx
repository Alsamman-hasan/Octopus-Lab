import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./Projects.module.scss";
import { ProjectItem } from "./ProjectItem";

export interface ProjectsProps {
  className?: string;
}

const ProjectsUi = ({ className }: ProjectsProps) => {
  const { t } = useTranslation("common");
  return (
    <div
      data-testid="Projects"
      className={classNames(cls.Projects, {}, [className])}
    >
      <h1 className={classNames(cls.ProjectsTitle)}>
        {t("наши")} <span>{t("проекты")}</span>
      </h1>
      <div className={classNames(cls.ProjectsGroups)}>
        <ProjectItem />
      </div>
    </div>
  );
};

export const Projects = memo(ProjectsUi);

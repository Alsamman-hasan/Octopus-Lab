import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import cls from "./Projects.module.scss";

export interface ProjectsProps {
  className?: string;
}
export const Projects = ({ className }: ProjectsProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Projects, {}, [className])}>
      <div />
    </div>
  )
};
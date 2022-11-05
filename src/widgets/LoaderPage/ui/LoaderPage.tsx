import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
// import Loader from "shared/assets/Loader.svg";
import cls from "./LoaderPage.module.scss";

export interface LoaderPageProps {
  className?: string;
}
export const LoaderPage = ({ className }: LoaderPageProps) => (
  <div className={classNames(cls.LoaderPage, {}, [className])}>
    <Loader />
  </div>
);

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./loader.module.scss";

export interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
  // <div className={classNames("Loader", {}, [className])}>
  //   <div className="lds-ellipsis"><div /><div /><div /><div /></div>
  // </div>
  <div className={cls.spinnerBox}>
    <div className={cls.solarSystem}>
      <div className={classNames(cls.earthOrbit, {}, [cls.orbit])}>
        <div className={classNames(cls.planet, {}, [cls.earth])} />
        <div className={classNames(cls.venusOrbit, {}, [cls.orbit])}>
          <div className={classNames(cls.planet, {}, [cls.venus])} />
          <div className={classNames(cls.mercuryOrbit, {}, [cls.orbit])}>
            <div className={classNames(cls.planet)} />
            <div className={cls.sun} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
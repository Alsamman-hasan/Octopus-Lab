import { forwardRef, LegacyRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useAnimations } from "shared/lib/Hooks/AnimationScrolling/useAnimationScroll";
import FooterLeft from "./components/left/FooterLeft";
import FooterRight from "./components/right/FooterRight";
import cls from "./Footer.module.scss";

export interface FooterProps {
  className?: string;
}

export const Footer = forwardRef(({ className }: FooterProps, ref: LegacyRef<HTMLDivElement>) => {
  const { t } = useTranslation();
  const { isShow, blockRef } = useAnimations();
  const mods: Record<string, boolean> = {
    "element-show": isShow,
    "element-animation": true,
  };
  return (
    <footer
      data-testid="footer"
      className={classNames(cls.footerWrapper, {}, [className])}
      id="Footer"
      ref={ref}
    >
      <div ref={blockRef} className={classNames(cls.content, mods)}>
        <FooterLeft />
        <FooterRight />
      </div>
      <div className={classNames(cls.footer)}>
        <span>2022</span>
        <span>{t("Copyright © Octopus Lab")}</span>
        <span>{t("User Agreement")}</span>
      </div>
    </footer>
  );
});

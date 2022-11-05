import "./styles/index.scss";
import { Suspense, useCallback, useEffect, useState, useRef } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { classNames } from "shared/lib/classNames/classNames";
import { ToastContainers } from "entities/ToastUi";
import UpIcon from "shared/assets/icons/svg/UpIcon.svg";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
}

const App = () => {
  const { theme } = useTheme();
  const [isScrolling, setIsScrolling] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const onScrollToFooter = useCallback((param: string) => {
    if (param === "footer") {
      if (footerRef.current)
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (param === "App") {
      if (appRef.current) appRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleSize = useCallback(
    () => setIsScrolling(Boolean(window.pageYOffset > 350)),
    [],
  );
  useEffect(() => {
    window.addEventListener("scroll", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  }, [handleSize]);

  return (
    <div ref={appRef} className={classNames("app", {}, [theme])}>
      <ToastContainers />
      <Suspense fallback={<LoaderPage />}>
        <Header onScrollToFooter={onScrollToFooter} />
        <AppRouter />
        <Footer ref={footerRef} />
      </Suspense>
      <div className={classNames("iconUp", { visibale: !isScrolling }, [])}>
        <UpIcon onClick={() => onScrollToFooter("App")} className="icon" />
      </div>
    </div>
  );
};

export default App;

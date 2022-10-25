import "./styles/index.scss";
import { Suspense, useCallback, useRef } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme"
}

injectStyle()
const App = () => {
  const { theme } = useTheme();
  const footerRef = useRef<HTMLDivElement>(null)
  const onScrollToFooter = useCallback(() => {
    if (footerRef.current) footerRef.current.scrollIntoView({ behavior: "smooth" })
  },[])
  return (
    <div className={classNames("app", {}, [theme])}>
      <ToastContainer />
      <Suspense fallback={<LoaderPage />}>
        <Header onScrollToFooter={onScrollToFooter}/>
        <AppRouter />
        <Footer ref={footerRef} />
      </Suspense>
    </div>
  )
};


export default App;
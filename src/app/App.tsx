import "./styles/index.scss";
import { Suspense, useCallback, useRef } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { AppRouter } from "./providers/router";

injectStyle()
const App = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const onScrollToFooter = useCallback(() => {
    if (footerRef.current) footerRef.current.scrollIntoView({ behavior: "smooth" })
  },[])
  return (
    <div className="app">
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
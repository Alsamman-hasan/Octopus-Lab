import "./styles/index.scss";
import { Suspense, useRef } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { AppRouter } from "./providers/router";

const App = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const onScrollToFooter = () => {
    if (footerRef.current) footerRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="app">
      <Suspense fallback={<LoaderPage />}>
        <Header onScrollToFooter={onScrollToFooter}/>
        <AppRouter />
        <Footer ref={footerRef} />
      </Suspense>
    </div>
  )
};


export default App;
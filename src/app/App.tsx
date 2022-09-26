import "./styles/index.scss";
import { Suspense, useEffect } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { AppRouter } from "./providers/router";

const App = () => {
  useEffect(() => {
    // throw new Error();
  }, [])

  return (
    <div className="app">
      <Suspense fallback={<LoaderPage />}>
        <Header />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  )
}


export default App;
import "./styles/index.scss";
import { Suspense } from "react";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { LoaderPage } from "widgets/LoaderPage";
import { AppRouter } from "./providers/router";

const App = () => (
  <div className="app">
    <Suspense fallback={<LoaderPage/>}>
      <Header />
      <AppRouter />
      <Footer />
    </Suspense>

  </div>
)

export default App;
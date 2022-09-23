import { AboutPage } from "pages/aboutPage"
import { MainPage } from "pages/mainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN= "main",
  ABOUT ="about",
  NOTFOUND = "not_found"
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage/>
  } ,
  [AppRoutes.ABOUT] : {
    path: RoutesPaths.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutesPaths.not_found,
    element: <NotFoundPage />
  }
}
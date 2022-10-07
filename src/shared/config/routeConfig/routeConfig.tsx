import { AboutPage } from "pages/aboutPage"
import { MainPage } from "pages/mainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAINEN = "mainEn",
  MAINRU = "mainRu",
  ABOUT ="about",
  NOTFOUND = "not_found"
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAINEN]: "/en",
  [AppRoutes.MAINRU]: "/ru",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAINEN]: {
    path: RoutesPaths.mainEn,
    element: <MainPage/>
  } ,
  [AppRoutes.MAINRU]: {
    path: RoutesPaths.mainRu,
    element: <MainPage />
  },
  [AppRoutes.ABOUT] : {
    path: RoutesPaths.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutesPaths.not_found,
    element: <NotFoundPage />
  }
}
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { LoaderPage } from "widgets/LoaderPage"

export const AppRouter = () => (
  <div>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<LoaderPage />}>
              {element}
            </Suspense>
          )} />
      ))}
    </Routes>
  </div>
)

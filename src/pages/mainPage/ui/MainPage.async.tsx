import { lazy } from "react";

// export const MainPageAsync = lazy(() => new Promise(resolve => {
//   // @ts-ignore
//   setTimeout(() => resolve(import("./MainPage") ) , 6000);
// }));

export const MainPageAsync = lazy(() => import("./MainPage"));

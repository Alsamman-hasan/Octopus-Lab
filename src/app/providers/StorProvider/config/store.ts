import { configureStore } from "@reduxjs/toolkit"
import { counterReduser } from "entities/Counter"
import { StateSchema } from "./StateSchema"


export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReduser
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
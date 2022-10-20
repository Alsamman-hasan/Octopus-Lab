import { AnyAction } from "redux"
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { counterReduser } from "entities/Counter";
import { StateSchema } from "./StateSchema";
import saga from "./sagasSchema";
import { createReducerManager } from "./reducerManager";


export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReduser,
  }
  const sagaMiddleware = createSagaMiddleware();
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema, AnyAction, [SagaMiddleware]>({
    reducer: reducerManager.reduce,
    middleware: [sagaMiddleware],
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
  // @ts-ignore
  store.reducerManager = reducerManager;
  sagaMiddleware.run(saga);
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
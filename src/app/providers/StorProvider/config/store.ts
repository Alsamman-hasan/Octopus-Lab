import { AnyAction } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { senderReduser } from "features/SenderEmails";
import { uiReduser } from "entities/ToastUi";
import { counterReduser } from "entities/Counter";
import { StateSchema } from "./StateSchema";
import saga from "./sagasSchema";



export function createReduxStore(initialState?: StateSchema) {
  const sagaMiddleware = createSagaMiddleware();
  const configStore = configureStore<StateSchema, AnyAction, [SagaMiddleware]>({
    reducer: {
      counter: counterReduser,
      mailes: senderReduser,
      toastUi: uiReduser,
    },
    middleware: [sagaMiddleware],
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
  sagaMiddleware.run(saga);
  return configStore;
}

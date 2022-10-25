
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entities/Counter";
import { ToastUiSchema } from "entities/ToastUi";
import { SenderSchema } from "features/SenderEmails";
import { Path } from "history";
import { NavigateOptions } from "react-router";

export interface StateSchema {
  counter: CounterSchema;
  mailes?: SenderSchema
  toastUi?: ToastUiSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: string | Partial<Path>, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
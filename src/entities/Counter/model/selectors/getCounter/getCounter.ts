import { StateSchema } from "app/providers/StorProvider";


export const getCounter = (state: StateSchema) => state.counter;
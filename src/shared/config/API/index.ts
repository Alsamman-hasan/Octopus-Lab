import axios, { AxiosPromise } from "axios";

const baseURL = "https://octopus-lab-server.herokuapp.com/";

const app = axios.create({
  baseURL,
});

export const post = <T>(url: string, data = {}): AxiosPromise<T> =>
  app({
    baseURL,
    url,
    method: "post",
    data,
  });


export default app;

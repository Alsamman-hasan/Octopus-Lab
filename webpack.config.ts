import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpack.config";
import { BuildEnv, BuildPaths } from "./config/build/types/config";




export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    icon: path.resolve(__dirname, "public", "OctopusLogo.svg"),
    redirect: path.resolve(__dirname, "public", "_redirects"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", "locales")
  }

  const mode =  env.mode || "development";
  const isDev = mode === "development";
  // const apiUrl = env.apiUrl || "https://octopus-lab-server.herokuapp.com/";
  const apiUrl = env.apiUrl || "http://localhost:5000/";
  const PORT = env.port ||  3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  })

  return config;
}


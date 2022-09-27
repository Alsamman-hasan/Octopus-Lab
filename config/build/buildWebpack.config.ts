import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevserver";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolve";
import { IBuildOptioins } from "./types/config";

export function buildWebpackConfig(options: IBuildOptioins) : Configuration {
  const { mode, paths, isDev} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? "inline-source-map": undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolves(options),
    plugins: buildPlugins(options),
  }
}
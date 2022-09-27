import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance }  from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { IBuildOptioins } from "./types/config";


export function buildPlugins(options: IBuildOptioins): WebpackPluginInstance[]{
  const {paths, isDev} = options;
  const reactPlugins = isDev && [
    new webpack.HotModuleReplacementPlugin(), 
    new ReactRefreshWebpackPlugin()
  ]
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
    }),
    // ...reactPlugins
  ]
}
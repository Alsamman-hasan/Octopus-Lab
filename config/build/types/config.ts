export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  icon: string;
}

export interface IBuildOptioins {
  mode: BuildMode;
  paths: BuildPaths;
  isDev : boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
import React, { FC, useEffect, useMemo, useState } from "react";
import { useThemeDetector } from "shared/lib/Hooks/useThemeDetector/useThemeDetector";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

// const defayltTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme,
  children: any;
}

const ThemeProvider:FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const isDarkTheme = useThemeDetector();
  const defayltTheme = isDarkTheme ? Theme.DARK : localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

  const [theme, setTheme] = useState<Theme>(initialTheme || defayltTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme,])

  useEffect(() => {
    setTheme(isDarkTheme ? Theme.DARK : localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT)
  },[isDarkTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
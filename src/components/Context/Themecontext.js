// export const ThemeProvider = React.createContext();

import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  let darkTheme = useContext(ThemeContext);
  // return !darkTheme ? "bg-sky-200" : "bg-slate-400";
  return darkTheme
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export default ThemeProvider;

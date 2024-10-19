import React, { useCallback, useEffect } from "react";
import { useTheme, useThemeUpdate } from "./Themecontext";
import { Button } from "@mui/material";

const FunctionalContextComponent = () => {
  const darkTheme = useTheme();
  let toggleTheme = useThemeUpdate();

  function themeStyles(dark) {
    return {
      backgroundColor: dark ? "black" : "blue",
      color: dark ? "white" : "black",
      padding: "20px",
      margin: "20px",
    };
    // return `${dark ? "bg-slate-400" : "bg-sky-200"}`;
  }
  // useEffect(() => {
  //   themeStyles(darkTheme);
  // }, [darkTheme]);
  return (
    <>
      <Button
        variant="contained"
        color="info"
        onClick={() => toggleTheme()}
        className={`w-auto rounded-md p-4 h-auto ${
          darkTheme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Change Theme
      </Button>
      <p style={themeStyles(darkTheme)}>Function Theme</p>
    </>
  );
};

export default FunctionalContextComponent;

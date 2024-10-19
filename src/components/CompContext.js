import React from "react";
import ClassContextComponent from "./Context/ClassContextComponent";
import FunctionalContextComponent from "./Context/FunctionalContextComponent";
import ThemeProvider from "./Context/Themecontext";

const CompContext = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionalContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
    </>
  );
};

export default CompContext;

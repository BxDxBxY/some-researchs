import React, { useContext, useEffect, useState } from "react";
import ThemeProvider, { useTheme, useThemeUpdate } from "./Context/Themecontext.js";

function СompEffect() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let darkTheme = useTheme();
  let themeUpdate = useThemeUpdate();
  console.log(darkTheme);
  console.log(themeUpdate);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider>
      <div  className={`container mx-auto rounded-md p-4 h-auto ${
          !darkTheme ? "bg-sky-200" : "bg-slate-400"
        }`}>
        <h1 className=" text-4xl text-[#003566]">The width of the screen is {windowWidth}px</h1>
      </div>
    </ThemeProvider>
  );
}

export default СompEffect;

// let [resourseType, setResourseType] = useState("posts");
// let [items, setItems] = useState([]);
// const API = `https://jsonplaceholder.typicode.com/${resourseType}`;
// useEffect(() => {
//   fetch(API)
//     .then((res) => res.json())
//     .then((res) => setItems(res));
// }, [API, resourseType]);

// <h1>{resourseType}</h1>
// <button onClick={() => setResourseType("posts")}>Posts</button>
// <button onClick={() => setResourseType("users")}>Users</button>
// <button onClick={() => setResourseType("comments")}>Comments</button>
// {items.map((item) => (
//   <pre>{JSON.stringify(item)}</pre>
// ))}

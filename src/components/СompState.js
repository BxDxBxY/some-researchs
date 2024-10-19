import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./Redux/themeSlice";

function СompState() {
  // let [resCounter, setResCounter] = useState(() => 0);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  let [resCounter, setResCounter] = useState({ count: 4, theme: "blue" });

  const handleMinus = (e) => {
    setResCounter((prev) => {
      return { ...prev, count: prev.count - 1 };
    });
  };
  const handlePlus = (e) => {
    setResCounter((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 10 }}>
      <Grid item xs={3}>
        <Button variant="contained" onClick={handleMinus}>
          -
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleToggle} variant="contained">
          {darkTheme ? "Dark " : "Light "}{" "}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <p>{resCounter?.count}</p>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={handlePlus}>
          +
        </Button>
      </Grid>
    </Grid>
  );
}

export default СompState;

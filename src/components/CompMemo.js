import { Box, Button, TextField } from "@mui/material";
import React, { useState, useMemo } from "react";
import styled from "styled-components";

function CompMemo() {
  let [number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);
  let doubleNumber = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }, [number]);
  let themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      fontSize: "30px",
      width: "50%",
    };
  }, [dark]);

  const InfoParagraph = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  return (
    <div className="">
      <Box
        flex={true}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          m: "10px",
        }}
      >
        <TextField
          label="Number"
          type="number"
          InputProps={{
            sx: {
              color: "white",
              fontSize: "20px",
            },
          }}
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <Button variant="contained" onClick={() => setDark((prev) => !prev)}>
          Change Theme
        </Button>
      </Box>
      <InfoParagraph style={themeStyle}>{doubleNumber}</InfoParagraph>
    </div>
  );
}
function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default CompMemo;

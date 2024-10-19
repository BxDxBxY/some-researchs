import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const CompRef = () => {
  let [name, setName] = useState("Anton");
  let inpRef = useRef("");
  //   let renderCount = useRef(1);
  //   useEffect(()=>{
  //     renderCount.current +=1
  //   })
  useEffect(() => {
    inpRef.current = name;
  }, [name]);
  return (
    <>
      <TextField
        variant="filled"
        inputProps={{ color: "white" }}
        InputProps={{ sx: { color: 'white' } }}
        ref={inpRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <h1 className="text-4xl text-white ">
        My name is {name} and it was {inpRef.current}
      </h1>
      {/* <button onClick={focusInp()}>Focus</button> */}
      {/* <div>I rendered {renderCount.current} times</div> */}
    </>
  );
};

export default CompRef;

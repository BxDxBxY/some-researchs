import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Todo from "./Reducers/Todo";
import REDUCER, { ACTIONS } from "./Reducers/REDUCER";
import { Box, Grid, TextField } from "@mui/material";

const CompReducer = () => {
  const { todos, dispatch } = REDUCER();
  const [name, setName] = useState("");
  const handleNameChange = useCallback((e) => {
    setName(e?.target?.value);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e.target.textwrap.value);
      if (name !== "") {
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName("");
      } else {
        alert("Please enter a name");
        return;
      }
    },
    [name, dispatch]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          // className=" w-20 h-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          InputProps={{ sx: { color: "white", fontSize: "15px" } }}
          variant="outlined"
          placeholder="Please enter name"
          type="text"
          value={name}
          name='textwrap'
          onChange={handleNameChange}
        />
      </form>
      <Box
        sx={{ flexGrow: 1 }}
        // sx={{ border: "2px solid grey" }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {todos.map((todo) => (
            <Todo key={todo?.id} todo={todo} dispatch={dispatch} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CompReducer;

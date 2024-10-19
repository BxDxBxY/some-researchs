import React, { useCallback, useMemo } from "react";
import { ACTIONS } from "./REDUCER";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Todo = React.memo(({ todo, dispatch }) => {
  const handleDelete = useCallback(() => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { name: todo.name } });
  }, []);
  const handleToggle = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { name: todo.name } });
  }, []);
  const randLorem = useMemo(() => Math.floor(Math.random() * 50), []);
  const randImg = useMemo(
    () =>
      `https://picsum.photos/${Math.floor(Math.random() * 1000)}/${Math.floor(
        Math.random() * 1000
      )}`,
    []
  );
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={randImg} title="img" />
        <CardContent>
          <Typography
            className={`${
              todo?.complete ? "bg-emerald-600" : " bg-pink-700"
            } text-white p-2 rounded-md`}
            gutterBottom
            variant="h5"
            component="div"
          >
            {todo?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem{randLorem}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="success"
            onClick={handleToggle}
          >
            Toggle
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});

export default Todo;

{
  /* <p
  
>

</p>
<button
  className="bg-slate-600 p-2 rounded-md"
  >
  toggle
  </button>
  <button
  className="bg-red-600 p-2 rounded-md"
  >
  // <li className="flex gap-[20px] rounded-md m-4 bg-indigo-500 p-3">
  delete */
}
// </button>
// </li>

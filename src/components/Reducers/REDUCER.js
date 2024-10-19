import { useReducer } from "react";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return addTodoIfNotExists(todos, action.payload.name);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.name === action.payload.name
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      console.log(action);
      return todos.filter((todo) => todo.name !== action?.payload?.name);
    default:
      return todos;
  }
}

const REDUCER = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  return { todos, dispatch };
};

export default REDUCER;

function addTodoIfNotExists(todos, name) {
  if (todos.some((todo) => todo.name === name)) {
    return todos;
  }
  return [...todos, { id: Date.now(), name: name, complete: false }];
}

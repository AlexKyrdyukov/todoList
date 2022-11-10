// import Header from "../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
export let arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

export const reducer = (state = arrayTodos, action) => {
  switch (action.type) {
    case "COMPLETE_TODO":
      return;
    case "All_TODO":
      return;
    case "ACTION_TODO":
      return;
    case "CREATE_TODO":
      if (action.value) {
        arrayTodos = [
          ...arrayTodos,
          { title: action.value, completed: false, id: uuidv4() },
        ];
        localStorage.setItem("todos", JSON.stringify(arrayTodos));
        return (state = [...arrayTodos]);
      }
      break;

    default:
      return state;
  }
};

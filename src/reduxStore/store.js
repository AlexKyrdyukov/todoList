// import Header from "../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
export const arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

const initialState = {
  todos: arrayTodos,
}

export const actionCreateTodo = (value) => {
  return {
    type: 'CREATE_TODO',
    value
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_TODO":
      return;
    case "All_TODO":
      return;
    case "ACTION_TODO":
      return;
    case "CREATE_TODO":
      return {
        ...state,
        todos: [...state.todos, {
          complete: false,
          id: uuidv4(),
          
          title: action.value
        }]
      };
    default:
      return state;
  }
};

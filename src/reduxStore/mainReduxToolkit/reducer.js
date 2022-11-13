import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  //
  name: "todosSlice",
  //
  initialState: {
    todos: arrayTodos,
    filter: "all",
  },
  //
  reducers: {
    createTodo: (state = todosSlice.initialState, action) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            completed: false,
            id: uuidv4(),
            title: action.payload,
          },
        ],
      };
    },
    filterTodo: (state, action) => {
      return { ...state, filter: action.payload };
    },
    changeStatusTodo: (state, action) => {
      const todoChangeStatus = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos[todoChangeStatus] = {
        ...state.todos[todoChangeStatus],
        completed: !state.todos[todoChangeStatus].completed,
      };
      return state;
    },
    changeStatusAllTodos: (state, action) => {
      state.todos.forEach((item) => {
        item.completed = true;
      });
      return state;
    },
    deleteCompletedTodo: (state, action) => {
      const todoDelete = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos.splice(todoDelete, 1);
      return state;
    },
    changeTodoText: (state, action) => {
      const newText = action.payload.text;
      const todoId = action.payload.todo.id;
      const indexTodo = state.todos.findIndex((item) => item.id === todoId);
      state.todos[indexTodo].title = newText;
      return state;
    },
    deleteAllCompleteTodos: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };
    },
  },
});

export const {
  createTodo,
  filterTodo,
  changeStatusTodo,
  deleteTodo,
  changeStatusAllTodos,
  deleteCompletedTodo,
  changeTodoText,
  deleteAllCompleteTodos,
} = todosSlice.actions;

export const store = configureStore({
  reducer: todosSlice.reducer,
});

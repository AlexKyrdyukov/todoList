import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  
  name: "todosSlice",
  initialState: {
    todos: arrayTodos,
    filter: "all",
  },

  reducers: {

    createTodo: (state, action) => {
      state.todos.push({
        completed: false,
        id: uuidv4(),
        title: action.payload,
      });
    },

    filterTodo: (state, action) => {
      state.filter = action.payload;
    },

    changeStatusTodo: (state, action) => {
      const todoChangeStatus = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos[todoChangeStatus].completed =
        !state.todos[todoChangeStatus].completed;
    },

    changeStatusAllTodos: (state) => {
      state.todos.forEach((item) => {
        item.completed = true;
      });
    },

    deleteCompletedTodo: (state, action) => {
      const todoDelete = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos.splice(todoDelete, 1);
    },

    changeTodoText: (state, action) => {
      const newText = action.payload.text;
      const todoId = action.payload.id;
      const indexTodo = state.todos.findIndex((item) => item.id === todoId);
      state.todos[indexTodo].title = newText;
    },

    deleteAllCompleteTodos: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },

  },
});

export const todosSliceActions = todosSlice.actions;

export default todosSlice.reducer;

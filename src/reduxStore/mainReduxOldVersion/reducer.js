// import { v4 as uuidv4 } from "uuid";
// const arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

// const initialState = {
//   todos: arrayTodos,
//   filter: "all",
// };

// export const actionCreateTodo = (value) => {
//   return {
//     type: "CREATE_TODO",
//     value,
//   };
// };
// export const actionFilterTodo = (value) => {
//   return {
//     type: "FILTER_TODO",
//     value,
//   };
// };
// export const actionChangeStatusTodo = (value) => {
//   return {
//     type: "CHANGE_STATUS_TODO",
//     value,
//   };
// };
// export const actionDeleteTodo = (value) => {
//   return {
//     type: "DELETE_TODO",
//     value,
//   };
// };
// export const actionChangeTodos = (value) => {
//   return {
//     type: "CHANGE_ALL_TODO_STATUS",
//     value,
//   };
// };
// export const actionDeleteCompleteTodo = (value) => {
//   return {
//     type: "DELETE_COMPLETE_TODO",
//     value,
//   };
// };
// export const actionChangeTodoText = (value) => {
//   return {
//     type: "CHANGE_TODO_TEXT",
//     value,
//   };
// };
// export const actionDeleteCompleteTodos = (value) => {
//   return {
//     type: "DELETE_COMPLETES_TODOS",
//     value,
//   };
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "DELETE_COMPLETES_TODOS":
//       return {
//         ...state,
//         todos: state.todos.filter((item) => !item.completed),
//       };

//     case "CHANGE_TODO_TEXT":
//       const newText = action.value.text;
//       const todoId = action.value.todo.id;
//       const indexTodo = state.todos.findIndex((item) => item.id === todoId);
//       state.todos[indexTodo].title = newText;
//       return { ...state, todos: state.todos.slice() };

//     case "CHANGE_ALL_TODO_STATUS":
//       state.todos.forEach((item) => {
//         item.completed = true;
//       });
//       return {
//         ...state,
//         todos: state.todos.slice(),
//       };

//     case "DELETE_TODO":
//       const todoDelete = state.todos.findIndex(
//         (item) => item.id === action.value
//       );
//       state.todos.splice(todoDelete, 1);
//       return {
//         ...state,
//         todos: state.todos.slice(),
//       };

//     case "CHANGE_STATUS_TODO":
//       const todoChangeStatus = state.todos.findIndex(
//         (item) => item.id === action.value
//       );
//       state.todos[todoChangeStatus] = {
//         ...state.todos[todoChangeStatus],
//         completed: !state.todos[todoChangeStatus].completed,
//       };
//       return {
//         ...state,
//         todos: state.todos.slice(),
//       };

//     case "FILTER_TODO":
//       return { ...state, filter: action.value };

//     case "CREATE_TODO":
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             completed: false,
//             id: uuidv4(),
//             title: action.value,
//           },
//         ],
//       };
//     default:
//       return state;
//   }
// };

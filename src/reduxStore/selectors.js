import { createStore } from "redux";

import { reducer } from "./store";

export const store = createStore(reducer);
// store.dispatch({ type: "COMPLETE_TODO" });
// store.dispatch({ type: "ALL_TODO" });
// store.dispatch({ type: "CREATE_TODO" });

export const createTodo = (value) => {
  return store.dispatch({ type: "CREATE_TODO", value: value });
};

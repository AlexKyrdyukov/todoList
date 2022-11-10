import { createStore, applyMiddleware, compose } from "redux";

import { reducer } from "./store";
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  // other store enhancers if any
);

export const store = createStore(reducer,enhancer);
// store.dispatch({ type: "COMPLETE_TODO" });
// store.dispatch({ type: "ALL_TODO" });
// store.dispatch({ type: "CREATE_TODO" });

// export const createTodo = (value) => {
//   return store.dispatch({ type: "CREATE_TODO", value: value });
// };

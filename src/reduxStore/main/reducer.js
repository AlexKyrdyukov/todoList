import { CREATE_TODO } from "./actionNames";

const getInitialState = () => ({
  todos: [],
});

const reducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: payload,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;

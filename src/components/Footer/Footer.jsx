import React from "react";
import { useDispatch, useSelector } from "react-redux";

import StyledFooter from "./Footer.styles";
// import {
//   actionDeleteCompleteTodos,
//   actionFilterTodo,
// } from "../../reduxStore/reducer";
import {
  deleteAllCompleteTodos,
  filterTodo,
} from "../../reduxStore/mainReduxToolkit/reducer";

const Footer = () => {
  const todos = useSelector(({ todos }) => todos);
  const filter = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  const filterTodos = (filter) => {
    dispatch(filterTodo(filter));
  };

  const counterCompleted = todos.reduce((accum, item) => {
    return item.completed ? (accum += 1) : accum;
  }, 0);

  const handleDeleteCompletedTodods = () => {
    return dispatch(deleteAllCompleteTodos());
  };
  if (!todos.length) {
    return null;
  }

  return (
    <StyledFooter filter={filter}>
      <span className="info__table">Compl:{counterCompleted}</span>
      {filterButtons.map((item) => (
        <button
          key={item.value}
          className={
            item.value === filter
              ? "footer__block-button-in-focus"
              : "footer__block-button-status"
          }
          onClick={() => filterTodos(item.value)}
        >
          {item.status}
        </button>
      ))}
      <button
        className="footer__button-delete-todos"
        onClick={handleDeleteCompletedTodods}
      >
        delete
      </button>
    </StyledFooter>
  );
};

const filterButtons = [
  {
    status: "all",
    value: "all",
  },
  {
    status: "active",
    value: "active",
  },
  {
    status: "completed",
    value: "completed",
  },
];
export default Footer;

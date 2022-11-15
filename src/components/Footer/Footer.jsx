import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { todosSliceActions } from "../../reduxStore/mainReduxToolkit/todosSlice";
import { selectFilter } from "../../reduxStore/mainReduxToolkit/selector";

import StyledFooter from "./Footer.styles";

const Footer = () => {
  
  const arrayTodos = useSelector(({ todos }) => todos);
  const filter = useSelector(({ filter }) => filter);
  const completedTodos = useSelector(selectFilter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arrayTodos));
  }, [arrayTodos]);

  const handleFilterTodos = (ev) => {
    dispatch(todosSliceActions.filterTodo(ev.target.textContent));
  };

  const handleDeleteCompletedTodos = () => {
    dispatch(todosSliceActions.deleteAllCompleteTodos());
  };
  
  if (!arrayTodos.length) {
    return null;
  }

  return (
    <StyledFooter>
      <span className="info__table">Completed: {completedTodos.counter}</span>
      {filterButtons.map((item) => (
        <button
          key={item.value}
          className={
            item.value === filter
              ? "footer__block-button-in-focus"
              : "footer__block-button-status"
          }
          onClick={handleFilterTodos}
        >
          {item.value}
        </button>
      ))}
      <button
        className="footer__button-delete-todos"
        onClick={handleDeleteCompletedTodos}
      >
        delete
      </button>
    </StyledFooter>
  );
};

const filterButtons = [
  {
    value: "all",
  },
  {
    value: "active",
  },
  {
    value: "completed",
  },
];
export default Footer;

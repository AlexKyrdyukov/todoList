import React from "react";
import { useDispatch, useSelector } from "react-redux";

import StyledFooter from "./Footer.styles";

import { todosSliceActions } from "../../reduxStore/mainReduxToolkit/todosSlice";
import { selectFilter } from "../../reduxStore/mainReduxToolkit/selector";

const Footer = () => {
  const arrayTodos = useSelector(({ todos }) => todos);
  const filter = useSelector(({ filter }) => filter);
  const filterArrayTodos = useSelector(selectFilter);
  console.log(filterArrayTodos);
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
      <span className="info__table">Completed: {selectFilter.counter}</span>
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
          {item.status}
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

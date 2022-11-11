import React from "react";
import { useDispatch, useSelector } from "react-redux";


import StyledFooter from "./Footer.styles";
import { actionFilterTodo, } from "../../reduxStore/store";
import { actionDeleteCompleteTodos } from "../../reduxStore/store";

const Footer = () => {
  const todos = useSelector(({ todos }) => todos)
  const filter = useSelector(({ filter }) => filter)

  const dispatch = useDispatch()

  const filterTodos = (filter) => {
    if (filter === 'delete') {
      return dispatch(actionDeleteCompleteTodos())
    }
    dispatch(actionFilterTodo(filter))
  }

  const counterCompleted = todos.reduce((accum, item) => {
    return (item.completed ? accum += 1 : accum);
  }, 0)

  if (!todos.length) {
    return null;
  }

  return (
    <StyledFooter>
      <span className="info__table">
        Compl:{counterCompleted}
      </span>

      {filterButtons.map((item) => (
        <button
          key={item.value}
          className="footer__button-status"
          onClick={() => filterTodos(item.value)}
        >
          {item.status}
        </button>
      ))}
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
  {
    status: 'delete',
    value: 'delete'
  }
];
export default Footer;

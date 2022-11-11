import React from "react";
import { useSelector } from "react-redux";

import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";

const TodoLists = (props) => {
  const state = useSelector((state) => state);
  localStorage.setItem("todos", JSON.stringify(state.todos));

  const filter = state.filter;

  const resultArr = React.useMemo(() => {
    if (filter === "all") {
      return [...state.todos];
    }
    if (filter === "completed") {
      return [...state.todos].filter((item) => item.completed);
    }
    return [...state.todos].filter((item) => !item.completed);
  }, [filter, state]);

  return (
    <StyledTodoLists>
      {resultArr.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          onChangeRemoveTodo={props.onChangeRemoveTodo}
          onEditTodo={props.onEditTodo}
        />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;

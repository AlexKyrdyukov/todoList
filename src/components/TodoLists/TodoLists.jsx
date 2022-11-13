import React from "react";
import { useSelector } from "react-redux";

import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";

const TodoLists = () => {
  const arrayTodos = useSelector(({ todos }) => todos);
  const filter = useSelector(({ filter }) => filter);

  const resultArr = React.useMemo(() => {
    localStorage.setItem("todos", JSON.stringify(arrayTodos));

    if (filter === "all") {
      return arrayTodos;
    }
    if (filter === "completed") {
      return arrayTodos.filter((item) => item.completed);
    }
    return arrayTodos.filter((item) => !item.completed);
  }, [filter, arrayTodos]);

  return (
    <StyledTodoLists>
      {resultArr.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;

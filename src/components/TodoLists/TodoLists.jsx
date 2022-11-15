import React from "react";
import { useSelector } from "react-redux";

import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";
import { selectFilter } from "../../reduxStore/mainReduxToolkit/selector";

const TodoLists = () => {
  const filterArrayTodos = useSelector(selectFilter);

  return (
    <StyledTodoLists>
      {filterArrayTodos.array.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;

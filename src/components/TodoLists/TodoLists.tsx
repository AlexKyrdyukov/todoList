import React from "react";

import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem/ListItem";
import { selectFilter } from "../../reduxStore/mainReduxToolkit/selector";
import { useAppSelector } from "../../reduxStore/hooksRedux/appHooks";

const TodoLists = () => {
  const filterArrayTodos = useAppSelector(selectFilter);

  return (
    <StyledTodoLists>
      {filterArrayTodos.array.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;

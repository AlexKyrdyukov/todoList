import React from "react";

import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";

const TodoLists = (props) => {
  return (
    <StyledTodoLists>
      {props.arrayTodos.map((item) => (
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

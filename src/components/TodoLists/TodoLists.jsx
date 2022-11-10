import React from "react";
import { store } from "../../reduxStore/selectors";
import { arrayTodos } from "../../reduxStore/store";
import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";

const TodoLists = (props) => {


return (
  <StyledTodoLists>
    {[].map((item) => (
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

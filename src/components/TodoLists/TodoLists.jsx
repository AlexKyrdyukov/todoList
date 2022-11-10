import React from "react";
import { store } from "../../reduxStore/selectors";
import {useSelector} from 'react-redux'
import { arrayTodos } from "../../reduxStore/store";
import StyledTodoLists from "./TodoLists.style";
import ListItem from "../ListItem";

const TodoLists = (props) => {
  const state = useSelector(state => state.todos)

return (
  <StyledTodoLists>
    {state.map((item) => (
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

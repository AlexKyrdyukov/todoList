import React from "react";
import ListItem from "../ListItem";

const TodoLists = (props) => {
  return (
    <ul>
      {props.arrayTodos.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          complete={props.completeTodo}
          delete={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoLists;

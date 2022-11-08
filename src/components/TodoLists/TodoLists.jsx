import React from "react";
import ListItem from "../ListItem";
import styles from "./TodoLists.module.css";
const TodoLists = (props) => {
  return (
    <ul className={styles.todosBlock}>
      {props.onArrayTodos.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          complete={props.completeTodo}
          delete={props.deleteTodo}
          editTodo={props.onEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoLists;

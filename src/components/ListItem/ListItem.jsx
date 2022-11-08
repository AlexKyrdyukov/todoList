import React from "react";

import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const [inputState, setInputState] = React.useState(false);
  return (
    <li className={styles.listBlock}>
      <button
        onClick={() => props.onComplete(props.todo.id, props.todo.complete)}
        className={props.todo.complete ? styles.buttonCompleted : styles.button}
      >
        complete
      </button>
      {inputState ? (
        <input
          className={
            props.todo.complete ? styles.inputBlockCompleted : styles.inputBlock
          }
          type="text"
          onChange={(e) => props.onEditTodo(props.todo.id, e)}
          value={props.todo.title}
          onBlur={()=>setInputState((prevValue) => !prevValue)}
        />
      ) : (
        <div
          className={
            props.todo.complete ? styles.titleBlockCompleted : styles.titleBlock
          }
          onDoubleClick={() => setInputState((prevValue) => !prevValue)}
        >
          {props.todo.title}
        </div>
      )}
      <button
        className={styles.buttonDelete}
        onClick={() => props.onDelete(props.todo.id)}
      >
        delete
      </button>
    </li>
  );
};

export default ListItem;

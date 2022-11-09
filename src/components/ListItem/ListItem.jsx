import React from "react";

import StyledListItem from "./ListItem.style";

const ListItem = (props) => {
  const [inputState, setInputState] = React.useState(false);
  return (
    <StyledListItem isComplete={props.todo.complete}>
      <button
        onClick={(e) => props.onChangeRemoveTodo(props.todo.id, e.target.textContent)}
        className="button__complete"
      >
        completed
      </button>
      {inputState ? (
        <input

          className="input__block"
          type="text"
          onChange={(e) => props.onEditTodo(props.todo.id, e)}
          value={props.todo.title}
          onBlur={() => setInputState((prevValue) => !prevValue)}
        />
      ) : (
        <div

          className="title__block"
          onDoubleClick={() => setInputState((prevValue) => !prevValue)}
        >
          {props.todo.title}
        </div>
      )}
      <button
        className="button__delete"
        onClick={(e) => props.onChangeRemoveTodo(props.todo.id, e.target.textContent)}
      >
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;

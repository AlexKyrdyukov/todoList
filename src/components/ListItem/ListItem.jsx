import React from "react";

import StyledListItem from "./ListItem.style";

const ListItem = (props) => {
  //
  const [inputState, setInputState] = React.useState(false);

  const handleChangeText = (id, text) => {
    return props.onEditTodo(id, text);
  };
  return (
    <StyledListItem isComplete={props.todo.completed}>
      <button
        onClick={(e) =>
          props.onChangeRemoveTodo(props.todo.id, e.target.textContent)
        }
        className="button__complete"
      >
        completed
      </button>
      {inputState ? (
        <input
          className="input__block"
          type="text"
          onChange={(e) => handleChangeText(props.todo.id, e.target.value)}
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
        onClick={(e) =>
          props.onChangeRemoveTodo(props.todo.id, e.target.textContent)
        }
      >
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;

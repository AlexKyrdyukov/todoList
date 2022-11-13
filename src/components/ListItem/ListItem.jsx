import React from "react";
import { useDispatch } from "react-redux";

import {
  actionChangeStatusTodo,
  actionChangeTodoText,
  actionDeleteTodo,
} from "../../reduxStore/reducer";
import StyledListItem from "./ListItem.style";

const ListItem = (props) => {
  //
  const [inputState, setInputState] = React.useState(false);

  const dispatch = useDispatch();

  const deleteTodo = (todoId) => {
    dispatch(actionDeleteTodo(todoId));
  };

  const changeStatus = (todoId) => {
    dispatch(actionChangeStatusTodo(todoId));
  };

  const changeTodoText = (text, todo) => {
    dispatch(actionChangeTodoText({ text, todo }));
  };

  return (
    <StyledListItem isComplete={props.todo.completed}>
      <button
        onClick={() => changeStatus(props.todo.id)}
        className="button__complete"
      >
        completed
      </button>
      {inputState ? (
        <input
          className="input__block"
          type="text"
          value={props.todo.title}
          onBlur={() => setInputState((prevValue) => !prevValue)}
          onChange={(ev) => changeTodoText(ev.target.value, props.todo)}
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
        onClick={() => deleteTodo(props.todo.id)}
        className="button__delete"
      >
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;

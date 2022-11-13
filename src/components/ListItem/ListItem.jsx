import React from "react";
import { useDispatch } from "react-redux";
import {
  changeStatusTodo,
  changeTodoText,
  deleteCompletedTodo,
} from "../../reduxStore/mainReduxToolkit/reducer";

// import {
//   actionChangeStatusTodo,
//   actionChangeTodoText,
//   actionDeleteTodo,
// } from "../../reduxStore/reducer";
import StyledListItem from "./ListItem.style";

const ListItem = (props) => {
  //
  const [inputState, setInputState] = React.useState(false);

  const dispatch = useDispatch();

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteCompletedTodo(todoId));
  };

  const handleChangeStatus = (todoId) => {
    dispatch(changeStatusTodo(todoId));
  };

  const handleChangeTodoText = (text, todo) => {
    dispatch(changeTodoText({ text, todo }));
  };

  return (
    <StyledListItem isComplete={props.todo.completed}>
      <button
        onClick={() => handleChangeStatus(props.todo.id)}
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
          onChange={(ev) => handleChangeTodoText(ev.target.value, props.todo)}
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
        onClick={() => handleDeleteTodo(props.todo.id)}
        className="button__delete"
      >
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;

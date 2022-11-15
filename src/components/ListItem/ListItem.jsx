import React from "react";
import { useDispatch } from "react-redux";

import { todosSliceActions } from "../../reduxStore/mainReduxToolkit/todosSlice";

import StyledListItem from "./ListItem.style";

const ListItem = (props) => {
  
  const [inputState, setInputState] = React.useState(false);

  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(todosSliceActions.deleteCompletedTodo(props.todo.id));
  };

  const handleChangeStatus = () => {
    dispatch(todosSliceActions.changeStatusTodo(props.todo.id));
  };

  const handleChangeTodoText = (ev) => {
    dispatch(todosSliceActions.changeTodoText({text: ev.target.value, id: props.todo.id} ));
  };

  return (
    <StyledListItem isComplete={props.todo.completed}>
      <button
        onClick={handleChangeStatus}
        className="button__complete"
      >
        completed
      </button>
      {inputState
        ? (
          <input
            className="input__block"
            type="text"
            value={props.todo.title}
            onBlur={() => setInputState((prevValue) => !prevValue)}
            onChange={handleChangeTodoText}
          />
        )
        : (
          <div
            className="title__block"
            onDoubleClick={() => setInputState((prevValue) => !prevValue)}
          >
            {props.todo.title}
          </div>
        )}
      <button
        onClick={handleDeleteTodo}
        className="button__delete"
      >
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;

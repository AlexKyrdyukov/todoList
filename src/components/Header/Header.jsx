import React from "react";
import { useDispatch } from "react-redux";

import StyledHeader from "./Header.style.js";
import checked from "./images/checkMark.png";
// import {
//   actionChangeTodos,
//   actionCreateTodo,
// } from "../../reduxStore/reducer.js";
import {
  changeStatusAllTodos,
  createTodo,
  store,
} from "../../reduxStore/mainReduxToolkit/reducer.js";

const Header = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleSetTodo = (ev) => {
    setTodoTitle(ev.target.value);
  };

  const handleSetString = (ev) => {
    if (!todoTitle.trim()) {
      setTodoTitle("");
      return;
    }
    if (
      (ev.button !== 0 && ev.type === "click") ||
      (ev.key !== "Enter" && ev.type === "keyup")
    ) {
      return;
    }
    dispatch(createTodo(todoTitle));
    setTodoTitle("");
  };

  const changeTodosStatus = () => {
    dispatch(changeStatusAllTodos());
  };

  return (
    <StyledHeader>
      <button onClick={changeTodosStatus}>
        <img className="header__image" src={checked} alt="" />
      </button>
      <input
        className="header__input"
        value={todoTitle}
        placeholder="What needs to be done?"
        onKeyUp={handleSetString}
        onChange={handleSetTodo}
      />
      <button className="header__button" onClick={handleSetString}>
        Add
      </button>
    </StyledHeader>
  );
};

export default Header;

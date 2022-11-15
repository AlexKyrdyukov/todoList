import React from "react";
import { useAppDispatch } from "../../reduxStore/hooksRedux/appHooks";

import { todosSliceActions } from "../../reduxStore/mainReduxToolkit/todosSlice";

import StyledHeader from "./Header.style";

import checked from "./images/checkMark.png";

const Header = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const dispatch = useAppDispatch();
  
  const handleNewTodoInputChange = (ev) => {
    setTodoTitle(ev.target.value);
  };

  const handleKeyUp = (ev) => {
    if (ev.key !== "Enter") {
      return;
    }
    handleCreateTodo();
  };

  const handleCreateTodo = () => {
    if (!todoTitle.trim()) {
      setTodoTitle("");
      return;
    }
    dispatch(todosSliceActions.createTodo(todoTitle));
    setTodoTitle("");
  };

  const changeTodosStatus = () => {
    dispatch(todosSliceActions.changeStatusAllTodos());
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
        onKeyUp={handleKeyUp}
        onChange={handleNewTodoInputChange}
      />
      <button className="header__button" onClick={handleCreateTodo}>
        Add
      </button>
    </StyledHeader>
  );
};

export default Header;

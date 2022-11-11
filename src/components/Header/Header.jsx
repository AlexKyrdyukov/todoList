import React from "react";
import { useDispatch } from 'react-redux';

import StyledHeader from "./Header.style.js";
import checked from "./images/checkMark.png";
import {
  actionChangeTodos,
  actionCreateTodo,
} from "../../reduxStore/store.js";

const Header = () => {

  const [todoTitle, setTodoTitle] = React.useState("");
  const dispatch = useDispatch()

  const handleNewTodoInputChange = (ev) => {
    setTodoTitle(ev.target.value)
  }

  const handleSetString = (e) => {
    if (e.button === 0 || e.key === 'Enter') {
      return;
    }

    if (!todoTitle.trim()) {
      setTodoTitle('')
      return
    }
    dispatch(actionCreateTodo(todoTitle))
    setTodoTitle('')
  }

  const changeTodosStatus = () => {
    dispatch(actionChangeTodos())
  }

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
        onChange={handleNewTodoInputChange}
      />
      <button className="header__button" onClick={handleSetString}>
        Add
      </button>
    </StyledHeader>
  );
};

export default Header;

import React from "react";
import {createTodo} from "../../reduxStore/selectors.js";
import StyledHeader from "./Header.style.js";
import {useDispatch} from 'react-redux';
import checked from "./images/checkMark.png";
import { actionCreateTodo } from "../../reduxStore/store.js";

const Header = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const dispatch = useDispatch()
  const handleGetString = (e) => {
    setTodoTitle(e.target.value)
  }
  const handleSetString = (e) => {
    if (e.button === 0 || e.key === 'Enter') {
    if (!todoTitle.trim()) {
      setTodoTitle('')
      return
    }
      setTodoTitle('')
dispatch(actionCreateTodo(todoTitle))
      // createTodo(todoTitle)
    }
  }
  return (
    <StyledHeader>
      <button onClick={props.onCompletedTodoAll}>
        <img className="header__image" src={checked} alt="" />
      </button>
      <input
        className="header__input"
        value={todoTitle}
        placeholder="What needs to be done?"
        onKeyUp={handleSetString}
        onChange={handleGetString}
      />
      <button className="header__button" onClick={handleSetString}>
        Add
      </button>
    </StyledHeader>
  );
};
export default Header;

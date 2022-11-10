import React from "react";

import StyledHeader from "./Header.style.js";

import checked from "./images/checkMark.png";

const Header = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleValidateGetTodoTitle = (e) => {
    if (e.key === "Enter" || (e.button === 0 && e.type === "click")) {
      if (!todoTitle.trim()) {
        setTodoTitle("");
        return;
      }
      props.createTodoElement(todoTitle.trim());
      setTodoTitle("");
    }
  };

  const handleSetTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <StyledHeader>
      <button onClick={props.onCompletedTodoAll}>
        <img className="header__image" src={checked} alt="" />
      </button>
      <input
        className="header__input"
        value={todoTitle}
        placeholder="What needs to be done?"
        onKeyUp={handleValidateGetTodoTitle}
        onChange={handleSetTitle}
      />
      <button className="header__button" onClick={handleValidateGetTodoTitle}>
        Add
      </button>
    </StyledHeader>
  );
};
export default Header;

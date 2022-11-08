import React from "react";

import styles from "./Header.module.css";

import checked from "./images/checkMark.png";
const Header = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [buttonState, setButtonState]=React.useState(false)
  const handleChange  = () =>{
    props.completeTodo(undefined, buttonState)
    setButtonState(prevState => !prevState)
  }
  const handleValidateGetTodoTitle = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value.trim()) {
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
    <header className={styles.header}>
      <button
      onClick={handleChange}
      >
        <img className={styles.headerImage} src={checked} alt="" />
      </button>
      <input
        className={styles.headerInput}
        type="text"
        value={todoTitle}
        placeholder="What needs to be done?"
        onKeyUp={handleValidateGetTodoTitle}
        onChange={handleSetTitle}
      />
    </header>
  );
};
export default Header;

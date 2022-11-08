import React from "react";

import styles from "./Header.module.css";

import checked from "./images/checkMark.png";

const Header = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");

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
      <button>
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

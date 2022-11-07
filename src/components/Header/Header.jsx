import React from "react";

import styles from "./Header.module.css";

import checked from "./images/checkMark.png";
const Header = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleExamValidateString = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value.trim()) {
        return;
      }
      props.onConfirm(todoTitle);
      setTodoTitle('')
    }
  };

  const onChange = (e) => {
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
        onChange={onChange}
        onKeyUp={handleExamValidateString}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;

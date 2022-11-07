import React from "react";

const ListItem = (props) => {
  const changeTodoTitle = (e) => {
    props.todo.title = e.target.value;
    console.log(e.target.value);
  };

  console.log(props.todo.title);
  return (
    <li>
      <button>complete</button>
      <input type="text" onChange={changeTodoTitle} value={props.todo.title} />
      <button>delete</button>
    </li>
  );
};

export default ListItem;

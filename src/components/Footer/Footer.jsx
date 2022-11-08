import React from "react";

import styles from "./Footer.module.css";
const Footer = (props) => {
  // const changeState = (key) => {
  //   props.setFilterTodos(key);
  //   props.filterFuncTodos(key);
  // };
  console.log(props)
  return (
    props.onCounterAll > 0 && (
      <footer className={styles.footerBlock}>
        <span className={styles.infoTable}>
          Complete: {props.onComplitedCounterValue}
        </span>
        <span className={styles.infoTable}>
          Active: {props.onCounterAll - props.onCompletedCounterValue}
        </span>

        {stateButton.map((item, index) => {
          return (
            <button
              key={index}
              className={styles.footerButton}
              onClick={props.onFilterFuncTodos(item.key)}
            >
              {item.value}
            </button>
          );
        })}
      </footer>
    )
  );
};

const stateButton = [
  {
    key: "all",
    value: "all",
  },
  {
    key: "active",
    value: "active",
  },
  {
    key: "complete",
    value: "complete",
  },
];
export default Footer;

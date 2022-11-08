import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
 
  return (
    props.onArrayLength > 0 && (
      <footer className={styles.footerBlock}>
        
        <span className={styles.infoTable}>
          Complete: {props.onComplitetedCounterValue}
        </span>

        {stateButton.map((item, index) => {
          return (
            <button
              key={index}
              className={styles.footerButton}
              onClick={()=>props.onFilterArray(item.key)}
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

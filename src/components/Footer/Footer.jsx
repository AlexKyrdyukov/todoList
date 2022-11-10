import React from "react";

import StyledFooter from "./Footer.styles";
import  {arrayTodos }from "../../reduxStore/store";
const Footer = (props) => {
  if (!arrayTodos.length) {
    return null;
  }

  return (
    <StyledFooter>
      <span className="info__table">
        Completed: {props.completetedCounterValue}
      </span>

      {filterButtons.map((item) => (
        <button
          key={item.value}
          className="footer__button-status"
          onClick={() => props.onFilterArray(item.value)}
        >
          {item.status}
        </button>
      ))}
    </StyledFooter>
  );
};

const filterButtons = [
  {
    status: "all",
    value: "all",
  },
  {
    status: "active",
    value: "active",
  },
  {
    status: "completed",
    value: "completed",
  },
];
export default Footer;

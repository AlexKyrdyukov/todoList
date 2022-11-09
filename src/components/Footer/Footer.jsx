import React from "react";

import StyledFooter from "./Footer.styles";

const Footer = (props) => {

  if (!props.array.length) {
    return null;
  }

  return (
    <StyledFooter>
      <span className="info__table">
        Complete: {props.completetedCounterValue}
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
    status: "complete",
    value: "complete",
  },
];
export default Footer;

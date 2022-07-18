import React from "react";

import classes from "./CardRight.module.css";

const CardRight = (props) => {
  return <div className={classes.CardRight}>{props.children}</div>;
};

export default CardRight;

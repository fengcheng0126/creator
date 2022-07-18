import React from "react";

import Spacing from "./Spacing";
import classes from "./BigCard.module.css";

const BigCard = (props) => {
  return (
    <div className={classes.BigCard}>
      <Spacing />
      {props.children}
      <Spacing />
    </div>
  );
};

export default BigCard;

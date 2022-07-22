import classes from "./Orange.module.css";

const Orange = (props) => {
  let orangeTopics = ["Twitter", "Youtube", "Facebook"];

  return (
    <div className={classes.orange}>
      <span className={classes.orangeButton}>{orangeTopics[0]}</span>
      <span className={classes.orangeButton}>{orangeTopics[1]}</span>
      <span className={classes.orangeButton}>{orangeTopics[2]}</span>
    </div>
  );
};

export default Orange;

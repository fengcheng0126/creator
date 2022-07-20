import classes from "./Orange.module.css";

const Orange = (props) => {
  let orangeTopics = ["Twitter", "Youtube", "Facebook"];

  return (
    <>
      <div className={classes.orange}>
        <div className={classes.orangeButton}>{orangeTopics[0]}</div>
        <div className={classes.orangeButton}>{orangeTopics[1]}</div>
        <div className={classes.orangeButton}>{orangeTopics[2]}</div>
      </div>
    </>
  );
};

export default Orange;

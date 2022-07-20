import classes from "./TopicsOutlets.module.css";

const TopicsOutlets = (props) => {
  let blueTopics = ["english", "math", "science"];

  return (
    <>
      <div className={classes.blue}>
        <div className={classes.blueButton}>{blueTopics[0]}</div>
        <div className={classes.blueButton}>{blueTopics[1]}</div>
        <div className={classes.blueButton}>{blueTopics[2]}</div>
      </div>
    </>
  );
};

export default TopicsOutlets;

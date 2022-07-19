import classes from "./TopicsButton.module.css";

const TopicsButton = (props) => {
  const blueTopics = [1, 2, 3];

  return <div className={classes.blue}>{blueTopics[0]}</div>;
};

export default TopicsButton;

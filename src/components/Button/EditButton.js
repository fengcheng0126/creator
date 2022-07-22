import EditButtonlogo from "./EditButton3.png";
import classes from "./EditButton.module.css";

const EditButton = (props) => {
  return (
    <div className={classes.logo}>
      <img src={EditButtonlogo} alt="Edit Button" height="35px" width="35px" />
    </div>
  );
};

export default EditButton;

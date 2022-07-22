import BioHeader from "./components/Header/Bio-Header";
import Description from "./components/Text/Description";
import Card from "./components/UI/Card";
import Topics from "./components/Header/Topics";
import TopicsOutlets from "./components/Button/TopicsOutlets";

import classes from "./App.module.css";
import Outlets from "./components/Header/Outlets";
import Orange from "./components/Button/Orange";
import EditButton from "./components/Button/EditButton";

function App() {
  return (
    <Card className={classes.BigCardS}>
      <EditButton />
      <div className={classes.row}>
        <div className={classes.CardS}>
          <BioHeader />
          <Description />
        </div>
        <div className={classes.CardS}>
          <Topics />
          <div className={classes.row}>
            <TopicsOutlets />
          </div>
          <Outlets />
          <div className={classes.row}>
            <Orange />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default App;

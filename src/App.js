import BioHeader from "./components/Header/Bio-Header";
import Description from "./components/Text/Description";
import Card from "./components/UI/Card";
import Topics from "./components/Header/Topics";
import TopicsButton from "./components/Button/TopicsButton";

import classes from "./App.module.css";

function App() {
  return (
    <Card className={classes.BigCardS}>
      <div className={classes.row}>
        <div className={classes.CardS}>
          <BioHeader />
          <Description />
        </div>
        <div className={classes.CardS}>
          <Topics />
          <div className={classes.row}>
            <TopicsButton />
            <TopicsButton />
            <TopicsButton />
            <TopicsButton />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default App;

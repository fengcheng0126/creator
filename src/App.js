import BioHeader from "./components/Header/Bio-Header";
import Description from "./components/Text/Description";
import Card from "./components/UI/Card";
import BigCard from "./components/UI/BigCard";
import CardRight from "./components/UI/CardRight";
import classes from "./App.module.css";
import Topics from "./components/Header/Topics";

function App() {
  return (
    <BigCard>
      <div className={classes.row}>
        <Card>
          <BioHeader />
          <Description />
        </Card>
        <CardRight>
          <Topics />
        </CardRight>
      </div>
    </BigCard>
  );
}

export default App;

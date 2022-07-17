import BioHeader from "./components/Header/Bio-Header";
import Description from "./components/Text/Description";
import Card from "./components/UI/Card";

import classes from "./components/UI/Card.module.css";

function App() {
  return (
    <Card>
      <Card className={classes.Card}>
        <BioHeader />
        <Description />
      </Card>
      <Card>
        <Description />
      </Card>
    </Card>
  );
}

export default App;

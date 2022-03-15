import { Fragment } from "react";

import Header from "./components/Layout/Header";
import MainImage from "./components/Layout/MainImage";
import Meals from "./components/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <MainImage />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

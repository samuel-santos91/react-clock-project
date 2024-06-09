import React from "react";

import AnalogClock from "../../containers/AnalogClock/AnalogClock";
import DigitalClock from "../../containers/DigitalClock/DigitalClock";

import classes from './Home.module.scss';

const Home = () => {
  return (
    <main className={classes.display}>
      <AnalogClock />
      <DigitalClock />
    </main>
  );
};

export default Home;

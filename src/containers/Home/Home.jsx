import React from "react";

import AnalogClock from "../AnalogClock/AnalogClock";
import DigitalClock from "../DigitalClock/DigitalClock";

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

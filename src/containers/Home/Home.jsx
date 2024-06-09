import React from "react";

import AnalogClock from "../AnalogClock/AnalogClock";
import DigitalClock from "../DigitalClock/DigitalClock";

const Home = () => {
  return (
    <main>
      <AnalogClock />
      <DigitalClock />
    </main>
  );
};

export default Home;

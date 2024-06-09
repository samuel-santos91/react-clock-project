import React from "react";

import classes from "./AnalogClock.module.scss";
import ClockHand from "../../components/ClockHand/ClockHand";

const AnalogClock = () => {
  return (
    <section>
      <div className={classes.analog}>
        <ClockHand type={"hour"}/>
        <ClockHand type={"minute"}/>
        <ClockHand type={"second"}/>
      </div>
    </section>
  );
};

export default AnalogClock;

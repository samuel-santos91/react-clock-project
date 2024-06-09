import React from "react";

import classes from "./AnalogClock.module.scss";

const AnalogClock = () => {
  return (
    <section>
      <div className={classes.analog}>
        <span className={classes['hour-hand']}></span>
        <span className={classes['minute-hand']}></span>
        <span className={classes['second-hand']}></span>
      </div>
    </section>
  );
};

export default AnalogClock;

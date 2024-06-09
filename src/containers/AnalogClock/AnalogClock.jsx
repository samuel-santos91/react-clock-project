import React, { useContext } from "react";

import ClockHand from "../../components/ClockHand/ClockHand";
import { TimeContext } from "../../context/TimeContextProvider";

import classes from "./AnalogClock.module.scss";

const AnalogClock = () => {
  const { rotationAngle } = useContext(TimeContext);

  return (
    <section>
      <div className={classes.analog}>
        <ClockHand
          type={"hour"}
          rotationAngle={rotationAngle.hourAngle}
          translateX="-20%"
          translateOriginX="20%"
        />
        <ClockHand
          type={"minute"}
          rotationAngle={rotationAngle.minuteAngle}
          translateX="-15%"
          translateOriginX="15%"
        />
        <ClockHand type={"second"} rotationAngle={rotationAngle.secondAngle} />
      </div>
    </section>
  );
};

export default AnalogClock;

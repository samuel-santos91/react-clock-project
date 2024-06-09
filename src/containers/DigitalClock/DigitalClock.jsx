import React, { useContext } from "react";

import { TimeContext } from "../../context/TimeContextProvider";

import classes from "./DigitalClock.module.scss";

const DigitalClock = () => {
  const { formattedTime } = useContext(TimeContext);

  return (
    <section>
      <time className={classes.digital}>
        <span className={classes["digital_numbers"]}>
          {formattedTime?.hours}
        </span>
        <span className={classes["digital_colons"]}>:</span>
        <span className={classes["digital_numbers"]}>
          {formattedTime?.minutes}
        </span>
        <span className={classes["digital_colons"]}>:</span>
        <span className={classes["digital_numbers"]}>
          {formattedTime?.seconds}
        </span>
      </time>
    </section>
  );
};

export default DigitalClock;

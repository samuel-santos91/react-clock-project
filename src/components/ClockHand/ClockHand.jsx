import React, { useEffect } from "react";

import { getClockHandRotation } from "../../utils/timeFunctions";

import classes from "./ClockHand.module.scss";

const ClockHand = ({
  type,
  rotationAngle,
  translateX = 0,
  translateOriginX = 0,
}) => {
  useEffect(() => {
    getClockHandRotation(type, rotationAngle, translateX, translateOriginX);
  }, [rotationAngle]);

  return <span id={type} className={classes[`${type}-hand`]}></span>;
};

export default ClockHand;

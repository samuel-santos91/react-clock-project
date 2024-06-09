import React, { createContext, useEffect, useState } from "react";

import { getRotationAngle, getFormattedTime } from "../utils/timeFunctions";

export const TimeContext = createContext(null);

const TimeContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState(getFormattedTime(date));
  const [rotationAngle, setRotationAngle] = useState(
    getRotationAngle(
      formattedTime.hours,
      formattedTime.minutes,
      formattedTime.seconds
    )
  );

  useEffect(() => {
    // updates every 1 second
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);

      const newFormattedTime = getFormattedTime(currentDate);
      setFormattedTime(newFormattedTime);

      const newRotationAngle = getRotationAngle(
        newFormattedTime.hours,
        newFormattedTime.minutes,
        newFormattedTime.seconds
      );
      setRotationAngle(newRotationAngle);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ formattedTime, rotationAngle }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;

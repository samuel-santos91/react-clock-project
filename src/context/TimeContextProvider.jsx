import React, { createContext, useEffect, useState } from "react";

import { getFormattedTime } from "../utils/timeFunctions";

export const TimeContext = createContext(null);

const TimeContextProvider = ({ children }) => {
  const [formattedTime, setFormattedTime] = useState();

  useEffect(() => {
    const currentTime = new Date();

    setFormattedTime(getFormattedTime(currentTime));

    const interval = setInterval(() => {}, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ formattedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;

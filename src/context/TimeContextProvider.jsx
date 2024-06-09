import React, { createContext, useEffect, useState } from "react";

import { getFormattedTime } from "../utils/timeFunctions";

export const TimeContext = createContext(null);

const TimeContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState(getFormattedTime(date));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);

      setFormattedTime(getFormattedTime(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ formattedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;

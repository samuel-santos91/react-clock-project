import React, { useContext } from "react";

import { TimeContext } from "../../context/TimeContextProvider";

const DigitalClock = () => {
  const { formattedTime } = useContext(TimeContext);

  return (
    <section>
      <time>
        <span>{formattedTime?.hours}</span>
        <span>:</span>
        <span>{formattedTime?.minutes}</span>
        <span>:</span>
        <span>{formattedTime?.seconds}</span>
      </time>
    </section>
  );
};

export default DigitalClock;

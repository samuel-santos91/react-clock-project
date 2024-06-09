export const getFormattedTime = (date) => {
  // gets each time separately and ensures it has 2 digits
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return { hours, minutes, seconds };
};

export const getRotationAngle = (hours, minutes, seconds) => {
  // 360 degrees divided by number of hours/minutes/seconds in a clock minus 90 degrees so they start at the right place in the clock
  const hourAngle = (hours * 360) / 12 - 90;
  const minuteAngle = (minutes * 360) / 60 - 90;
  const secondAngle = (seconds * 360) / 60 - 90;

  return { hourAngle, minuteAngle, secondAngle };
};

export const getClockHandRotation = (
  type,
  rotationAngle,
  translateX,
  translateOriginX
) => {
  const clockHandElement = document.getElementById(type);

  // traslate the clock hands, if applicable, and translate the origin rotation point
  if (clockHandElement) {
    clockHandElement.style.transform = `translate(${translateX}, -50%) rotate(${rotationAngle}deg)`;
    clockHandElement.style.transformOrigin = `${translateOriginX} 50%`;
  }
};

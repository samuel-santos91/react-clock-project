export const getFormattedTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return { hours, minutes, seconds };
};

export const getRotationAngle = (time) => {
  // 360 degrees divided by number of hours/minutes/seconds in a clock minus 90 degrees so they start at the right place in the clock
  const hourAngle = (time * 360) / 12 - 90;
  const minuteAngle = (time * 360) / 60 - 90;
  const secondAngle = (time * 360) / 60 - 90;

  return { hourAngle, minuteAngle, secondAngle };
};

export const getAngleRotation = (
  type,
  rotationAngle,
  translateX,
  translateOriginX
) => {
  const clockHandElement = document.getElementById(type);

  if (clockHandElement) {
    clockHandElement.style.transform = `translate(${translateX}, -50%) rotate(${rotationAngle}deg)`;
    clockHandElement.style.transformOrigin = `${translateOriginX} 50%`;
  }
};

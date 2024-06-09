export const getFormattedTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return { hours, minutes, seconds };
};

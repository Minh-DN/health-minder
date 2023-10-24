// TODO: ADD DOCUMENTATION

export const getHourMinuteSecondFromDuration = (value = 0) => {
  let hours = 0;
  let minutes = 0;

  if (value > 0) {
    hours = ~~(value / 3600);
    minutes = ~~((value % 3600) / 60);
  }

  return {
    hours,
    minutes,
  };
};

export const formatDurationInWords = (value = 0) => {
  const { hours, minutes } = getHourMinuteSecondFromDuration(value);

  const result = [];
  if (hours) result.push(`${hours}h`);
  if (minutes) result.push(`${minutes}m`);

  return result.join(" ");
};

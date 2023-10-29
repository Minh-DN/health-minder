import numeral from "numeral";

// FORMAT NUMBERS

/**
 * Format number using numeral.js
 *
 * @param {number} value
 * @param {string} format (numeral format)
 * @returns {number} formatted value
 */
export const formatNumeric = (value: number, format: string = "0,0") => {
  return numeral(value).format(format);
};

// FORMAT TIME

/**
 * Get hours and minutes from an amount of time in seconds
 * E.g. 30600 seconds => hours: 8, minutes: 30
 *
 * @param {number} time in seconds
 * @returns {
 *  hours: number,
 *  minutes: number
 * }
 */
export const getHourMinuteSecondFromDuration = (time: number) => {
  let hours = 0;
  let minutes = 0;

  if (time > 0) {
    hours = ~~(time / 3600);
    minutes = ~~((time % 3600) / 60);
  }

  return {
    hours,
    minutes,
  };
};

/**
 * Format a time value into words
 * E.g. 30600 seconds => 8h 30m
 *
 * @param {number} time in seconds
 * @returns {string} duration in words
 */
export const formatDurationInWords = (time: number) => {
  const { hours, minutes } = getHourMinuteSecondFromDuration(time);

  const result = [];
  if (hours) result.push(`${hours}h`);
  if (minutes) result.push(`${minutes}m`);

  return result.join(" ");
};

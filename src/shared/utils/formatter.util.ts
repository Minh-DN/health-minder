import numeral from 'numeral';

/* FORMAT NUMBERS */

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

/**
 * Round a number to the desired precision
 * E.g. roundToPrecision(9.333, 1) => 9.3
 *
 * @param {number} number the number to round
 * @param {number} precision the desired precision
 * @returns a number rounded to the desired precision
 */
export const roundToPrecision = (number: number, precision: number) => {
  return parseFloat(number.toFixed(precision));
};

/* FORMAT TIME */

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

/* FORMAT STRING */

/**
 * Capitalise the first letter of each word in a string
 *
 * @param string
 * @returns {string} formatted string
 */
export const capitaliseWords = (string: string): string => {
  return string.toLowerCase().replace(/(^|\s)\S/g, function (match) {
    return match.toUpperCase();
  });
};

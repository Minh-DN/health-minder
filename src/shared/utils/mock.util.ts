import { faker } from "@faker-js/faker";

/* NUMBER */
export const generateNumber = (min: number, max: number): number => {
  return faker.number.int({ min, max });
};

export const generateFloat = (
  min: number,
  max: number,
  precision: number = 0.01
): number => {
  return faker.number.float({ min, max, precision });
};

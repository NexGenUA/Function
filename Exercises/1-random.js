'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(min + Math.random() * (max - min + 1));
};

module.exports = { random };

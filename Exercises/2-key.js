'use strict';

const generateKey = (length, possible) => {
  const base = possible.length;
  let str = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * base);
    str += possible[rand];
  }
  return str;
};

module.exports = { generateKey };

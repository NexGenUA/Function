'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (acc, cur) => (acc << 8) + parseInt(cur);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };

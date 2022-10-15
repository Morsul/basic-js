const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numList = []
  let digits = String(n)
  let digitsLength = digits.length;
  for(let i = 0; i<digitsLength; i++) {
    numList.push(digits.slice(0,i) + digits.slice(i+1 ,digitsLength))
  };
  
  return Math.max(...numList);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

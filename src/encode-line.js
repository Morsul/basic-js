const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = ""
  let temp =""
  let count = 0;
  for(let i = 0; i< str.length+1; i++){

    if (temp != str.charAt(i)){
      newString += count >1 ? count: '';
      newString += temp;
      temp = str.charAt(i)
      count = 0
    }
    count++
  }
  return newString;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let k = {}
  domains.forEach(e =>{
    let tempDns = e.split(".").reverse();
    tempDns.forEach((f, i) =>{
      let tempVal = tempDns.slice(0,i+1).join(".")
      if (k[`.${tempVal}`] == undefined){
        k[`.${tempVal}`] = 1
      } else {
        k[`.${tempVal}`] += 1
      }
    })
  })
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return k;
}

module.exports = {
  getDNSStats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(calendar) {
  if (!calendar) return 'Unable to determine the time of year!';
  if (!(calendar instanceof Date) || calendar.toString !== new Date().toString) throw new Error('Invalid date!')

  let d = new Date(calendar)

  let month = -1;
  month = d.getMonth();

  if(month>-1){
    if(month==11 || month < 2 ) return 'winter'
    if(month<5) return 'spring'
    if(month<8) return 'summer'
    if(month<11) return 'autumn|fall'
  }

  return 'Unable to determine the time of year!';
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newString ='';
  let iterationCount = options.repeatTimes ==undefined ? 1 :options.repeatTimes

  for (let i = 0; i< iterationCount; i++){

    newString+= i!=0 ? (options.separator == undefined ? "+": options.separator) :'';
    newString+=str;

    if(typeof options.addition != "undefined"){

      let secondIterationCount = options.additionRepeatTimes ==undefined ? 1 :options.additionRepeatTimes
      for(let k = 0; k<secondIterationCount; k++){
        newString+= k!=0 ? (options.additionSeparator == undefined ? "|": options.additionSeparator): '';
        newString+=options.addition
     }
    }
  }

  return newString
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

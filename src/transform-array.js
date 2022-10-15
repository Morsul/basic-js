const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!") 
  let p = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i]=='--discard-next'){
      if(arr[i+2]=='--double-prev'){
        i+=2
      }
      continue;
    }
    if(arr[i]=='--discard-prev'){
      p.pop()
      continue;
    }
    if(arr[i]=='--double-next'){
      if(arr[i+1]){
        p.push(arr[i+1])
      }
      continue;
    }
    if(arr[i]=='--double-prev'){
      if(arr[i-1]){
        p.push(p[i-1])
      }
      continue;
    }
    p.push(arr[i])
  }
  return p
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

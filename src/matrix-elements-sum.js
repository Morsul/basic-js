const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let y = matrix[0].length;
  let test = new Array(y);
  let summ = 0;
  for(let i = 0; i < y ; i++){
    for (let k = 0; k <  matrix.length; k++){
      if (matrix[k][i] == 0){
        test[i] = 0;
      }
      if(matrix[k][i] != 0 && test[i] !=0){
        summ += matrix[k][i]
      }
    }
  }
  return summ
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};

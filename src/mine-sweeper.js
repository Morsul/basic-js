const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let x = matrix.length;
  let y = matrix[0].length
  let numArray =  Array.from(Array(x), () => new Array(y));
  matrix.forEach((e,i1)=>{
    e.forEach((k, i2)=>{
      let f = 0;
      f += i2-1 > -1 ?  (matrix[i1][i2-1] == true? 1: 0) : 0
      f += i2+1 < y  ?  (matrix[i1][i2+1] == true? 1: 0) : 0
      f += i1-1 > -1 ?  (matrix[i1-1][i2] == true? 1: 0) : 0
      f += i1+1 < x  ?  (matrix[i1+1][i2] == true? 1: 0) : 0
      f += (i2-1 > -1 && i1-1 > -1) ?  (matrix[i1-1][i2-1] == true? 1: 0) : 0
      f += (i2+1 < y && i1+1 < x )  ?  (matrix[i1+1][i2+1] == true? 1: 0) : 0
      f += (i1-1 > -1 && i2+1 < y)  ?  (matrix[i1-1][i2+1] == true? 1: 0) : 0
      f += (i1+1 < x && i2-1 > -1 ) ?  (matrix[i1+1][i2-1] == true? 1: 0) : 0
      numArray[i1][i2] = f;
    })
  })
  return numArray;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};

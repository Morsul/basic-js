const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let checkObject = {};
  let newAray = new Array();

  names.forEach((ele,i) =>{
    if (checkObject[ele] == undefined){
      checkObject[ele] = 1;
      newAray[i] = ele+ (newAray.includes(ele)? `(1)`: '' )
    } else {
      newAray[i] = ele+`(${checkObject[ele]})`
      checkObject[ele] +=1;
    }

  })

  return newAray;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};

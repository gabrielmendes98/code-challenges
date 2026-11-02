/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let output = "";
  let index = 0;
  let isEqual = true;

  while (isEqual && strs[0][index]) {
    let character = strs[0][index];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== character) {
        isEqual = false;
      }
    }

    if (isEqual) {
      output += character;
      index++;
    }
  }

  return output;
};

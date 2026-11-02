/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let startingPoint = -1;
  let cursor = 0;
  for (let start = 0; start <= haystack.length - needle.length; start++) {
    cursor = 0;
    startingPoint = -1;
    if (haystack[start] === needle[cursor]) {
      startingPoint = start;
      while (haystack[start + cursor] === needle[cursor]) {
        cursor++;

        if (cursor === needle.length) {
          return startingPoint;
        }
      }
    }
  }

  return -1;
};

// OR

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let start = 0; start <= haystack.length - needle.length; start++) {
    if (haystack.slice(start, start + needle.length) === needle) {
      return start;
    }
  }

  return -1;
};

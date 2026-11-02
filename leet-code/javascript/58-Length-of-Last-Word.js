/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let start = -1;
  let end = -1;
  let shouldReset = true;

  for (let i in s) {
    if (isValidChar(s[i])) {
      if (shouldReset) {
        start = i;
        shouldReset = false;
      }
      end = i;
    } else {
      shouldReset = true;
    }
  }

  return end - start + 1;
};

function isValidChar(char) {
  return char !== " ";
}

// OR

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let start = -1;
  let end = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (isValidChar(s[i])) {
      if (end === -1) {
        end = i;
      }
      start = i;
    } else if (end !== -1) {
      break;
    }
  }

  return end - start + 1;
};

function isValidChar(char) {
  return char !== " ";
}

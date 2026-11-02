/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let bracketsDict = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (char of s) {
    if (bracketsDict[char]) {
      stack.push(char);
    } else {
      const lastStackItem = stack[stack.length - 1];
      if (bracketsDict[lastStackItem] === char) {
        stack.pop();
      } else {
        stack.push(char);
        break;
      }
    }
  }

  return stack.length === 0;
};

// OR

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let bracketsDict = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (char of s) {
    stack.push(char);

    if (!bracketsDict[char]) {
      const prevStackItem = stack[stack.length - 2];
      if (bracketsDict[prevStackItem] === char) {
        stack.pop();
        stack.pop();
      } else {
        break;
      }
    }
  }

  return stack.length === 0;
};

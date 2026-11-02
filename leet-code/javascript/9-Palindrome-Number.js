/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const text = String(x);
  let hasSolution = true;
  for (let i = 0; i < text.length / 2 && hasSolution; i++) {
    let last = text.length - 1 - i;
    if (text[i] !== text[last]) {
      hasSolution = false;
    }
  }

  return hasSolution;
};

// 11211
// 0-4 1-3 2-2
// 112211
// 0-5 1-4 2-3

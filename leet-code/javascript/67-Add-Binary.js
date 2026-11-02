/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let top;
  let bottom;
  let result = [];

  if (a.length >= b.length) {
    top = a;
    bottom = b;
  } else {
    top = b;
    bottom = a;
  }

  let plusOne = 0;
  let bottomIndex = bottom.length - 1;

  for (let i = top.length - 1; i >= 0; i--) {
    let calc = Number(top[i]) + Number(bottom[bottomIndex] || "0");

    let res;

    if (calc === 0) {
      res = 0;
      if (plusOne) {
        res = 1;
        plusOne--;
      }
    } else if (calc === 1) {
      res = 1;
      if (plusOne) {
        res = 0;
      }
    } else if (calc === 2) {
      res = 0;
      if (plusOne) {
        res = 1;
      } else {
        plusOne++;
      }
    }

    result.unshift(res);
    bottomIndex--;
  }

  if (plusOne) {
    result.unshift(1);
  }

  return result.join("");
};

// OR

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";

  let i = a.length - 1;
  let j = b.length - 1;

  let plusOne = 0;

  while (i >= 0 || j >= 0) {
    let sum = plusOne;

    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }

    result = (sum % 2) + result;
    plusOne = parseInt(sum / 2);
  }

  if (plusOne > 0) {
    result = 1 + result;
  }

  return result;
};

// O(sqrt(n))

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 0;

  for (let i = 0; i <= x; i++) {
    let calc = i * i;
    if (calc <= x) {
      result = i;
    }

    if (calc > x) {
      break;
    }
  }

  return result;
};

// O(log(n))

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 0;
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const calc = mid * mid;
    if (calc === x) {
      return mid;
    } else if (calc > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = mid;
    }
  }

  return result;
};

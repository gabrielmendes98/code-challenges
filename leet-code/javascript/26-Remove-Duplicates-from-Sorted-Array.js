/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const _ = -999;
  let currentToFind = nums[0];
  let unique = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === currentToFind) {
      nums[i] = _;
    } else {
      currentToFind = nums[i];
      unique++;
    }
  }

  let indexToChange = -1;

  for (i in nums) {
    if (nums[i] === _) {
      if (indexToChange === -1) {
        indexToChange = i;
      }
    } else {
      if (indexToChange !== -1) {
        let aux = nums[i];
        nums[i] = _;
        nums[indexToChange] = aux;
        indexToChange++;
      }
    }
  }

  return unique;
};

// OR - Two Pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cursor = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[cursor] = nums[i];
      cursor++;
    }
  }

  return cursor;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let cursor = 1;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      k++;
      while (nums[cursor] === val) {
        cursor++;
      }
      nums[i] = nums[cursor];
      if (cursor < nums.length) {
        nums[cursor] = val;
        k--;
      }
    }
    cursor++;
  }

  return nums.length - k;
};

// OR

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[cursor] = nums[i];
      cursor++;
    }
  }

  return cursor;
};

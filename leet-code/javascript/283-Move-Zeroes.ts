/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] === 0) {
      nums.splice(l, 1);
      nums.push(0);
      r--;
    } else {
      l++;
    }
  }
}

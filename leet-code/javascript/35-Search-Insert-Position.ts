function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

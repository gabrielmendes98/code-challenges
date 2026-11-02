function findPivot(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  const leftValue = nums[left];
  const rightValue = nums[right];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] >= leftValue && nums[middle] >= rightValue) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

function search(nums: number[], target: number): number {
  const pivotIndex = findPivot(nums);
  const pivot = nums[pivotIndex];
  let left = 0;
  let right = nums.length - 1;

  let index = -1;

  if (target >= pivot && target <= nums[right]) {
    left = pivotIndex;
  } else {
    right = pivotIndex;
  }

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      index = middle;
      break;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return index;
}

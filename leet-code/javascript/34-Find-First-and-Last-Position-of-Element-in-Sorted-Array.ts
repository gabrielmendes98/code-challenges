// function searchRange(nums: number[], target: number): number[] {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const middle = Math.floor((left + right) / 2);
//     if (nums[middle] > target) {
//       right = middle - 1;
//     } else if (nums[middle] < target) {
//       left = middle + 1;
//     } else {
//       left = middle;
//       right = middle;
//     }
//   }

//   if (nums[left] !== target && nums[right] !== target) {
//     return [-1, -1];
//   }

//   while (nums[left] === target) {
//     left--;
//   }

//   while (nums[right] === target) {
//     right++;
//   }

//   return [left + 1, right - 1];
// }

function binSearch(
  nums: number[],
  target: number,
  shiftToLeft: boolean
): number {
  let left = 0;
  let right = nums.length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      foundIndex = middle;
      if (shiftToLeft) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return foundIndex;
}

function searchRange(nums: number[], target: number): number[] {
  const left = binSearch(nums, target, true);
  const right = binSearch(nums, target, false);

  return [left, right];
}

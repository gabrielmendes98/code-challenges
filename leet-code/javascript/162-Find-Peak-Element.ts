// function findPeakElement(nums: number[]): number {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low < high) {
//     const mid = Math.floor((low + high) / 2);
//     const leftValue = nums.at(mid - 1);
//     const rightValue = nums.at(mid + 1);

//     if (nums[mid] > rightValue && nums[mid] > leftValue) {
//       return mid;
//     }

//     if (nums[mid] < rightValue) {
//       low = mid + 1;
//     } else if (nums[mid] < leftValue) {
//       high = mid - 1;
//     }
//   }

//   return low;
// }

function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
}

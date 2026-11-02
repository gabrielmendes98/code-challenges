// function sortedSquares(nums: number[]): number[] {
//     const squared = nums.map(num => num * num)
//     return squared.sort((a,b) => a - b)
// };

function sortedSquares(nums: number[]): number[] {
  const squared: number[] = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      squared.splice(0, 0, nums[left] * nums[left]);
      left++;
    } else {
      squared.splice(0, 0, nums[right] * nums[right]);
      right--;
    }
  }

  return squared;
}

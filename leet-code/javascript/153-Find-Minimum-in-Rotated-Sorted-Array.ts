// function findMin(nums: number[]): number {
//     let left = 0
//     let right = nums.length - 1

//     while(left <= right) {
//          const middle = Math.floor((left+right)/2)
//          if(nums[middle] >= nums[0] && nums[middle] >= nums[nums.length - 1]) {
//              left = middle + 1
//          } else {
//              right = middle - 1
//          }
//     }

//     return nums[left] ?? nums[0]
// };

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
}

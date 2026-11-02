// function majorityElement(nums: number[]): number {
//     const elementsCount = {}
//     let biggest = nums[0]

//     for(let numIndex in nums) {
//         const num = nums[numIndex]
//         if(elementsCount[num] !== undefined) {
//             elementsCount[num] += 1
//         } else {
//             elementsCount[num] = 1
//         }

//         if(elementsCount[biggest] < elementsCount[num]) {
//             biggest = num
//         }
//     }

//     return biggest
// };

function majorityElement(nums: number[]): number {
  let res = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i];
    }

    if (nums[i] === res) {
      count++;
    } else {
      count--;
    }
  }

  return res;
}

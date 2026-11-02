// function twoSum(numbers: number[], target: number): number[] {
//     const lastIndex = numbers.length - 1
//     let current = 0
//     let next = current + 1

//     while(current < lastIndex) {
//         const sum = numbers[current] + numbers[next]
//         if(sum === target) {
//             return [current + 1, next + 1]
//         }

//         if(next < lastIndex && sum < target) {
//             next++
//         } else {
//             current++
//             next = current + 1
//         }
//     }
// };

function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1];
    }

    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  return [1, 2];
}

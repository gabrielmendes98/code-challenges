// function topKFrequent(nums: number[], k: number): number[] {
//   const numCount = {};
//   const max = {};

//   for (let num of nums) {
//     if (numCount[num]) {
//       numCount[num]++;
//     } else {
//       numCount[num] = 1;
//     }

//     if (max[num]) {
//       max[num]++;
//     } else if (Object.keys(max).length === k) {
//       for (let el of Object.keys(max)) {
//         if (max[el] < numCount[num]) {
//           delete max[el];
//           max[num] = numCount[num];
//           break;
//         }
//       }
//     } else {
//       max[num] = numCount[num];
//     }
//   }

//   const res: number[] = [];
//   for (let el of Object.keys(max)) {
//     res.push(Number(el));
//   }

//   return res;
// }

function topKFrequent(nums: number[], k: number): number[] {
  const count = {};
  const freq: number[][] = [];

  for (let i = 0; i < nums.length + 1; i++) {
    freq[i] = [];
  }

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let key of Object.keys(count)) {
    freq[count[key]].push(Number(key));
  }

  const res: number[] = [];

  for (let i = freq.length - 1; i > 0; i--) {
    for (let j = 0; j < freq[i].length; j++) {
      res.push(freq[i][j]);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
}

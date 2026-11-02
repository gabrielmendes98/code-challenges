// first - brute force
// function lengthOfLongestSubstring(s: string): number {
//     if(s === '') {
//         return 0
//     }

//     let sum = 1
//     let biggestSum = 1
//     let validatedChars = []
//     for(let i = 0; i < s.length - 1; i++) {
//         validatedChars.push(s[i])

//         for(let j = i + 1; j < s.length && !validatedChars.includes(s[j]); j++) {
//             sum++
//             validatedChars.push(s[j])

//             if(sum > biggestSum) {
//                biggestSum = sum
//             }
//         }

//         validatedChars = []
//         sum = 1
//     }

//     return biggestSum
// };

// second - sliding window
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set();
  let left = 0;
  let sum = 0;
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    sum = Math.max(sum, right - left + 1);
  }
  return sum;
}

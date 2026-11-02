function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}

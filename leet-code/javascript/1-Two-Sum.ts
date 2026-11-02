function twoSum(nums: number[], target: number): number[] {
  const results = {};
  for (let index in nums) {
    const num = nums[index];
    const result = target - num;

    if (results[result]) {
      return [results[result], index];
    }

    results[num] = index;
  }

  return [-1, -1];
}

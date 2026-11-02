function rob(nums: number[]): number {
  const max: number[] = [];
  max[0] = 0;
  max[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max[i + 1] = Math.max(max[i], max[i - 1] + nums[i]);
  }

  return max[nums.length];
}

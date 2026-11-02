function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] !== undefined) {
      if (Math.abs(map[num] - i) <= k) {
        return true;
      }
    }
    map[num] = i;
  }

  return false;
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const removed = nums.shift()!;
    const permutations = permute(nums);

    permutations.forEach((permutation) => permutation.push(removed));
    result.push(...permutations);
    nums.push(removed);
  }

  return result;
}

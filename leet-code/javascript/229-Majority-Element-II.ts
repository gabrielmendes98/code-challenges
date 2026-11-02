function majorityElement(nums: number[]): number[] {
  let num1 = -1;
  let num2 = -1;
  let c1 = 0;
  let c2 = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === num1) {
      c1++;
    } else if (nums[i] === num2) {
      c2++;
    } else if (c1 === 0) {
      num1 = nums[i];
      c1 = 1;
    } else if (c2 === 0) {
      num2 = nums[i];
      c2 = 1;
    } else {
      c1--;
      c2--;
    }
  }

  const ans: number[] = [];
  c1 = 0;
  c2 = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] === num1) {
      c1++;
    } else if (nums[i] === num2) {
      c2++;
    }
  }

  if (c1 > len / 3) {
    ans.push(num1);
  }
  if (c2 > len / 3) {
    ans.push(num2);
  }

  return ans;
}

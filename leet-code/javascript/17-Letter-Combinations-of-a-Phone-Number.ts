function letterCombinations(digits: string): string[] {
  const res = [];
  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function backtrack(index: number, current: string) {
    if (current.length === digits.length) {
      res.push(current);
      return;
    }

    for (let char of phone[digits[index]]) {
      backtrack(index + 1, current + char);
    }
  }

  if (digits) {
    backtrack(0, '');
  }

  return res;
}

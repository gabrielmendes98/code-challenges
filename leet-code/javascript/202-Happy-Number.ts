function isHappy(n: number): boolean {
  let str = String(n);
  const testedNumbers = {};
  let res = 0;

  while (res !== 1 && !testedNumbers[str]) {
    res = 0;
    for (let numStr of str) {
      const num = Number(numStr);
      const square = num * num;
      res += square;
    }
    testedNumbers[str] = true;
    str = String(res);
  }

  return res === 1;
}

function intToRoman(num: number): string {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = '';

  while (num > 0) {
    let value = '';
    for (let property in roman) {
      if (roman[property] <= num) {
        value = property;
      } else {
        break;
      }
    }
    result += value;
    num -= roman[value];
  }

  return result;
}

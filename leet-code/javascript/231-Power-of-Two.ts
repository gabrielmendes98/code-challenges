// function isPowerOfTwo(n: number): boolean {
//   return Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
// }

function isPowerOfTwo(n: number): boolean {
  let i = 1;

  while (i < n) {
    i *= 2;
  }

  return i === n;
}

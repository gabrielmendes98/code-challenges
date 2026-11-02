function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prevprev = 1;
  let prev = 2;
  let current;

  for (let i = 2; i < n; i++) {
    current = prevprev + prev;
    prevprev = prev;
    prev = current;
  }

  return current;
}

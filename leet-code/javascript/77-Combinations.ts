function combine(n: number, k: number): number[][] {
  let combinations: number[][] = [];

  function backtracking(start: number, combination: number[]) {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      backtracking(i + 1, combination);
      combination.pop();
    }
  }

  backtracking(1, []);

  return combinations;
}

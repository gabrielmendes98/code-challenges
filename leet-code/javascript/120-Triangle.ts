function minimumTotal(triangle: number[][]): number {
  const store: number[] = new Array(
    triangle[triangle.length - 1].length + 1
  ).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      const sum = triangle[i][j] + Math.min(store[j], store[j + 1]);
      store[j] = sum;
    }
  }

  return store[0];
}

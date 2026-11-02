function updateMatrix(mat: number[][]): number[][] {
  const queue: number[][] = [];
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }

  for (let [r, c] of queue) {
    for (let [offsetR, offsetC] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const i = r + offsetR;
      const j = c + offsetC;
      if (0 <= i && i < m && 0 <= j && j < n && mat[i][j] === -1) {
        mat[i][j] = mat[r][c] + 1;
        queue.push([i, j]);
      }
    }
  }

  return mat;
}

function orangesRotting(grid: number[][]): number {
  let minute = 0;
  let freshOranges = 0;
  const rotten: number[][][] = [];
  const m = grid.length;
  const n = grid[0].length;

  let aux: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        aux.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }
  pushIfExists(rotten, aux);

  for (let group of rotten) {
    minute++;
    aux = [];
    for (let [r, c] of group) {
      for (let [i, j] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const ri = r + i;
        const cj = c + j;
        if (ri < m && ri >= 0 && cj < n && cj >= 0 && grid[ri][cj] === 1) {
          grid[ri][cj] = 2;
          aux.push([ri, cj]);
          freshOranges--;
        }
      }
    }
    pushIfExists(rotten, aux);
  }

  if (freshOranges) {
    return -1;
  }

  return minute === 0 ? minute : minute - 1;
}

function pushIfExists(rotten: number[][][], aux: number[][]) {
  if (aux.length) {
    rotten.push(aux);
  }
}

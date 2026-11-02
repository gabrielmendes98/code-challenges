function isValidSudoku(board: string[][]): boolean {
  let present = {};

  // validate all rows
  for (let i = 0; i < 9; i++) {
    present = {};
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== '.') {
        if (present[value]) {
          return false;
        } else {
          present[value] = true;
        }
      }
    }
  }

  // validate all columns
  for (let i = 0; i < 9; i++) {
    present = {};
    for (let j = 0; j < 9; j++) {
      const value = board[j][i];
      if (value !== '.') {
        if (present[value]) {
          return false;
        } else {
          present[value] = true;
        }
      }
    }
  }

  // validate squares
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      present = {};
      for (let bx = x; bx < x + 3; bx++) {
        for (let by = y; by < y + 3; by++) {
          const value = board[bx][by];
          if (value !== '.') {
            if (present[value]) {
              return false;
            } else {
              present[value] = true;
            }
          }
        }
      }
    }
  }

  return true;
}

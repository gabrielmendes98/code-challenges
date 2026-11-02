/**
 Do not return anything, modify matrix in-place instead.
 */
// function setZeroes(matrix: number[][]): void {
//     const rowsCount = matrix.length
//     const columnsCount = matrix[0].length
//     const positionsWithZero: number[][] = []

//     for(let i = 0; i < rowsCount; i++) {
//         for(let j = 0; j < columnsCount; j++) {
//             if(matrix[i][j] === 0) {
//                 positionsWithZero.push([i,j])
//             }
//         }
//     }

//     for(let position of positionsWithZero) {
//         for(let i = 0; i < rowsCount; i++) {
//             matrix[i][position[1]] = 0
//         }

//         for(let j = 0; j < columnsCount; j++) {
//             matrix[position[0]][j] = 0
//         }
//     }
// };

function setZeroes(matrix: number[][]): void {
  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;
  let firstRow = false;

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        if (i === 0) {
          firstRow = true;
        } else {
          matrix[i][0] = 0;
        }
      }
    }
  }

  for (let i = 1; i < rowsCount; i++) {
    for (let j = 1; j < columnsCount; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 1; i < rowsCount; i++) {
      matrix[i][0] = 0;
    }
  }

  if (firstRow) {
    for (let i = 0; i < columnsCount; i++) {
      matrix[0][i] = 0;
    }
  }
}

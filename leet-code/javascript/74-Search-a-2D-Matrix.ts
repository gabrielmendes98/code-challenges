function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  const lastRowIndex = matrix[0].length - 1;
  let rowIndexToSearch = 0;

  // find row
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (matrix[middle][0] <= target && matrix[middle][lastRowIndex] >= target) {
      rowIndexToSearch = middle;
      break;
    } else if (
      matrix[middle][0] < target &&
      matrix[middle][lastRowIndex] < target
    ) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  left = 0;
  right = lastRowIndex;

  // search in row
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (matrix[rowIndexToSearch][middle] === target) {
      return true;
    } else if (matrix[rowIndexToSearch][middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
}

// function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
//     let compareValue = image[sr][sc]

//     if(compareValue === color) {
//         return image
//     }

//     const visitedNodes = []
//     image[sr][sc] = color
//     let r = sr
//     let c = sc
//     while(true) {
//         const top = image[r-1]?.[c]
//         const bottom = image[r+1]?.[c]
//         const right = image[r]?.[c+1]
//         const left = image[r]?.[c-1]

//         if(top === compareValue) {
//             image[r-1][c] = color
//             visitedNodes.push([r-1, c])
//         }
//         if(bottom === compareValue){
//             image[r+1][c] = color
//             visitedNodes.push([r+1, c])
//         }
//         if(right === compareValue) {
//             image[r][c+1] = color
//             visitedNodes.push([r, c+1])
//         }
//         if(left === compareValue) {
//             image[r][c-1] = color
//             visitedNodes.push([r, c-1])
//         }

//         if(visitedNodes.length === 0) {
//             return image
//         }

//         [r,c] = visitedNodes.shift()
//     }
// };

function dfs(
  image: number[][],
  sr: number,
  rowLength: number,
  sc: number,
  columnLength: number,
  color: number,
  source: number
) {
  if (sr < 0 || sc < 0 || sr >= rowLength || sc >= columnLength) {
    return;
  }
  if (image[sr][sc] !== source) {
    return;
  }

  image[sr][sc] = color;

  dfs(image, sr - 1, rowLength, sc, columnLength, color, source); // top
  dfs(image, sr, rowLength, sc + 1, columnLength, color, source); // right
  dfs(image, sr + 1, rowLength, sc, columnLength, color, source); // bottom
  dfs(image, sr, rowLength, sc - 1, columnLength, color, source); // left
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const source = image[sr][sc];
  if (color === source) {
    return image;
  }
  const rowLength = image.length;
  const columnLength = image[0].length;
  dfs(image, sr, rowLength, sc, columnLength, color, source);
  return image;
}

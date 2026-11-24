class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        numOfCols = len(matrix[0])
        numOfRows = len(matrix)

        for row in range(numOfRows):
            for col in range(numOfCols):
                if matrix[row][col] == 0:
                    # Transform same line into zeros
                    prevCol = col - 1
                    while prevCol >= 0 and matrix[row][prevCol] != 0:
                        matrix[row][prevCol] = 'x'
                        prevCol -= 1
                    nextCol = col + 1
                    while nextCol < numOfCols and matrix[row][nextCol] != 0:
                        if matrix[row][nextCol] != 0:
                            matrix[row][nextCol] = 'x'
                        nextCol += 1

                    # Transform same col into zeros
                    prevRow = row - 1
                    while prevRow >= 0 and matrix[prevRow][col] != 0:
                        matrix[prevRow][col] = 'x'
                        prevRow -= 1
                    
                    nextRow = row + 1
                    while nextRow < numOfRows and matrix[nextRow][col] != 0:
                        if matrix[nextRow][col] != 0:
                            matrix[nextRow][col] = 'x'
                        nextRow += 1


        for row in range(numOfRows):
            for col in range(numOfCols):
                if matrix[row][col] == 'x':
                    matrix[row][col] = 0

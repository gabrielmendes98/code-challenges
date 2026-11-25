class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        numOfCols, numOfRows = len(matrix[0]), len(matrix)
        zeroFirstRow = any(value == 0 for value in matrix[0])
        zeroFirstCol = any(row[0] == 0 for row in matrix)

        for row in range(1, numOfRows):
            for col in range(1, numOfCols):
                if matrix[row][col] == 0:
                        matrix[0][col] = 0
                        matrix[row][0] = 0

        for row in range(1, numOfRows):
            for col in range(1, numOfCols):
                if matrix[row][0] == 0 or matrix[0][col] == 0:
                    matrix[row][col] = 0

        if zeroFirstRow:
            for col in range(numOfCols):
                matrix[0][col] = 0
        
        if zeroFirstCol:
            for row in range(numOfRows):
                matrix[row][0] = 0
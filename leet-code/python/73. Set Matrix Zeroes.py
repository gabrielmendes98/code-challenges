class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        numOfCols = len(matrix[0])
        numOfRows = len(matrix)
        zeroFirstCol = False
        zeroFirstRow = False

        for row in range(numOfRows):
            for col in range(numOfCols):
                if matrix[row][col] == 0:
                    if row == 0:
                        zeroFirstRow = True
                        matrix[0][col] = 'x'
                    elif col == 0:
                        zeroFirstCol = True
                        matrix[row][0] = 'x'
                    else:
                        matrix[0][col] = 'x'
                        matrix[row][0] = 'x'

        for row in range(numOfRows):
            if matrix[row][0] == 'x':
                for col in range(1, numOfCols):
                    if matrix[row][col] != 'x':
                        matrix[row][col] = 'y'
        
        for col in range(numOfCols):
            if matrix[0][col] == 'x':
                for row in range(1, numOfRows):
                    if matrix[row][col] != 'x':
                        matrix[row][col] = 'y'

        for row in range(numOfRows):
            for col in range(numOfCols):
                if matrix[row][col] == 'x' or matrix[row][col] == 'y':
                    matrix[row][col] = 0
                elif zeroFirstRow and row == 0:
                    matrix[row][col] = 0
                elif zeroFirstCol and col == 0:
                    matrix[row][col] = 0

class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        zeroLocations = set()
        numCols = len(matrix[0])

        for rowIndex, row in enumerate(matrix):
            for columnIndex, column in enumerate(row):
                if column == 0:
                    zeroLocations.add((rowIndex, columnIndex))

        for coords in zeroLocations:
            # transform all columns
            for row in matrix:
                row[coords[1]] = 0
            # transform all items in a row
            for i in range(numCols):
                matrix[coords[0]][i] = 0


        
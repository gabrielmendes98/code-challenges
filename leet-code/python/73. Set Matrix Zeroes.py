class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        columnsToTransform = {}
        
        for rowIndex, row in enumerate(matrix):
            shouldTransformRowInZero = False
            for columnIndex, item in enumerate(row):
                if item == 0:
                    columnsToTransform[columnIndex] = rowIndex
                    if shouldTransformRowInZero == False:
                        currColumn = columnIndex - 1
                        while currColumn >= 0:
                            matrix[rowIndex][currColumn] = 0
                            currColumn -= 1
                    shouldTransformRowInZero = True
                if shouldTransformRowInZero:
                    matrix[rowIndex][columnIndex] = 0
                if columnIndex in columnsToTransform:
                    matrix[rowIndex][columnIndex] = 0
                    prevRow = rowIndex - 1
                    while prevRow >= 0 and prevRow < columnsToTransform[columnIndex]:
                        matrix[prevRow][columnIndex] = 0
                        prevRow -= 1
            


        
class Solution:
    def markIsland(self, grid, m, n):
        if grid[m][n] == "0" or grid[m][n] == "x":
            return 0
        grid[m][n] = "x"
        gridEndBottom = len(grid) - 1
        gridEndRight = len(grid[0]) - 1
        if n < gridEndRight:
            self.markIsland(grid, m, n + 1)
        if m < gridEndBottom:
            self.markIsland(grid, m + 1, n)
        if n > 0:
            self.markIsland(grid, m, n - 1)
        if m > 0:
            self.markIsland(grid, m - 1, n)
        return 1


    def numIslands(self, grid: List[List[str]]) -> int:
        numberOfIslands = 0
        for m, row in enumerate(grid):
            for n, value in enumerate(row):
                s = self.markIsland(grid, m, n)
                numberOfIslands += s
        return numberOfIslands
        

# Memory improved:
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])
        numberOfIslands = 0

        def markIsland(m, n):
            if (
                m >= rows or n >= cols or
                m < 0 or n < 0 or
                grid[m][n] == "0" 
            ):
                return

            grid[m][n] = "0"

            markIsland(m, n + 1)
            markIsland(m + 1, n)
            markIsland(m, n - 1)
            markIsland(m - 1, n)

            return

        for m in range(rows):
            for n in range(cols):
                if grid[m][n] == "1":
                    markIsland(m, n)
                    numberOfIslands += 1
        return numberOfIslands
        
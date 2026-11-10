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
        
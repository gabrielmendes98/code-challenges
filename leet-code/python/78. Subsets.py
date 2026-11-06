class Solution:       
    def subsets(self, nums: list[int]) -> list[list[int]]:
        result = []

        def findSubset(i, current):
            if i == len(nums):
                result.append(current.copy())
                return

            current.append(nums[i])
            findSubset(i + 1, current)

            current.pop()
            findSubset(i + 1, current)

            return

        findSubset(0, [])
        
        return result

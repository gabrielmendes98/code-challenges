class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        result = []

        def backtracking(n):
            if n == len(nums):
                result.append(nums.copy())
                return 

            for i in range(n, len(nums)):
                nums[i], nums[n] = nums[n], nums[i]
                backtracking(n + 1)
                nums[i], nums[n] = nums[n], nums[i]

        backtracking(0)

        return result
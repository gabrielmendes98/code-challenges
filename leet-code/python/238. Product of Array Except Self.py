# Solution with O(n) space
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        left = [1] * len(nums)
        right = [1] * len(nums) 

        for i in range(1, len(nums)):
            left[i] = nums[i-1] * left[i-1]

        for i in range(len(nums) - 2, -1, -1):
            right[i] = nums[i+1] * right[i+1]

        for i in range(len(nums)):
            right[i] = right[i] * left[i]

        return right
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

# With O(1) space
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        result = [1] * len(nums)

        for i in range(1, len(nums)):
            result[i] = nums[i-1] * result[i-1]

        rightProduct = nums[-1]

        for i in range(len(nums) - 2, -1, -1):
            result[i] *= rightProduct
            rightProduct *= nums[i]

        return result
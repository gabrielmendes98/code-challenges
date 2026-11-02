class Solution:
    def search(self, nums: list[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        while start <= end:
            middle = (end + start) // 2
            if nums[middle] == target:
                return middle
            elif nums[middle] > target:
                end = middle - 1
            else:
                start = middle + 1
        return -1
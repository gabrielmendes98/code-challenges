class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        lastSet = set(nums)
        longest = 0

        for key in lastSet:
            if key - 1 in lastSet:
                continue
            length = 1
            nextKey = key + 1
            while nextKey in lastSet:
                length += 1
                nextKey += 1
            
            if length > longest:
                longest = length

        return longest
            
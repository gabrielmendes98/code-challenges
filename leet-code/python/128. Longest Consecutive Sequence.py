class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        lastSet = {}
        longest = 0

        for num in nums:
            if num not in lastSet:
                lastSet[num] = 0

        for key in lastSet.keys():
            if lastSet[key]:
                continue
            lastSet[key] = 1
            nextKey = key + 1
            while nextKey in lastSet:
                if lastSet[nextKey]:
                    lastSet[key] += lastSet[nextKey]
                    break
                else:
                    lastSet[nextKey] = 1
                    lastSet[key] += 1
                    nextKey += 1
            
            if lastSet[key] > longest:
                longest = lastSet[key]

        return longest
            
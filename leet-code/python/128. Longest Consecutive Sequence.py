class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        lastSet = {}
        visited = {}
        longest = 0

        for num in nums:
            if num not in lastSet:
                lastSet[num] = 1

        for key in lastSet.keys():
            if key in visited:
                continue
            visited[key] = True
            nextKey = key + 1
            while nextKey in lastSet:
                if nextKey in visited:
                    lastSet[key] += lastSet[nextKey]
                    break
                else:
                    visited[nextKey] = True
                    lastSet[key] += 1
                    nextKey += 1
            
            if lastSet[key] > longest:
                longest = lastSet[key]

        return longest
            
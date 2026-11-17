# O(n log n) solution:
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        elements = dict()

        for num in nums:
            elements[num] = elements.get(num, 0) + 1

        sortedElements = sorted(
            elements, 
            key=elements.get, 
            reverse=True
        )

        return sortedElements[:k]
        
# O(n) solution - bucket sort
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        frquencies = dict()

        for num in nums:
            frquencies[num] = frquencies.get(num, 0) + 1

        buckets = [[] for _ in range(len(nums) + 1)]

        for num, freq in frquencies.items():
            buckets[freq].append(num)

        result = []

        for freq in range(len(buckets) - 1, 0, -1):
            for num in buckets[freq]:
                result.append(num)
                if len(result) == k:
                    return result

        return result
        
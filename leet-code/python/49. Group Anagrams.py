class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        anagrams = {}

        for word in strs:
            ordered = str(sorted(word))
            if ordered in anagrams:
                anagrams[ordered].append(word)
            else:
                anagrams[ordered] = [word]

        return list(anagrams.values())

# Improvement 1 (this is already the best time complexity we can achieve)
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        anagrams = {}

        for word in strs:
            ordered = [0] * 26
            for char in word:
                ordered[ord(char) - ord('a')] += 1
            orderedStr = str(ordered)
            if orderedStr in anagrams:
                anagrams[orderedStr].append(word)
            else:
                anagrams[orderedStr] = [word]

        return list(anagrams.values())

# Improvement 2 
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        anagrams = dict()
        a =  ord('a')

        for word in strs:
            ordered = [0] * 26
            for char in word:
                ordered[ord(char) - a] += 1
            orderedKey = tuple(ordered)
            anagrams.setdefault(orderedKey, []).append(word)
        return list(anagrams.values())
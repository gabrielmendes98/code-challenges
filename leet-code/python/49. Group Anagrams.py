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
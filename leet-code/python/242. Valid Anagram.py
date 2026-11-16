class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        chars = {}

        if len(s) != len(t):
            return False

        for a, b in zip(s, t):
            if a in chars:
                chars[a] += 1
                if chars[a] == 0:
                    chars.pop(a)
            else:
                chars[a] = 1

            if b in chars:
                chars[b] -= 1
                if chars[b] == 0:
                    chars.pop(b)
            else:
                chars[b] = -1
            
        return not chars
        
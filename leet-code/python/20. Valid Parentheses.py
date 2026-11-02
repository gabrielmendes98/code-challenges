class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2:
            return False

        pairs = {"(": ")", "[": "]", "{": "}"}
        stack = []
        for char in s:
            if char in pairs:
                stack.append(pairs[char])
            elif not stack or stack.pop() != char:
                return False
        return not stack

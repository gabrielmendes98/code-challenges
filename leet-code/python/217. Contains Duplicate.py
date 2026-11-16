class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        saw = dict()

        for num in nums:
            if num in saw:
                return True
            else:
                saw[num] = True
        
        return False
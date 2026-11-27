class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        j = 0
        nums1[:] = nums1[:m]
        for i in range(n):
            while j < len(nums1) and nums2[i] >= nums1[j]:
                j += 1

            nums1.insert(j, nums2[i])

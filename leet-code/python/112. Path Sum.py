# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode | None, targetSum: int) -> bool:
        if root is None:
            return False
        if root.val == targetSum:
            return True
        if root.left:
            root.left.val += root.val
            left_has_sum = self.hasPathSum(root.left, targetSum)
            if left_has_sum:
                return True
        if root.right:
            root.right.val += root.val
            right_has_sum = self.hasPathSum(root.right, targetSum)
            if right_has_sum:
                return True

        return False
        

# Another solution
# 
# class Solution:
#     def hasPathSum(self, root: TreeNode | None, targetSum: int) -> bool:
#         if root is None:
#             return False
#         targetSum = targetSum - root.val
#         if root.left is None and root.right is None:
#             return targetSum == 0
#         return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)

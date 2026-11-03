# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def heightAndBalance(self, root: TreeNode | None):
        if root is None:
            return 0, True

        left_height, left_balanced = self.heightAndBalance(root.left)
        right_height, right_balanced = self.heightAndBalance(root.right)

        height = 1 + max(left_height, right_height)

        balanced = (
            left_balanced
            and right_balanced
            and abs(left_height - right_height) <= 1
        )

        return height, balanced

    def isBalanced(self, root: TreeNode | None) -> bool:
        _, balanced = self.heightAndBalance(root)
        return balanced


# Other solution:
# 
# class Solution:
#     def balancedHeight(self, root: TreeNode | None):
#         if root is None:
#             return 0

#         left_height = self.balancedHeight(root.left)

#         if left_height == -1:
#             return -1

#         right_height  = self.balancedHeight(root.right)

#         if right_height == -1:
#             return -1
        
#         if abs(left_height - right_height) > 1:
#             return -1

#         return 1 + max(left_height, right_height)

#     def isBalanced(self, root: TreeNode | None) -> bool:
#         return self.balancedHeight(root) != -1
        
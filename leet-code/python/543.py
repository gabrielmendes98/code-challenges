# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def heightAndDiameter(self, root):
        if root is None:
            return 0, 0
        heightLeft, diameterLeft = self.heightAndDiameter(root.left)
        heightRight, diameterRight = self.heightAndDiameter(root.right)

        height = 1 + max(heightLeft, heightRight)
        diameterThroughRoot = heightLeft + heightRight
        diameter = max(diameterLeft, diameterRight, diameterThroughRoot)

        return height, diameter
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        _, diameter = self.heightAndDiameter(root)
        return diameter
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        if p is None or q is None:
            return p == q
        is_left_equal = self.isSameTree(p.left, q.left)
        is_right_equal = self.isSameTree(p.right, q.right)
        return p.val == q.val and is_left_equal and is_right_equal
        

# Better solution (short-circuit evaluation):
#
# class Solution:
#     def isSameTree(self, p, q):
#         if p is None or q is None:
#             return p is q

#         if p.val != q.val:
#             return False

#         return (
#             self.isSameTree(p.left, q.left)
#             and self.isSameTree(p.right, q.right)
#         )

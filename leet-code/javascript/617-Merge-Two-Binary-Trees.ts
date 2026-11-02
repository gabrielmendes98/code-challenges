/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNodes(node1: TreeNode | null, node2: TreeNode | null) {
  if (!node1) {
    return node2.val;
  }

  if (!node2) {
    return node1.val;
  }

  return node1.val + node2.val;
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }

  const mergedNode = new TreeNode(sumNodes(root1, root2));
  mergedNode.left = mergeTrees(root1?.left, root2?.left);
  mergedNode.right = mergeTrees(root1?.right, root2?.right);

  return mergedNode;
}

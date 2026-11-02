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

 function tree2str(root: TreeNode | null): string {
    const res: string[] = []
    
    function generateTree(root) {
        if(!root) {
            return
        }
        
        
        res.push('(')
        res.push(root.val)
        
        if(!root.left && root.right) {
            res.push('()')
        }
        
        generateTree(root.left)
        generateTree(root.right)
        
        res.push(')')
    }
    generateTree(root)
    
    const str = res.join('')
    
    
    return str.slice(1,str.length-1)
};
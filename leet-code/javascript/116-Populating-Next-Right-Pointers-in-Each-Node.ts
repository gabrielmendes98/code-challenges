/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// dfs
// function connect(root: Node | null): Node | null {
//     if(root === null || (root.left === null && root.right === null)) {
//         return root
//     }

//     root.left.next = root.right
//     root.right.next = root.next ? root.next.left : null

//     connect(root.left)
//     connect(root.right)

//     return root
// };

// bfs
function connect(root: Node | null): Node | null {
  let current = root;
  let nextLevel = root?.left;

  while (current && nextLevel) {
    current.left.next = current.right;
    if (current.next) {
      current.right.next = current.next.left;
    }

    current = current.next;
    if (!current) {
      current = nextLevel;
      nextLevel = nextLevel.left;
    }
  }
  return root;
}

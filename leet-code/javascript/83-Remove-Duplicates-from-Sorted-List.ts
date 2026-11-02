/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode((head?.val || 0) - 1, head);
  let left = dummy;
  let right = head;

  while (right) {
    if (right.val === left.val) {
      right = right.next;
      left.next = right;
    } else {
      left.next = right;
      right = right.next;
      left = left.next;
    }
  }

  return dummy.next;
}

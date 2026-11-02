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

function deleteMiddle(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let l = dummy;
  let r = head;
  while (r && r.next) {
    l = l.next;
    r = r.next.next;
  }

  l.next = l.next.next;
  return dummy.next;
}

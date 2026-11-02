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

function findIntersect(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return slow;
    }
  }

  return null;
}

function detectCycle(head: ListNode | null): ListNode | null {
  let intersection = findIntersect(head);

  if (!intersection) {
    return null;
  }

  let begin = head;

  while (begin !== intersection) {
    begin = begin.next;
    intersection = intersection.next;
  }

  return begin;
}

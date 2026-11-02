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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0, null);

  mergeLists(dummy, list1, list2);

  return dummy.next;
}

function mergeLists(
  dummy: ListNode,
  list1: ListNode | null,
  list2: ListNode | null
) {
  if (!list1) {
    return (dummy.next = list2);
  }

  if (!list2) {
    return (dummy.next = list1);
  }

  if (list1.val < list2.val) {
    dummy.next = list1;
    mergeLists(dummy.next, list1.next, list2);
  } else {
    dummy.next = list2;
    mergeLists(dummy.next, list1, list2.next);
  }
}

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

// function getLength(head: ListNode | null): number {
//     let length = 0
//     while(head) {
//         length++
//         head = head.next
//     }
//     return length
// }

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     const aLength = getLength(headA)
//     const bLength = getLength(headB)

//     let dif = Math.abs(aLength - bLength)

//     if(dif === 0 && headA.next === headB && headB.next === headA) {
//         return headA
//     }

//     if(aLength > bLength) {
//         while(dif && headA) {
//             headA = headA.next
//             dif--
//         }
//     }

//     if(bLength > aLength) {
//         while(dif && headB) {
//             headB = headB.next
//             dif--
//         }
//     }

//     while(headA && headB) {
//         if(headA.next === headB.next && headA.next !== null && headB.next !== null) {
//             return headA.next
//         }
//         headA = headA.next
//         headB = headB.next
//     }

//     return null
// };

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let a = headA;
  let b = headB;
  while (a !== b) {
    if (a) {
      a = a.next;
    } else {
      a = headB;
    }

    if (b) {
      b = b.next;
    } else {
      b = headA;
    }
  }
  return a;
}

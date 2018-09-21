/**
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let c = 0;
  let first = l1

  while(true) {
    let sum = l1.val + l2.val + c
    l1.val = sum % 10
    c = sum >= 10 ? 1 : 0
    
    if (!l1.next && l2.next) { // l2 还有剩余
      l1.next = new ListNode(0)
    } else if (l1.next && !l2.next) { // l1 还有剩余
      l2.next = new ListNode(0)
    } else if (!l1.next && !l2.next) {
      break;
    }
    l1 = l1.next
    l2 = l2.next
  }

  if (c > 0) {
    l1.next = new ListNode(c)
  }
  return first
};
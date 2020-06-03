/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let l1Head = l1;
  let l2Head = l1Head;
  let sum = [];
  while (l1Head) {
    sum.push(l1Head.val + l2Head.val);
    l1Head = l1Head.next;
  }
  return sum;
};
// @lc code=end

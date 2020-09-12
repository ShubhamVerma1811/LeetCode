/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (39.54%)
 * Likes:    3624
 * Dislikes: 376
 * Total Accepted:    465.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 *
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 *
 *
 * Input: 1->2->2->1
 * Output: true
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
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
 * @param {ListNode} head
 * @return {boolean}
 */

//  Approach using Stack
var isPalindrome = function (head) {
  let stack = [];
  let top;
  let curr = head;
  let isPalin = true;
  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }
  while (head) {
    top = stack.pop();

    if (head.val === top) isPalin = true;
    else {
      isPalin = false;
      break;
    }
    head = head.next;
  }
  return isPalin;
};

// Two Pointer Approach
const isPalindrome = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;
  slow = reverse(slow);
  while (slow) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

const reverse = (head) => {
  if (!head || !head.next) return head;
  const revHead = reverse(head.next);

  head.next.next = head;
  head.next = null;
  return revHead;
};
// @lc code=end

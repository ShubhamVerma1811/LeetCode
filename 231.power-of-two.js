/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (42.97%)
 * Likes:    931
 * Dislikes: 198
 * Total Accepted:    356.5K
 * Total Submissions: 816.4K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * Example 3:
 *
 *
 * Input: 218
 * Output: false
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (num) => {
  while (num > 1) {
    if (num % 2 === 0) num /= 2;
    else return false;
  }
  return num === 1 ? true : false;
};
// @lc code=end

/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 *
 * https://leetcode.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (41.32%)
 * Likes:    562
 * Dislikes: 213
 * Total Accepted:    163.8K
 * Total Submissions: 393.7K
 * Testcase Example:  '16'
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a
 * power of 4.
 *
 * Example 1:
 *
 *
 * Input: 16
 * Output: true
 *
 *
 *
 * Example 2:
 *
 *
 * Input: 5
 * Output: false
 *
 *
 * Follow up: Could you solve it without loops/recursion?
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = (num) => {
  while (num > 1) {
    if (num % 4 === 0) num /= 4;
    else return false;
  }
  return num === 1 ? true : false;
};
// @lc code=end

/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (41.95%)
 * Likes:    530
 * Dislikes: 1480
 * Total Accepted:    267.6K
 * Total Submissions: 636.5K
 * Testcase Example:  '27'
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Example 1:
 *
 *
 * Input: 27
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: 0
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: 9
 * Output: true
 *
 * Example 4:
 *
 *
 * Input: 45
 * Output: false
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (num) => {
  while (num > 1) {
    if (num % 3 === 0) num /= 3;
    else return false;
  }
  return num === 1 ? true : false;
};
// @lc code=end

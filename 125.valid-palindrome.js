/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (35.03%)
 * Likes:    1257
 * Dislikes: 3003
 * Total Accepted:    609.6K
 * Total Submissions: 1.7M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * s consists only of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let str = '';
  for (let i of s) {
    if (/[0-9a-zA-Z]/.test(i)) {
      str += i;
    }
  }

  str = str.toLowerCase();

  return str === str.split('').reverse().join('') ? true : false;
};

// BETTER APPROACH
const isPalindrome = (s) => {
  const regex = /[^0-9a-zA-Z]/g;
  const r = s.replace(regex, '').toLowerCase();
  let i = 0,
    j = r.length - 1;

  while (i < j) {
    if (r[i] !== r[j]) return false;
    i++;
    j--;
  }

  return true;
};
// @lc code=end

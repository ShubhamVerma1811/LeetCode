/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (43.50%)
 * Likes:    697
 * Dislikes: 1152
 * Total Accepted:    224.9K
 * Total Submissions: 509.5K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 *
 * Example 1:
 *
 *
 * Input: "hello"
 * Output: "holle"
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "leetcode"
 * Output: "leotcede"
 *
 *
 * Note:
 * The vowels does not include the letter "y".
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = /[aeiouAEIOU]/;
  let arr = s.split('');
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (vowels.test(arr[i]) && vowels.test(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (!vowels.test(arr[i])) {
      i++;
    } else {
      j--;
    }
  }

  return arr.join('');
};

// @lc code=end

/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 *
 * algorithms
 * Medium (64.87%)
 * Likes:    2333
 * Dislikes: 152
 * Total Accepted:    173.4K
 * Total Submissions: 261.5K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
 * appear twice and others appear once.
 *
 * Find all the elements that appear twice in this array.
 *
 * Could you do it without extra space and in O(n) runtime?
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [2,3]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  return [...new Set(nums.filter((num, index) => nums.indexOf(num) != index))];
};

// @lc code=end

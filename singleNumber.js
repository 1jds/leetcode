/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const counts = {};
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // let limit = nums.length;
  // let excluded = []
  // for (let i = 0; i < limit; i++) {
  //   let firstPart = nums.slice(0, i);
  //   if (!nums.includes(nums[i], i + 1)) {
  //     if (!firstPart.includes(nums[i])) {
  //       return nums[i];
  //     }
  //   }
  // }
};

console.log(singleNumber([2, 2, 1]));

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

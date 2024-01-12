/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const counts = {};
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return Object.keys(counts).find((key) => counts[key] === 1) * 1;
};

console.log(singleNumber([2, 2, 1, 2, 1, 3]));

// function getKeyByValue(object, value) {
// 	return Object.keys(object).find(key =>
// 		object[key] === value);
// }

// ans = getKeyByValue(exampleObject, 'Geeks');
// console.log(ans);

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  const setfromNums = [...new Set(nums)];
  setfromNums.map((item, index) => {
    nums[index] = setfromNums[index];
  });
  return setfromNums.length;
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1,2,_]
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

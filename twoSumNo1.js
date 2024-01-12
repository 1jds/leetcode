/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let lengthOfArr = nums.length;
  for (let i = 0; i < lengthOfArr; i++) {
    for (let j = i + 1; j < lengthOfArr; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// [1,2,.2,3,5,6]
// [~2,~5,~6]

var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return nums1;
  } else if (m === 0) {
    for (let q = 0; q < n; q++) {
      nums1[q] = nums2[q];
    }
  }

  let j = m - 1;
  let k = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[j] > nums2[k]) {
      nums1[i] = nums1[j];
      j--;
    } else {
      nums1[i] = nums2[k];
      k--;
    }
    if (k < 0) {
      break;
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));

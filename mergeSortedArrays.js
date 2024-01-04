// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

var merge = function (nums1, m, nums2, n) {
  if (n == 0) {
    return;
  } else if (m == 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  let temp = [];
  let limit = m + n;
  let j = 0;
  let k = 0;
  for (let i = 0; i < limit; i++) {
    if (j < m && nums1[j] < nums2[k]) {
      temp[i] = nums1[j];
      if (j < m) {
        j++;
      }
    } else {
      temp[i] = nums2[k];
      k++;
    }
  }
  nums1 = [...temp];
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]

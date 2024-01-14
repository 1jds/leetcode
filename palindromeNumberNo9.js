/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  s = x + "";
  arr = s.split("");
  halfLength = Math.floor(s.length / 2);
  // console.log(length);
  for (i = 0; i < halfLength; i++) {
    if (arr[i] != arr[arr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// This is the method of casting the int to a string and then comparing characters
// Date: 14/01/2024
// Runtime: 131ms - beats 83.50% of users with JavaScript
// Memory: 50.99MB - beats 58.08% of users with JavaScript

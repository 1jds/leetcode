// THE NON-STRING METHOD

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let z = x;
  // we are setting z equal to the value of x here just for the
  // sake of not mutating the input - as per functional programming
  let arr = [];
  const divideIt = (num) => {
    smallest = num % 10;
    arr.unshift(smallest);
    next = Math.floor(num / 10);
    if (next === 0) {
      return;
    }
    divideIt(next);
  };
  divideIt(z);
  halfLength = Math.floor(arr.length / 2);
  for (i = 0; i < halfLength; i++) {
    if (arr[i] != arr[arr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// This is another method which doesn't use any strings
// Date: 15/01/2024
// Runtime: 124ms - beats 92.96% of users with JavaScript
// Memory: 50.73MB - beats 69.77% of users with JavaScript

// THE STRING METHOD

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

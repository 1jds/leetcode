// Version #1

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let stringified = digits.join("");
  let joined = BigInt(stringified);
  joined++;
  let stringed = joined + "";
  return (result = stringed.split("").map((item) => item * 1));
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// Version #2

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arrLength = digits.length;
  for (let i = arrLength - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
};

console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

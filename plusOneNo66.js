/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  console.log("the length of this array is...", digits.length);
  let stringified = digits.join("");
  console.log("stringified: ", stringified);
  let joined = BigInt(stringified);
  console.log("joined: ", joined);
  joined++;
  console.log("joined: ", joined);
  let stringed = joined + "";
  console.log("stringed: ", stringed);
  return (result = stringed.split("").map((item) => item * 1));
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

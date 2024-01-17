/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 0;
  let guess = 0;
  while (result < x) {
    result = guess * guess;
    console.log(guess, result);
    if (result == x) {
      return guess;
    }
    guess++;
  }
  return guess - 2;
};

console.log(mySqrt(15));

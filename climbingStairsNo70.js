// This is easy once you know that the answers follow a fibonacci sequence. Not sure why it is listed as 'easy' though!

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  let sequence = [0, 1, 2];
  let i = 3;
  while (true) {
    let next = sequence[i - 1] + sequence[i - 2];
    if (i > n) {
      break;
    }
    sequence.push(next);
    i++;
  }
  return sequence[n];
};

console.log(climbStairs(5));

/**
 * @param {number} n
 * @return {number}
 */

function factorialize(num) {
  if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
console.log("5! is...", factorialize(4));

var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  } else if (n % 2 == 0) {
  } else {
  }
  console.log(n / 2);
  let count = 0;
  for (let i = 0; 2 * i <= n; i++) {
    console.log("..... ", i);
    count++;
  }
  console.log("count before return is...", count);
  if (n % 2 != 0) {
    count++;
  }
  return count;
};

console.log("The Result is...", climbStairs(2));
console.log("The Result is...", climbStairs(3));
console.log("The Result is...", climbStairs(4));
// console.log("The Result is...", climbStairs(5));

// All 1s first...
// Then introduce one 2 at the end...
// Then two 2s...
// Then all 2s next...
// then introduce one 1 at the end...

// if n = 3

// i = 0

// n - 2 * i + 2 * i = n

// 3 - 2 * 0 + 2 * 0 = 3
// 3 - 2 * 1 + 2 * 1 = 3
// 3 - 2 * 2 + 2 * 2 = 3

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Example 3:
// Input: n = 4
// Output:
// 1. 1 + 1 + 1 + 1      // all 1s is always an option, so we just add one to the total for that case
// 2. 1 + 1 + 2
// 3. 1 + 2 + 1          // n / 2 = how many 2s can fit in n e.g. 4/2 = 2; so, we count down from that
// 4. 2 + 1 + 1
// 5. 2 + 2              // all 2s is always an option for even numbers, and add one if the number is odd (use % 2 == 0 to determine)

// n - count

// STEP 1: work out how many 2s can fit in n (n / 2 = x)
// STEP 2: count down from x           x * 2 = n so add one to count, and decrement x--
// STEP 3: now that x is one less, we have two 1s to play with; so we work out how many combinations there are of one 2 and two 1s

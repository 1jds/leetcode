/**
 * @param {number} n
 * @return {number}
 */

function permute(nums) {
  const result = [];

  const backtrack = (path, choices) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i]);
      const newChoices = choices.filter((_, index) => index !== i);
      backtrack(path, newChoices);
      path.pop();
    }
  };

  backtrack([], nums);
  return result;
}

function rmDupSubArr(arr) {
  return arr.filter((subArr, index) => {
    return (
      index ===
      arr.findIndex((arrItem) => {
        return JSON.stringify(arrItem) === JSON.stringify(subArr);
      })
    );
  });
}

var climbStairs = function (n) {
  let count = 0;
  let arr = [];
  for (let i = 0; i <= n / 2; i++) {
    let sub = [];
    for (let j = i; j > 0; j--) {
      sub.push(2);
      count += 2;
    }
    for (let k = n - i * 2; k > 0; k--) {
      if (count == n) {
        break;
      }
      sub.push(1);
      count++;
    }
    arr.push(sub);
  }
  return arr;
};

function callOthers(arr2D) {
  const limit = arr2D.length;
  let result = [];
  for (i = 0; i < limit; i++) {
    let permutes = permute(arr2D[i]);
    console.log("PERMUTES: .... \n", permutes);
    let cleaned = rmDupSubArr(permutes);
    console.log("CLEANED: .... \n", cleaned);
    result = [...result, ...cleaned];
  }
  return result;
}

let stepOne = climbStairs(5);
let stepTwo = callOthers(stepOne);

console.log("FINAL: .... \n", stepTwo, "\nLENGTH: .... \n", stepTwo.length);

// console.log(climbStairs(5));
// let z = climbStairs(5);
// console.log(permute(z[1]));

// let zz = permute(z[1]);
// console.log(rmDupSubArr(zz));
// let zzz = new Set(z[1]);
// console.log(zzz);

// All 1s first...
// Then introduce one 2 at the end...
// Then two 2s...
// Then all 2s next...
// then introduce one 1 at the end...

// if n = 10

// i = 0

// n - 2 * i + 2 * i = n

// 10 - 2 * 0 + 2 * 0 = 10
// 10 - 2 * 1 + 2 * 1 = 10

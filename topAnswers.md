# LeetCode Top Answers

## 9. Palindrome Number

The two top answers for this question are both interesting. The second fastest (at 92ms) is just a straightforward one-liner using built-in JavaScript functionality. What was interesting about this was that it ran quite fast.

```ts
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};
```

The top answer (at 89ms) was interesting for three reasons:

1. Firstly, it was clever in noticing that palindromic numbers have the same mathematical <em>value</em> read forwards and backwards, and not just the same appearance. This means that if you reverse the order of the numbers, then compare the two <em>values</em> you can obtain your boolean.

2. Also, it is interesting in the way that it efficiently handles the case of negative numbers (which can never be palindromic, under the parameters of the challenge). These are dealt with in the `while(num>0)` conditional. At the same time, would that be obvious to future maintainers?

3. The third interesting thing is the use of the `~~` double tilde. This is actually just two `~`s (which is one of the bitwise operators for JS). Some others include `^` for XOR `<<`, `>>`, and `>>>` for left shift, right shift, and unsigned right. In effect, in this context, this is just performing the same action as `Math.floor(num / 10)` but seems to be much faster.

```ts
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let sum = 0;
  let num = x;

  while (num > 0) {
    const digit = num % 10;
    sum = sum * 10 + digit;
    num = ~~(num / 10);
  }
  return sum == x;
};
```

## 69. Sqrt(x)

This question was quite disappointing actually.

The fastest answer (at 40ms) was this:

```ts
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
```

The second fastest answer (at 41ms) was this:

```ts
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
```

Yeah, so... spot the difference!

This is somewhat disappointing, because it indicates that LeetCode's timings are not completely accurate.

So... I copied and pasted the code and ran it myself. The time came back as 61ms! What the heck?

Also, this is disappointing, because the question description mentions that one should not be using built-in features of the language, but this answer clearly does that. So... LeetCode is a little broken at this point.

On the positive side, this seems like really good performance for the Math class function. Good job JavaScript!

A final point of interest: we can replace `return Math.floor(Math.sqrt(x))` with `return ~~Math.sqrt(x)` as we learned with the top answer for No. 9.

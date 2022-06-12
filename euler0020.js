/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// Project Euler Solution
const factorial = (n) => {
  let answer = BigInt(1);
  if (n === 0 || n === 1) {
    return answer;
  } else {
    for (let i = 2; i <= n; i++) {
      answer = BigInt(answer) * BigInt(i);
    }
    return answer;
  }
}

const factorialDigitSum = (n) => {
  let digits = factorial(n).toString().split('').map(elem => parseInt(elem)).reduce((a, b) => a + b);
  return digits;
}

console.log(factorialDigitSum(100));

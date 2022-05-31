/*
2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2**1000?
*/

// Project Euler Solution
function powerDigitSum(base, exponent) {
  let number = BigInt(Math.pow(base, exponent));
  let answer = number.toString().split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr));
  return answer;
}

console.log(powerDigitSum(2, 1000));

// HackerRank Solution
function processData(input) {

  function powerDigitSum(base, exponent) {
    let number = String(base ** exponent);
    let answer = number.split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr));
    return answer;
  }

  let values = input.split("\n");
  let base = 2n;
  for (let i = 1; i < values.length; i++) {
    let answer = powerDigitSum(base, BigInt(values[i]));
    console.log(parseInt(answer));
  }
}

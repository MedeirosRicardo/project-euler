/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

// Project Euler Solution

// Proper divisors sum
const properDivisorsSum = (num) => {
  let result = 0;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === (num / i)) {
        result += i;
      } else {
        result += (i + num / i);
      }
    }
  }
  return result + 1;
};

// Check if a number is abundant
const isAbundant = (num) => {
  if (properDivisorsSum(num) > num) {
    return true;
  } else {
    return false;
  }
};

const nonAbundantSum = (num) => {
  let abundantNumbers = [];
  let abundantSums = [];

  for (let i = 1; i <= num; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i);
    }
  }

  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = 0; j < abundantNumbers.length; j++) {

      let tempSum = abundantNumbers[i] + abundantNumbers[j];

      if (tempSum <= num) {
        abundantSums.push(tempSum);
      }
    }
  }
  let result = 0;

  for (let i = 0; i <= num; i++) {
    if (!abundantSums.includes(i)) {
      result += i;
    }
  }
  return result;
};

console.log(nonAbundantSum(28123));

// HackerRank Solution
function processData(input) {

  const properDivisorsSum = (num) => {
    let result = 0;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (i === (num / i)) {
          result += i;
        } else {
          result += (i + num / i);
        }
      }
    }
    return result + 1;
  };

  const isAbundant = (num) => {
    if (properDivisorsSum(num) > num) {
      return true;
    } else {
      return false;
    }
  };

  const limit = 28123;
  let abundantNumbers = [];
  let abundantSums = [];

  for (let i = 1; i <= limit; i++) {
    if (isAbundant(i)) {
      abundantNumbers.push(i);
    }
  }

  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = 0; j < abundantNumbers.length; j++) {

      let tempSum = abundantNumbers[i] + abundantNumbers[j];

      if (tempSum <= limit) {
        abundantSums.push(tempSum);
      }
    }
  }

  let inputString = input.split('\n');
  let currentLine = 0;
  const readLine = () => inputString[currentLine++];

  const t = Number(readLine().trim());

  for (let tItr = 0; tItr < t; tItr++) {

    let n = Number(readLine().trim());

    if (n > limit) {
      console.log('YES');
    } else if (abundantSums.includes(n)) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}

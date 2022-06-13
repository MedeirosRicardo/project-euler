/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Project Euler Solution
const divisors = (n) => {
  let divisors = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

const divisorsSum = (n) => {
  return divisors(n).reduce((a, b) => a + b, 0);
}

const isAmicableNumber = (n) => {
  return n === divisorsSum(divisorsSum(n)) && n !== divisorsSum(n) ? true : false;
}

const amicableNumbersSum = (n) => {
  let sum = [];
  for (let i = 1; i < n; i++) {
    if (isAmicableNumber(i)) {
      sum.push(i);
    }
  }
  return sum.reduce((a, b) => a + b);
}

console.log(amicableNumbersSum(10000));

// HackerRank Solution
function processData(input) {
  const divisorsSum = (n) => {
    let sum = 0;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i === (n / i)) {
          sum += 1;
        } else {
          sum += i + n / i;
        }
      }
    }
    sum += 1;
    return sum;
  }


  let amicableNumbers = [];
  for (let i = 1; i < 100000; i++) {
    if (i === divisorsSum(divisorsSum(i)) && i !== divisorsSum(i)) {
      amicableNumbers.push(i);
    }
  }

  let values = input.split('\n').map(elem => parseInt(elem));

  for (let i = 1; i < values.length; i++) {
    let sum = amicableNumbers.filter(a => a < values[i]).reduce((a, b) => a + b, 0);
    console.log(sum);
  }
}

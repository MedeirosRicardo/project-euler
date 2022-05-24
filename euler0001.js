/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

// Project Euler Solution
function solution(n) {
    let total = 0;
    for (let i = 3; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

console.log(solution(1000));

// HackerRank Solution - new solution using BigInt
function sol(n) {
    let three = BigInt(Math.floor((n - 1) / 3));
    let five = BigInt(Math.floor((n - 1) / 5));
    let fifteen = BigInt(Math.floor((n - 1) / 15));

    return (3n * three * (three + 1n) / 2n)
        + (5n * five * (five + 1n) / 2n)
        - (15n * fifteen * (fifteen + 1n) / 2n);
}

console.log(sol(1000).toString());

// HackerRank Solution - old solution using bignumber.js
function sol2(n) {
    const BigNumber = require('bignumber.js');
    let three = new BigNumber(Math.floor((n-1)/3));
    let five = new BigNumber(Math.floor((n-1)/5));
    let fifteen = new BigNumber(Math.floor((n-1)/15));
    return (new BigNumber(3).times((three.times((three.plus(1)).dividedBy(2)))))
      .plus((new BigNumber(5).times((five.times((five.plus(1)).dividedBy(2))))))
      .minus((new BigNumber(15).times((fifteen.times((fifteen.plus(1)).dividedBy(2)))))).toFixed(0);
}

console.log(sol2(1000));
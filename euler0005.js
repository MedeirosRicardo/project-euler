/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

/*Note: LCM: Smallest Multiple is, in other words, the least common multiple of a range of numbers.
GCD: is the greatest common divisor. Here we can use Euclidean Algorithm.*/

// Project Euler and HackerRank Solution
function gcd(a, b) {
    while (b != 0) {
        let c = b;
        b = a % b;
        a = c;
    }
    return a;
}

function lcm(a, b) {
    return a / gcd(a, b) * b;
}

function smallestMutiple(n) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        a = lcm(a,i);
    }
    return a;
}

console.log(smallestMutiple(20));
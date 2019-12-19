/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

// Project Euler Solution
function largestPrime(n) {
    let primes = [];
    for (let i = 3; i <= n; i += 2) {
        while (n % i === 0) {
            primes.push(i);
            n = n / i;
        }
    }
    return primes[primes.length - 1];
}

console.log(largestPrime(600851475143));

// HackerRank Solution
function largestPrime2(n) {
    let div = 2;
    while (div <= Math.floor(Math.sqrt(n))) {
        if (n % div === 0) {
            n /= div;
        } else {
            div++;
        }
    }
    return n;
}

console.log(largestPrime2(600851475143));
/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

// Project Euler Solution
function isPrime(n) {
    if (n % 2 === 0) {
        return (n == 2);
    } else {
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function sumPrimes(n) {
    let result = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result += i;
        }
    }
    return result;
}
console.log(sumPrimes(2000000));

// HackerRank Solution
/*
function main() {
    var t = parseInt(readLine());
    let primes = sumPrimes2(10**6); // Create the array outside the for loop
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(primes[n]);
    }

}
*/
function isPrime2(n) {
    if (n % 2 === 0) {
        return (n == 2);
    } else {
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function sumPrimes2(n) {
    let primes = [0,0];
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime2(i)) {
            sum += i;
            primes.push(sum);
        } else {
            primes.push(sum);
        }
    }
    return primes;
}
let primes = sumPrimes2(2000000);
console.log(primes[2000000]);
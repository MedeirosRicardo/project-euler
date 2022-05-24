/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

// Project Euler and HackerRank Solution
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

function prime(n) {
    let answer = 0;
    let j = 2;
    let i = 0;

    while (i !== n) {
        if (isPrime(j)) {
            answer = j;
            i++;
        }
        j++;
    }
    return answer;
}

console.log(prime(10001));
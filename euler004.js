/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

// Project Euler Solution
function isPalindrome(n) {
    let rev = n.toString().split("").reverse().join("");
    return n == rev;
}

function largestPalindrome(n) {
    let div;
    while (n > 100000) {
        if (isPalindrome(n)) {
            div = Math.floor(Math.sqrt(n));
            while (n % div !== 0 && div >= 100 && n / div <= 999) {
                div--;
            }
            if (n % div === 0 && div >= 100 && n / div <= 999) {
                return n;
            }
        }
        n--;
    }
}

console.log(largestPalindrome(998001));

// HackerRank Solution
function isPalindrome2(n) {
    let rev = n.toString().split("").reverse().join("");
    return n == rev;
}

function largestPalindrome2(n) {
    let div;
    (isPalindrome2(n)) ? n -= 1 : n;
    while (n > 100000) {
        if (isPalindrome2(n)) {
            div = Math.floor(Math.sqrt(n));
            while (n % div !== 0 && div >= 100 && n / div <= 999) {
                div--;
            }
            if (n % div === 0 && div >= 100 && n / div <= 999) {
                return n;
            }
        }
        n--;
    }
}

console.log(largestPalindrome2(998001));
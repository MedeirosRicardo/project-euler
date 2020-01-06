/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

// Project Euler Solution
function pythagoreanTriplet(n) {
    let a, b, c = 0;
    for (a = 1; a < n; a++) {
        for (b = a; b < n; b++) {
            c = n - a - b;

            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return -1;
}
console.log(pythagoreanTriplet(1000));

/* Note:
    a^2+b^2=c^2 and c=n-a-b => (a−b)^2=c^2−n^2+2nc
    a-b=sqrt(c^2−n^2+2nc)
*/

/* Note2: to reduce calculation
    If (a−b)^2=c^2−n^2+2nc is true calculate a and b and return
*/

// HackerRank Solution
function pythagoreanTriplet2(n) {
    for (let c = Math.floor(n / 3); c < n / 2; c++) {
        let a_b = Math.floor(Math.sqrt(c * c - n * n + 2 * c * n));
        let b = (n - c + a_b) / 2;
        let a =  n - b - c;

         if (a * a + b * b === c * c) {
             return a * b * c;
         }
    }
    return -1;
}
console.log(pythagoreanTriplet2(1000));
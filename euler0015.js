/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// Project Euler Solution
function factorial(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  } else {
    for (let i = 2; i <= n; i++) {
      answer *= i;
    }
    return answer;
  }
}

function countLatticePaths(k, n) {
  n = k + n;
  return factorial(n) / ((factorial(n - k) * factorial(k)));
}

console.log(countLatticePaths(20, 20));

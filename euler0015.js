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

// HackerRank Solution
function processData(input) {
  function factorial(n) {
    let answer = BigInt(1);
    if (n === 0 || n === 1) {
      return answer;
    } else {
      for (let i = 2; i <= n; i++) {
        answer = BigInt(answer) * BigInt(i);
      }
      return answer;
    }
  }

  function countLatticePaths(k, n) {
    n = k + n;
    return (factorial(n) / ((factorial(n - k)) * factorial(k)));
  }

  let values = input.split("\n");
  for (let i = 1; i < values.length; i++) {
    let tempNum = values[i].split(" ").map((x) => parseInt(x));
    let k = tempNum[0];
    let n = tempNum[1];
    let answer = countLatticePaths(k, n);
    console.log(parseInt(answer % BigInt((Math.pow(10, 9) + 7))));
  }
}

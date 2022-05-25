/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// Project Euler Solution
function collatz(n) {
  let count = 1;

  if (n === 1) {
    count = 2;
  }

  while (n > 1) {
      if (n % 2 === 0) {
          n = n / 2;
      } else {
          n = 3 * n + 1;
      }
      count++;
  }
  return count;
}

function solution(n) {
  let maxCount = 0;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let tempCount = collatz(i);
    if (tempCount > maxCount) {
      maxCount = tempCount;
      result = i;
    }
  }
  return result;
}

console.log(solution(1000000));

// HackerRank Solution
/*
You can skip to next possible odd using (3n + 1)/2 while adding 2 to the counter
as we want to reach 1 which is an odd number.
*/
function processData(input) {
  function collatz(n) {
      let count = 1;

      if (n === 1) {
          count = 2;
      }

      while (n > 1) {
          if (n % 2 === 0) {
              n = n / 2;
              count++;
          } else {
              n = (3 * n + 1) / 2;
              count += 2;
          }
      }
      return count;
  }

  function solution() {
      let arr = [];
      let arrSize = 5 * Math.pow(10, 6);
      let maxCount = 0;
      let result = 0;

      for (let i = 0; i <= arrSize; i++) {
          let count = collatz(i);
          if (count > maxCount || count === maxCount) {
              maxCount = count;
              result = i;
          }
          arr[i] = result;
      }
      let values = input.split("\n");
      for (let i = 1; i < values.length; i++) {
          console.log(arr[values[i]]);
      }
  }
  solution();
}

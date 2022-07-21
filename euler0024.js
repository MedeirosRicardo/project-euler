/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// Project Euler Solution
const lexicographicPermutations = (array, number) => {

  const n = number;
  let arr = array;
  let i, j, temp;

  for (let nItr = 1; nItr < n; nItr++) {

    for (i = arr.length - 1; i > 0 && arr[i - 1] >= arr[i]; i--);

    for (j = arr.length - 1; j > 0 && arr[j] <= arr[i - 1]; j--);

    // Swap
    temp = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = temp;

    for (j = arr.length - 1; i < j; i++, j--) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  console.log(arr.join(''));
};

lexicographicPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000);

// HackerRank Solution
// Using factorial number system

const factoradic = (num) => {
  const factoradics = [];
  let i = 1;

  while (num !== 0) {
    factoradics.unshift(Math.floor(num % i));
    num = Math.floor(num / i);
    i++;
  }
  return factoradics;
};

const permutations = (str, n) => {
  let char;
  let result = [];
  let facNumber = factoradic(n - 1);
  let tempString = str.split('');

  while (facNumber.length < str.length) {
    facNumber.unshift(0);
  }

  for (let i = 0; i < str.length; i++) {
    char = tempString.splice(facNumber[i], 1);
    result.push(char);
  }

  return result.join('');
};

console.log(permutations('0123456789', 1000000));

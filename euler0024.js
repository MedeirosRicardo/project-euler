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

  for (let itrN = 1; itrN < n; itrN++) {

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

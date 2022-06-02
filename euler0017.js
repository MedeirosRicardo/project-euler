/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

// Project Euler Solution
const Ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
  Tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"],
  Scale = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion"];

const integerToWords = (n = 0) => {
  if (n == 0) return "Zero";
  n = ("0".repeat(2 * (n += "").length % 3) + n).match(/.{3}/g);
  if (n.length > Scale.length) return "Too Large";
  let out = "";
  return n.forEach((Triplet, pos) => {
    if (+Triplet) {
      out += ' ' + (+Triplet[0] ? Ones[+Triplet[0]] + ' ' + Tens[10] : "") +
        ' ' + (+Triplet.substr(1) < 20 ? Ones[+Triplet.substr(1)] :
          Tens[+Triplet[1]] + (+Triplet[2] ? "-" : "") + Ones[+Triplet[2]]) +
        ' ' + Scale[n.length - pos - 1];
        if (Triplet > 100 && Triplet % 100 !== 0) {
          let tempStart = out.split(' ').slice(0, -2).join(' ');
          let tempEnd = out.split(' ');
          tempEnd = 'and ' + tempEnd.slice(-2).join(' ');
          out = tempStart + ' ' + tempEnd;
        }
    }
  }), out.replace(/\s+/g, ' ').trim();
};

function numberLetterCount(start, end) {
  let answer = 0;
  for (let i = start; i <= end; i++) {
    let word = integerToWords(i).replace(/-|\s/g,'');
    answer += word.length;
  }
  return answer;
}

console.log(numberLetterCount(1, 1000));

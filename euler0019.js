/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

// Project Euler Solution
function countingSundays(startYear, endYear) {

  const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let countSundays = 0;
  let dayOfWeek = 2;

  for (let i = startYear; i <= endYear; i++) {

    months[1] = 28 + (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0);

    for (let j = 0; j < months.length; j++) {
      dayOfWeek += months[j] % 7;

      if (dayOfWeek % 7 === 0) {
        countSundays++;
      }
    }
  }
  return countSundays;
}

console.log(countingSundays(1901, 2000));

// HackerRank Solution
// Using Zeller's Congruence

// Clean version of the code
// Missed test case 3 and 4, no BigInt
function processData(input) {

  function isSunday(y, m, d) {

    let year = (m > 2) ? y : y - 1;
    let month = (m > 2) ? m : m + 12;
    const J = Math.floor(year / 100);
    const K = year % 100;

    let zellerDayOfWeek = (d + Math.floor((13 * (month + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;
    let isoDayOfWeek = ((zellerDayOfWeek + 5) % 7) + 1;
    return isoDayOfWeek === 7;
  }

  let inputString = input.split('\n');
  let currentLine = 0;

  function readLine() {
    return inputString[currentLine++];
  }

  function isValidDate(startDate, endDate) {
    if (startDate[0] > endDate[0]) {
      return true;
    } else if (startDate[0] == endDate[0]) {
      if (startDate[1] > endDate[1]) {
        return true;
      } else if (startDate[1] == endDate[1]) {
        if (startDate[2] > endDate[2]) {
          return true;
        }
      }
    }
    return false;
  }

  function adjustDate(startDate, endDate) {
    if (isValidDate(startDate, endDate)) {
      let temp = startDate[0];
      startDate[0] = endDate[0];
      endDate[0] = temp;
    }
  }

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    let startDate = readLine().replace(/\s+$/g, '').trim().split(' ').map(item => parseInt(item));
    let endDate = readLine().replace(/\s+$/g, '').trim().split(' ').map(item => parseInt(item));
    let countSundays = 0;

    adjustDate(startDate, endDate);

    while (!isValidDate(startDate, endDate)) {
      if (startDate[2] === 1) {
        if (isSunday(startDate[0], startDate[1], startDate[2])) {
          countSundays++;
        }
      }
      startDate[2] = 1;
      startDate[1] += 1;
      if (startDate[1] > 12) {
        startDate[1] = 1;
        startDate[0] += 1;
      }
    }
    console.log(countSundays);
  }
}

// HackerRank Solution
// Passed all test cases
// Using BigInt
function processData(input) {

  function isSunday(y, m, d) {

    let year = (m > 2) ? y : y - 1n;
    let month = (m > 2) ? m : m + 12n;
    const J = year / 100n;
    const K = year % 100n;

    let zellerDayOfWeek = (BigInt(d) + (13n * (BigInt(month) + 1n) / 5n) + K + (K / 4n) + (J / 4n) + 5n * J) % 7n;
    let isoDayOfWeek = ((zellerDayOfWeek + 5n) % 7n) + 1n;
    return isoDayOfWeek == 7n;
  }

  let inputString = input.split('\n');
  let currentLine = 0;

  function readLine() {
    return inputString[currentLine++];
  }

  function isValidDate(startDate, endDate) {
    if (startDate[0] > endDate[0]) {
      return true;
    } else if (startDate[0] == endDate[0]) {
      if (startDate[1] > endDate[1]) {
        return true;
      } else if (startDate[1] == endDate[1]) {
        if (startDate[2] > endDate[2]) {
          return true;
        }
      }
    }
    return false;
  }

  function adjustDate(startDate, endDate) {
    if (isValidDate(startDate, endDate)) {
      let temp = startDate[0];
      startDate[0] = endDate[0];
      endDate[0] = temp;
    }
  }

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    let startDate = readLine().replace(/\s+$/g, '').trim().split(' ').map(item => BigInt(item));
    let endDate = readLine().replace(/\s+$/g, '').trim().split(' ').map(item => BigInt(item));
    let countSundays = 0n;

    adjustDate(startDate, endDate);

    while (!isValidDate(startDate, endDate)) {
      if (startDate[2] == 1) {
        if (isSunday(startDate[0], startDate[1], startDate[2])) {
          countSundays++;
        }
      }
      startDate[2] = 1;
      startDate[1] += 1n;
      if (startDate[1] > 12) {
        startDate[1] = 1n;
        startDate[0] += 1n;
      }
    }
    console.log(parseInt(countSundays));
  }
}

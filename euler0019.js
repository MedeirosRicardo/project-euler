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

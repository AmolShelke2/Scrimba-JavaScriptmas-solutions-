/*
Given a year, return the century it is in, The first century spans from the year 1 up to 
including the year 100, the second from the year 101 up to and including the year 200 etc.

Example: 
For year = 1905 the output should be centuryFromYear(year) = 20

*/

const centuryFromYear = (year) => Math.ceil(year / 100);

console.log(centuryFromYear(2000));

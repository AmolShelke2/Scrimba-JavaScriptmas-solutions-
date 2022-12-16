/*
Transform a given sentence into a new one with dashes between each two consecutive letters

Example
for inputString = 'abc caba' the output should be insertDashes(inputString) = 'a-b-c c-a-b-a'
*/

function insertDashes(arr) {
  // write code here
  return arr
    .split(" ")
    .map((word) => word.split("").join("-"))
    .join(" ");
}

/*
Check if the given string is a correct time representation of the 24-hour clock. 

Example

for time = "13:58", the output should be validTime(time) = true
for time = "25:51", the output shold be validTime(time) = false
for time = "02:76", the output should be validTime(time) = false

*/

// solution

function validTime(str) {
  const [timeHr, timeMin] = str.split(":");
  if (timeHr > 24 || timeMin > 60) {
    return false;
  }
  return true;
}

console.log(validTime("12:10"));

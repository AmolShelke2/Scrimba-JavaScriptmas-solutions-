/*  given an array of strings, sort them in the order of increasing lengths. if two strings 
have the same their relative order must be the inital order

Example: 

For
inputArray = ["abc", "", "aaa", "a", "zz"]

the output should be 
sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
*/

const inputArray = ["abc", "", "aaa", "a", "zz"];

const sortArrayByLength = (strs) => {
  return strs.sort((a, b) => a.length - b.length);
};

console.log(sortArrayByLength(inputArray));

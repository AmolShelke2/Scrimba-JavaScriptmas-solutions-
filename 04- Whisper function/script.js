console.log("Hello from JavaScript");

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// without reading the hints
const whisper = (text) => {
  return `shh...  ${text.toLowerCase().replace("!", "")}`;
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("The KTTENS are SLEEPING!"));

// after reading the hints
const whisper2 = (textInput) => {
  let newStr = "shh... " + textInput;
  return newStr.endsWith("!")
    ? newStr.slice(0, -1).toLowerCase()
    : newStr.toLowerCase();
};

console.log(whisper2("The KITTENS are SLEEPING!"));

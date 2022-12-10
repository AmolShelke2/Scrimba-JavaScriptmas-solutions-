/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  let splitedSentace = str.split(" ");
  let newSentence = "";
  splitedSentace.forEach((word) => {
    let titleCase = word.slice(0, 1).toUpperCase();
    word = titleCase + word.slice(1, word.length);
    newSentence += `${word} `;
  });
  return newSentence;
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

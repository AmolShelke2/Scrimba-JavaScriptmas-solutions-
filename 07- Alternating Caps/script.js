/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

const alterNativeCaps = (text) => {
  return text
    .split("")
    .map((letter, index) => {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    })
    .join("");
};

console.log(alterNativeCaps("Hello everyone good night"));

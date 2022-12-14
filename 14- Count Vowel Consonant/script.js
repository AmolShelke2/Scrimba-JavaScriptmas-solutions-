function countVowelConsonant(str) {
  return str.split("").reduce((total, letter) => {
    if (["a", "e", "i", "o", "u"].some((vovel) => vovel === letter)) {
      return (total += 1);
    }
    return (total += 2);
  }, 0);
}

console.log(countVowelConsonant("abcde")); // this should log 8

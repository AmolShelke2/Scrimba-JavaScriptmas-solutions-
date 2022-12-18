/*
n children have got m pieces of candy. They want to eat much candy as they can, but each 
child must eat exactly the same amount of candy as any other child. Determine how many pieces 
of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

// Example
for n = 3 and m = 10, then the output sholud be candies(n, m) = 9.
Each child will eat 3 pieces, So the answer is 9

*/

function candies(children, candy) {
  return Math.floor(candy / children) * children;
}

console.log(candies(3, 10));

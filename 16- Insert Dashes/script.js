function insertDashes(arr) {
  // write code here
  return arr
    .split(" ")
    .map((word) => word.split("").join("-"))
    .join(" ");
}

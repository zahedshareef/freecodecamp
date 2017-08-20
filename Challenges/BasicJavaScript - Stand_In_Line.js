function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed; // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([2], 1)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
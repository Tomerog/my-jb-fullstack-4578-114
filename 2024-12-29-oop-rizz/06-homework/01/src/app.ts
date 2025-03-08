import ArrayOperations from "./ArrayOperations.js";

const numbers = [1, 2, 5, 6, 8, 2, 9, 5, 7, 3, 6, 4, 3, 2];

const sum = ArrayOperations.getSum(numbers);
console.log("Sum:", sum); // Sum: 15

const avg = ArrayOperations.getAvg(numbers);
console.log("Average:", avg);

const max = ArrayOperations.getMax(numbers);
console.log("Max:", max); // Max: 5

const min = ArrayOperations.getMin(numbers);
console.log("Min:", min); // Min: 1

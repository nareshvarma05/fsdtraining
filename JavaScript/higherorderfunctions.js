let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original Array:", numbers);

console.log("\nUsing forEach:");
numbers.forEach(num => console.log(num));


let squares = numbers.map(num => num * num);
console.log("\nSquares using map():", squares);


let odds = numbers.filter(num => num % 2 !== 0);
console.log("\nEven Numbers using filter():", odds);


let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("\nSum using reduce():", sum);

let firstGreaterThan5 = numbers.find(num => num > 5);
console.log("\nFirst Number > 5 using find():", firstGreaterThan5);

let hasEven = numbers.some(num => num % 2 === 0);
console.log("\nHas Even Number using some():", hasEven);


let allPositive = numbers.every(num => num > 0);
console.log("\nAll Numbers Positive using every():", allPositive);

// Chaining HOFs
let result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((acc, curr) => acc + curr, 0);

console.log("\nFilter + Map + Reduce Result:", result);
//today I learnt about iterators. Here are a few exercises I performed using iterators.

let nums   = [1,2,3,4,5]
//call back function
const multiply = num => num * 2;
// checks if a number in the array is odd, then multiplies the odd numbers
const oddNum = nums.filter(num => num % 2 == 1).map(multiply)
console.log(oddNum)

//Use .reduce() to take a multi-layered array and return a single layer array from scratch.
let numbers = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
const singleArray = numbers.reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
)
console.log(singleArray)

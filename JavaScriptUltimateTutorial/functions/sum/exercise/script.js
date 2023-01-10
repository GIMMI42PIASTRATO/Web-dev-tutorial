/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(a, b) {
//   return a + b
// }

// function sub(a, b) {
//   return a - b
// }

// function div(a, b) {
//   return a / b
// }

// function mul(a, b) {
//   return a * b
// }

// console.log('hello from the SUM exercise')

// function dati(a, b) {
//   console.log(add(a, b))
//   console.log(sub(a, b))
//   console.log(div(a, b))
//   console.log(mul(a, b))
// }

// dati(3, 2);

const add = (a, b) => a + b

const sub = (a, b) => a - b

const div = (a, b) => a / b

const mul = (a, b) => a * b

console.log('HELLO WORLD FROM THE SUM EXERCISE')

const dati = (a, b) =>{
  console.log(add(a, b))
  console.log(sub(a, b))
  console.log(div(a, b))
  console.log(mul(a, b))
}
dati(100, 10)
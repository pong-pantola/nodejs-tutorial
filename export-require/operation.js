function add(p1, p2){
  return p1 + p2
}

function subtract(p1, p2){
  return p1 - p2
}

function multiply(p1, p2){
  return p1 * p2
}

function divide(p1, p2){
  return p1 / p2
}

const myOperation = {}

myOperation.add = add
myOperation.subtract = subtract
myOperation.multiply = multiply
myOperation.divide = divide

module.exports = myOperation
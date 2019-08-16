function alwaysTrue(n){
  console.log("This is always true: " + n)
  return true
}

function alwaysFalse(n){
  console.log("This is always false: " + n)
  return false
}

console.log("Sample #1: ")
let result1 = alwaysTrue(1) && alwaysTrue(2)
console.log("********************************************************")
console.log("Sample #2: ")
let result2 = alwaysFalse(1) && alwaysFalse(2)
console.log("********************************************************")
console.log("Sample #3: ")
let result3 = alwaysTrue(1) || alwaysTrue(2)
console.log("********************************************************")
console.log("Sample #4: ")
let result4 = alwaysFalse(1) || alwaysFalse(2)

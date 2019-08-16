function add(...arr){
  let sum = 0
  for(let elem of arr)
    sum += elem
  return sum
}

console.log("sum: " + add(3, 5) )
console.log("sum: " + add(2, 8, 4, 7) )
console.log("sum: " + add(8, 4, 1, 9, 5, 7) )
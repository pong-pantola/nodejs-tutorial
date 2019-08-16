function add(p1, p2){
  return p1 + p2
}

console.log("sum: " + add(3, 5))

let arr = [3, 5]
console.log("sum: " + add(...arr))
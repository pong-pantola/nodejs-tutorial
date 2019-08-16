function add(p1, p2, p3, p4, p5){
  let sum = 0
  if (p1) 
    sum += p1
  if (p2) 
    sum += p2
  if (p3) 
    sum += p3
  if (p4) 
    sum += p4
  if (p5) 
    sum += p5
  return sum
}

console.log("sum: " + add(3, 5) )
console.log("sum: " + add(2, 8, 4, 7) )
console.log("sum: " + add(8, 4, 1, 9, 5, 7) )
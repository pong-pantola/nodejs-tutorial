let arr = [5, 19, 7, 27]

console.log("Approach #1: ")
for(let i=0; i < arr.length; i++)
  console.log(arr[i])

console.log("********************************************************")  

console.log("Approach #2: ")
for(let i in arr)
  console.log(arr[i])

console.log("********************************************************")  

console.log("Approach #3: ")
for(let elem of arr)
  console.log(elem)

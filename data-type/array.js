let fruitArr = ["mango", "apple", "banana"]

fruitArr.push("melon")
fruitArr.push("avocado")

console.log("fruitArr[1]: " + fruitArr[1])
console.log("fruitArr: " + fruitArr)
console.log("count: " + fruitArr.length)

console.log("********************************************************")

for(let i in fruitArr){
  console.log("i: " + i)
  console.log("elem: " + fruitArr[i])
}

console.log("********************************************************")

for(let elem of fruitArr){
  console.log("elem: " + elem)
}

console.log("********************************************************")

let subArr = fruitArr.slice(2, 4)

console.log("fruitArr: " + fruitArr)
console.log("subArr: " + subArr)

console.log("********************************************************")

let vegArr = ["eggplant", "asparagus"]

let combinedArr = fruitArr.concat(vegArr)

console.log("fruitArr: " + fruitArr)
console.log("combinedArr: " + combinedArr)

console.log("********************************************************")

let mixedArr = [23, 
                "ok", 
                true, 
                ["abc","def"], 
                { fname: "Maria", lname: "Garcia"}
               ]

console.log("mixedArr: " + mixedArr)

for(let elem of mixedArr){
  console.log("elem: " + elem)
}

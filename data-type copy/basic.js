/*******************************************************************************
 *Javascript Data Types
 *******************************************************************************/

let lastName = "Garcia" //String

let age = 95 //Number

let senior = true //Boolean

let address = {
  houseNo: 8,
  street: "Macopa St.",
  village: "Moonwalk Village",
  city: "Las Pinas"
} //Object


let childArr = ["Juan", "Maria", "Tomas"] //Array


//JavaScript Types are Dynamic
age = "95"


/*******************************************************************************
 *Javascript Data Types - String
 *******************************************************************************/

let str1 = 'Hello'
let str2 = "Hello"
let str3 = `Hello`

/*
if (str1 == str2 && str2 == str3)
  console.log("the three strings are the same")
else
  console.log("the thre strings are different")
*/

let str = 12 + "world"

//console.log(str)



/*******************************************************************************
 *Javascript Data Types - Number
 *******************************************************************************/

let n1 = 34
let n2 = 34.00
let n3 = 34.001
let n4 = n1 + n3

/*
console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("n4: " + n3)

if (n1 == n2)
  console.log("n1 and n2 are the same")
else
  console.log("n1 and n2 are different")
*/


/*******************************************************************************
 *Javascript Data Types - Array
 *******************************************************************************/
let fruitArr = ["mango", "apple", "banana"]

fruitArr.push("melon")
fruitArr.push("avocado")

//console.log("fruitArr[1]: " + fruitArr[1])
//console.log("fruitArr: " + fruitArr)

for(let i in fruitArr){
  //console.log("i: " + i)
}

for(let j of fruitArr){
  //console.log("j: " + j)
}

let subArr = fruitArr.slice(2, 4)

//console.log("fruitArr: " + fruitArr)
//console.log("subArr: " + subArr)

let vegArr = ["eggplant", "asparagus"]

let combinedArr = fruitArr.concat(vegArr)


//console.log("combinedArr: " + combinedArr)
/*******************************************************************************
 *Javascript Data Types - Undefined
 *******************************************************************************/

let x1

//console.log("x1: " + x1)
//console.log("x2: " + x2)


/*******************************************************************************
 *Exercise
 1. Write a code that displays the following sentence: NodeJS isn't hard.

 2. Write a code that initializes an array with the following elemens:
   
    12, 20, 8, 20

    and computes and displays the sum of the elements

 3. 
 *******************************************************************************/

 
function add(p1, p2){
  return p1 + p2
}

//let i = add(3, 5)
//console.log("sum: " + i)


function myFunc(p1, p2, p3, p4="hello"){
  if (p1 != null)
    console.log("p1: " + p1)
  else
    console.log("p1 is null")

  if (p2 != null)
    console.log("p2: " + p2)
    else
    console.log("p2 is null")

  if (p3 != null)
    console.log("p3: " + p3)    
  else
    console.log("p3 is null")

    console.log("p4: " + p4)
}

//myFunc("cat" ,"dog", "mouse", "rabbit")
//myFunc("apple", "banana")
//myFunc("abc", "def", "ghi", "jkl", "mno")

let myArr = ["cabbage", "carrot", "onion"]
//myFunc(...myArr)




function displayAll(...pArr){
    console.log("elements of array are: ")
    for(let p of pArr)
    console.log("p:" + p)
}

//displayAll(5, 2, 4, 8)
//displayAll(1, 9)


function multiply(p1, p2){
  return p1 * p2
}

//let result1 = multiply(4, 5)
//let getProduct = multiply
//let result2 = getProduct(4, 5)



let divide = function (p1, p2){
  return p1 * p2
}

let result3 = divide(10, 2)


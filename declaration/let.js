let a = 1

console.log("a: " + a)
console.log("b: " + b)
console.log("c: " + c)




let b = 2
let c


function myFunc(){
  let a = 100
  let f = 6
  
  let i = 9
  console.log("inside myfunc - a: " + a)
  console.log("inside myfunc - b: " + b)

  console.log("inside myfunc - f: " + f)
  console.log("inside myfunc - g: " + g)

  if (true){
    let g = 7
    let i = 100
    console.log("inside myfunc (if stmt) - g: " + g)
  }
  console.log("inside myfunc - i:" + i)
}

myFunc()
//console.log("f: " + f)

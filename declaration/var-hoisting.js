console.log("step 1 (global)    : " + x)

var x = "a"

function myFunc(){
  console.log("step 2 (function) y: " + y)
  console.log("step 3 (function) z: " + z)  

  var y = "b"

  if (true){
    var z = "c"
  }

  console.log("step 4 (function) y: " + y)
  console.log("step 5 (function) z: " + z)  
}

myFunc()

console.log("step 6 (global)    : " + x)
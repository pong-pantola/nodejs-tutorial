let x = "a"
console.log("step 1 (global)  : " + x)

function myFunc(){
  let x = "b"
  console.log("step 2 (function): " + x)
  
  if (true){
    let x = "c"
    console.log("step 3 (block)   : " + x)
  }

  console.log("step 4 (function): " + x)
}

myFunc()

console.log("step 5 (global)  : " + x)

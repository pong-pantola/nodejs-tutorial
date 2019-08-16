//function 
function hello1(name){
  return "Hello " + name
}

//anonymous function
let hello2 = function(name){
  return "Hello " + name
}

//arrow notation
let hello3 = (name) =>{
  return "Hello " + name
}

//will work only if single statement
let hello4 = (name) => "Hello " + name

//will work only if single parameter
let hello5 = name => "Hello " + name
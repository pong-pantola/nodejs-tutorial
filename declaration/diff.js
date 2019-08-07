//setTimeout(function(){ console.log("hello world")}, 5000)

for(var i = 0; i < 5; i++){
  var x = i*10
  setTimeout(function(){ console.log("x: " + x)}, 2000)
}

for(let j = 0; j < 5; j++){
  let y = j*10
  setTimeout(function(){ console.log("y: " + y)}, 2000)
}

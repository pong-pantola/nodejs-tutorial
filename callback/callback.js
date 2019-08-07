const fs = require("fs");

console.log("**** START ****")

fs.readFile("fileA.txt", function(err, data){
  if (err)
    console.log(err.toString())
  else{

    console.log("Content of fileA.txt is: " + data)

  }
})

console.log("**** END ****")
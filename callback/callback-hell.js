const fs = require("fs");

fs.readFile("fileA.txt", function(err, data){
  if (err)
    console.log(err.toString())
  else{
    
    console.log("Content of fileA.txt is: " + data)
    
    fs.readFile("fileB.txt", function(err, data){
      if (err)
        console.log(err.toString())
      else{
        
        console.log("Content of fileB.txt is: " + data)

        fs.readFile("fileC.txt", function(err, data){
          if (err)
            console.log(err.toString())
          else{
            
            console.log("Content of fileC.txt is: " + data)

            fs.readFile("fileD.txt", function(err, data){
              if (err)
                console.log(err.toString())
              else{
            
                console.log("Content of fileD.txt is: " + data)
            
              }
            })//end of fourth read

          }
        })//end of third read
    
      }
    })//end of second read

  }
})//end of first read




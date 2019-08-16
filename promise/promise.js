const fs = require("fs");

function readFilePromise(filePath){

  const promise = new Promise(
    function(resolve, reject){
      fs.readFile(filePath, function(err, data){
        if (err)
          reject(err)
        else
          resolve(data)
      })
    }
  )

  return promise;
}

readFilePromise("fileA.txt")
.then(
  (data)=>{
    console.log("Content of fileA.txt is: " + data)
    
    return readFilePromise("fileB.txt")
  }
)
.then(
  (data)=>{
    console.log("Content of fileB.txt is: " + data)
    
    return readFilePromise("fileC.txt")
  }
)
.then(
  (data)=>{
    console.log("Content of fileC.txt is: " + data)
    
    return readFilePromise("fileD.txt")
  }
)
.then(
  (data)=>{
    console.log("Content of fileD.txt is: " + data)
  }
)
.catch(
  (err)=>{
    console.log(err.toString())
  }

)


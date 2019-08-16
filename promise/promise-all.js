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

let promise1 = readFilePromise("fileA.txt")
let promise2 = readFilePromise("fileB.txt")
let promise3 = readFilePromise("fileC.txt")
let promise4 = readFilePromise("fileD.txt")

let promiseArr = [promise1, promise2, promise3, promise4]

Promise.all(promiseArr)
.then(
  (dataArr)=>{
    console.log("Done reading the four files")
    for(let data of dataArr)
      console.log("Content: " + data.toString())
  }
)
.catch(
  (err)=>{
    console.log(err.toString())
  }
)


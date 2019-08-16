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

async function main(){
  try{
    let data

    data = await readFilePromise("fileA.txt")
    console.log("Content of fileA.txt is: " + data)

    data = await readFilePromise("fileB.txt")
    console.log("Content of fileB.txt is: " + data)

    data = await readFilePromise("fileC.txt")
    console.log("Content of fileC.txt is: " + data)

    data = await readFilePromise("fileD.txt")
    console.log("Content of fileD.txt is: " + data)
  }catch(err){
    console.log(err.toString())
  }

}

main()
try{
  let str = '{ "fname": "Maria", "lname" "Garcia"}'

  let obj = JSON.parse(str)

  console.log("fname: " + obj.fname)
  console.log("lname: " + obj["lname"])
  console.log("str: " + str)
  console.log("obj: " + obj)
  console.log("obj: " + JSON.stringify(obj))
}catch(err){
  console.log("Error encountered: " + err)
}
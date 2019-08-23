function myFunc(p1, p2, p3, p4="hi"){
  if (p1 != null)
    console.log("p1: " + p1)
  else
    console.log("p1 is null")

  if (p2 != null)
    console.log("p2: " + p2)
    else
    console.log("p2 is null")

  if (p3 != null)
    console.log("p3: " + p3)    
  else
    console.log("p3 is null")

    console.log("p4: " + p4)
}

myFunc("cat" ,"dog", "mouse", "rabbit")
myFunc("apple", "banana")
myFunc("abc", "def", "ghi", "jkl", "mno")

let myArr = ["cabbage", "carrot", "onion"]
myFunc(...myArr)
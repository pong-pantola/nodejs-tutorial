function checkFourthElement(arr){
  console.log("arr: " + arr)
  if (arr)
    if (arr.length >= 4)
      if (arr[3] > 20)
        console.log("Element 4 is greater than 20!")
}

function checkFourthElement2(arr){
  console.log("arr: " + arr)  
  if (arr && arr.length >= 4 && arr[3] > 20)
    console.log("Element 4 is greater than 20!")
}

checkFourthElement(null)
checkFourthElement([5])
checkFourthElement([5, 19, 7, 27])

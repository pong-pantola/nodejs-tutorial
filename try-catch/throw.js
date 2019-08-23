function divide(a, b){
  if (b == 0)
    throw new Error("Divisor cannot be zero.")

  return a/b
}

divide(37, 0)

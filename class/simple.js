class Car{
  constructor(make, model){
    this.make = make
    this.model = model
  }

  setColor(color){
    this.color = color    
  }

  getDescription(){
    let desc = ""
    if (this.color)
      desc = this.color + " "
    
    desc += this.make + " " + this.model

    return desc
  }

  displayDescription1(){
    console.log("Your car is a...")

    setTimeout(() => {
      console.log(this.getDescription())
    }, 3000);
  }

  displayDescription2(){
    console.log("Your car is a...")

    setTimeout(function(){
      console.log(this.getDescription())
    }, 3000);
  }
}

let car1 = new Car("Toyota", "Vios");
car1.setColor("blue")
console.log("Your car is a " + car1.getDescription())

//car1.displayDescription1()
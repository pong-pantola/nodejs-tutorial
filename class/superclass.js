class Vehicle{
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
}

class Car extends Vehicle{
  constructor(make, model){
    super(make, model)
    this.wheelCount = 4
  }

  //true - manual
  //false - automatic
  setTransmission(manual){
    this.manual = manual
  }

}

class Motorcycle extends Vehicle{
  constructor(make, model){
    super(make, model)  
    this.wheelCount = 2
  }
}

let car1 = new Car("Toyota", "Vios");
car1.setColor("blue")
console.log("Your car is a " + car1.getDescription())

let mc1 = new Motorcycle("Yamaha", "Mio");
car1.setColor("black")
console.log("Your motorcycle is a " + car1.getDescription())
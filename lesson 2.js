



//1

class Vehicle {
  constructor(make, model) {
    this.make = make; 
    this.model = model; 
  }
}


class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year; 
  }
}

  owner = [];


  
  class Person {
    constructor(name, surname, age, gender, cars = []) {
      this.name = name; 
      this.surname = surname; 
      this.age = age; 
      this.gender = gender; 
      this.cars = cars; 
  }
}
  //4
   function fullName(){
    return `${this.name} ${this.surname}`
  }
  function countCars(){
    return `${this.cars.lenght}`
  }
  
  
  
  //6
  this.addOwner = function(owner){
    this.owners.push(owner);
  }
  this.removeOwner = function (owner) {
    this.owners = this.owners.filter((oldOwner) => oldOwner !== owner); // ეს საკმაოდ გამიჭირდა
  }
  
  this.getOwnersCount = function(owner){
    return this.owner.lenght
  }
  
  
  //7
  this.buyCars = function (car){
    this.cars.push(car)
    this.addOwner(this)
  }
  
  this.sellsCar = function (car) {
    //სახელის წაშლა ვერ ვქენი 
    car.removeOwner();
  };
  
  //8
  this.getOwnerNames = () => {return this.fullname()}
  
  
  //9
  this.getFullInfo = function () {
    return `${this.make} ${this.model} from ${
      this.year
    }. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(
      ", "
    )}.`;
  };
  
  
  //10
  this.getCarInfo = function () {
    return `${this.make} ${this.model} released in ${this.year}`;
  };
  
  
  
  
  
  let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
  let ilona = new Person("Elon", "Musk", 30, "M");
  let duti_picoti = new Car("BMW", "525", "1999");
  let stodevianosto = new Car("Mercedes", "E190", 1991);
  
  daniel916.buysCar(duti_picoti); // adds passed car
  daniel916.buysCar(stodevianosto); // adds passed car
  daniel916.sellsCar(duti_picoti); // removes passed car
  ilona.buysCar(stodevianosto); // adds passed car
  ilona.buysCar(duti_picoti); // adds passed car
  
  console.log({
    daniel: {
      fullName: daniel916.fullName(),
      countCars: daniel916.countCars(),
      getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
      fullName: ilona.fullName(),
      countCars: ilona.countCars(),
      getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount(),
      getOwnerNames: duti_picoti.getOwnerNames(),
      getFullInfo: duti_picoti.getFullInfo(),
      getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount(),
      getOwnerNames: stodevianosto.getOwnerNames(),
      getFullInfo: stodevianosto.getFullInfo(),
      getCarInfo: stodevianosto.getCarInfo(),
    },
  });
  
  
  
  
  
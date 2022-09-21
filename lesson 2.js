// // "use strict";

// // let person = {
// //   name: "Daniel",
// //   sayHello: function () {
// //     console.log(this);
// //   },
// //   child: {
// //     sayHello: function () {
// //       console.log(this.name);
// //       "use strict";//ეს მაინც ჩავსვი აქ :)
// //     },
// //   },
// // };
// // person.sayHello(); // person object
// // person.child.sayHello.bind(person); // daniel
// // person.child.sayHello.call(person); // daniel

// // //apply ზე სხვადასხვა ხერხები ვცადე: 1) მარტო [პერსონი] ვცადე მაინტერესებდა რას იზამდა ,
// // //                                   2) მეორეში ისე ვცადე როგორც სასწავლო მასალაში იყო მაგალითები, კოდი მუშაობს, თუ მუშაობს არ შეეხოო ნათქვამია
// // //                                   3) მხოლოდ პერსონით ვცადე და ამანაც იმუშავა(შენც მასე გეწერა), ერთ ის ვერ გავიგე წერია apply() იღებს მხოლოდ მეორე პარამეტრს
// // //                                       - გადასაცემი არგუმენტების მასივს, და მაგიტო ვაკეთებდი მასე და იმედი მაქვს სწორია :დ 
// // person.child.sayHello.apply(["person"]); //undefined
// // person.child.sayHello.apply(person, ["person"]) // daniel
// // person.child.sayHello.apply(person) //daniel




// //2)


// var application = {
//     alertBox: function (value) {
//       alert(value);
//     },
//     initialize: function () {
//       setTimeout(function () {
//         // at this moment setTimeout is called by window, that's why context is window
//         this.alertBox("hello world");
//       },bind(this), 2000);
//     },
//   };












// let colors = ["red", "green", "yellow", "blue", "violet"];

// function changeColor(color) {
//   //   this.style.color = color; // Problem: here 'this' refers to window object, fix it to work
//   this.style.color = "red"; // delete this line and uncomment code at line 4
//   console.log(this);
// }

// for (let i = 1; i <= 5; i++) {
//   document.getElementById("div" + i).addEventListener("click", changeColor);
// }














//1
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    function getCarInfo(){
      return `${this.make} ${this.model} + 'released in' + ${this.year}`
    }
    //2
    owner = []
  }
  
  
  
  //3
  function Person(name, surname, age, gender, cars = []) {
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.gender = gender,
    this.cars = cars,
  
  
  //4
   function fullName(){
    return `${this.name} ${this.surname}`
  }
  function countCars(){
    return `${this.cars.lenght}`
  }
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
    car.removeOwner(this);
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
  
  
  
  
  
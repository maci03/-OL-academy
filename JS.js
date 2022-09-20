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


//1)
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  function getCarInfo(){
    return `${this.make} ${this.model} + 'released in' + ${this.year}`
  }
  owner = []
}



//2
function Person(name, surname, age, gender, cars = []) {
  this.name = name,
  this.surname = surname,
  this.age = age,
  this.gender = gender,
  this.cars = cars,


//3
 function fullName(){
  return `${this.name} ${this.surname}`
}
function countCars(){
  return `${this.cars.length}`
}
}

this.addOwner = function(owner){
  this.owners.push(owner);
}

this.removeOwner = function(owner){
  this.owners.push(owner)
}

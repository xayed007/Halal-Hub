// {
//     let name = "Zayed";
//     let age = 17;
//     let isStudent = true;
//     let city = "Dhaka";
//     console.log(typeof city);
//     console.log( typeof name);
//     console.log( typeof age);
//     console.log( typeof isStudent);
// }
// {
//     let num1 = 10;
//     let num2 = 5;
//     console.log(num1 + num2);
//     console.log(num1 - num2);
//     console.log(num1 * num2);
//     console.log(num1 / num2);

// }
// let score = 85;
// if(score > 50){
//     console.log("You have passed the exam!")
// }else{
//     console.log("You have failed  the exam.")
// }
// let number = 97;
// if(number > 33){
//     console.log("You have passed!!!")
// }else{
//     console.log("You couldn't pass the exam!!!")
// }
// {
//     let x = -5;
//     if(x > 0){
//         console.log("The number is positive.")
//     }else{
//         console.log("The number is negative.")
//     }
// }
// {
//     let age = 20;
//     if(age > 18){
//         console.log("You are an adult.")
//     }
//     else{
//         console.log("You are not an adult yet.!")
//     }
// }
// {
//     let score = 9;
//     if(score >= 80){
//         console.log("Excellent!")
//     }
//     else if(score>= 50 ){
//         console.log("Good.")
//     }
//     else{
//         console.log("Try harder!")
//     }

// }
// function range(value,min,max){
//     return value >= min && value <= max;
// }
// {
//     let temperature = 25;
//     if (range(temperature,30,40)){
//         console.log("It is hot outside")
//     }
//     else if(range(temperature, 20, 30)){
//         console.log("The weather is nice")
//     }
//     else{
//         console.log("It is cold outside.")
//     }
// }
// {
//     let age = 20;
//     if(age < 20 || age > 65){
//         console.log("You are either too young or too old.")
//     }
//     else{
//         console.log("You are in the working age group.")
//     }
// } {
// function greet(name){
//     console.log("Hello" + " " + name +"!")
// }
// }
// greet("Zayed");

// function sleep(name,time){
//     console.log( name + " is sleeping " + time)
// }

// console.log(" MY name is Zayed");

// sleep("Zayed" , "10PM");
// sleep("Hamid" , "12 PM");

// // function myFunction(p1, p2) {
// //     return p1 * p2;
// //   }

// //   let result = myFunction(4, 3);
// //   document.getElementById("demo").innerHTML = result;

// // function practice(a,b){
// //     return a * b;
// // }
// // let s = practice(4,3);
// // document.getElementById("demo").innerHTML = s;

// // let f = dfuncton(4,4);

// // function dfuncton(a,b){
// //     return a * b;
// // }

// // console.log(f);

// // function toCelsius(ferenheit){
// //     return 5/9 * (ferenheit - 32)
// // }

// // let c = toCelsius(-459.8);
// // console.log(c);

// function checkNumber(number){
//     if( number % 2 === 0){
//         console.log("The number is 'Even'.");
//     }
//     else if( number % 2 === 1 && number % 5 === 0){
//         console.log("The number is Odd and divisible by 5.");
//     }
//     else {
//         console.log("The number is Odd but not divisible by 5.")
//     }
// }

// checkNumber(10);
// checkNumber(15);
// checkNumber(7)

// function myGreet(name1,name2,name3){
//     console.log("Hello " + name1);
//     console.log("Hello " + name2);
//     console.log("Hello " + name3);
// }
// myGreet("Zayed","Ali","Fatima");

// function greetMultiple(...names) {
//     names.forEach(name => {
//         console.log("Hello, " + name + "!");
//     });
// }

// // Example usage:
// greetMultiple("Zayed", "Ali", "Fatima");

//  const bike={
//   name:"KTM",
//   model: 1200,
//   color:"black",
//   start: function (){
//     console.log("Car has started.")
//   }

// };

// console.log(bike.color);
// console.log(bike["model"]);
// bike.start();

// // let person= {}

// // person.firstname= "Zayed";
// // person.lastname = "Bin Hamid";
// // person.age = 17;

// // console.log(person["firstname"]);

// let person= {
//    name:"Zayed Bin Hamid",
//    fname:"Abdul Hamid",
//    mname:"Morjina Begum",
//    isfather:function(){
//     if(this.fname==="Abdul Hamid"){
//         console.log("This is  your father.");

//     }
//     else{
//         console.log("This is not your father.")
//     }

//    }

// }
// person.isfather();

// person.sname= "Shanjida";
// person.age= 18;

// console.log(person.age)
// console.log(person.age)
// console.log(person.sname)

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const student = {
//     name:"Xayed Bin Hamid",
//     class:10,
//     age:18,
//     //number of PRE-TEST//
//    marks:{
//     Physics:90,
//     HigherMath:92,
//     GeneralMath:92,
//    },
//     greet:function() {
//         console.log("Peace be upon you," , student.name , ". As your are above " , this.age , "you are an adult but fear Allah(SWT.)")
//     }
// }
// student.HigherMath = 97;

// student.marks.GeneralMath = 97;
// console.log(student["name"]);
// console.log(Object.entries(student));

// console.log("Class:" , student.class);

// student.greet();
// console.log(student.marks.GeneralMath);

// const details = {
//     ...person,
//     class:10,
// }
// console.log(Object.entries(details));
// const { name,...rest} = person;
// console.log(rest);
// const {marks:{Physics,HigherMath}}=student;
// console.log(Physics);

// // const button = document.getElementById("mybutton");
// // const message = document.getElementById('message');
// // button.addEventListener("click",function(){
// //     alert("First Click Event!!");
// // });

// // button.addEventListener("click", function(){
// //     console.log("Another CLick Handler....")
// // });

// console.log(person["name"]);

// document.getElementById("mybutton").addEventListener("click",function(event){
//     alert("Button is clicked.")
//     console.log(event.type);
//     console.log(event.target.id);
// });

// console.log(person.isfather(fatherki));

// const task1 = document.getElementById("but1");
// const body = document.body;
// task1.addEventListener("click", function() {
//     body.style.backgroundColor = "blue";
//     task1.style.backgroundColor = "red";
// });

// const button = document.getElementById("mybutton");
// const body = document.body;
// button.addEventListener("click",function(){
//     alert("Button has Checked.!!")
//     body.style.backgroundColor = "blue";
// });

let person = {
  name: "Zayed",
  age: 17,
  country: "Bangladesh",
};
for (key in person) {
  console.log(`${key} : ${person[key]}`);
  console.log(key + ":" + person[key]);
}

fruits = ["Apple", "Banana", "Coliflower"];
let addfruits = fruits.pop();
console.log(addfruits);
console.log(fruits);
fruits.push("califlower");
console.log(fruits);
fruits.unshift("Blackberry");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits[fruits.length] = "Blueberrry";
console.log(fruits);
fruits.splice(1, 2, "Orange", "Papaya");
console.log(fruits);
let newFruits = fruits.slice(0, 3);
console.log(newFruits);
console.log(fruits);
let fruitsReversed = fruits.reverse();
console.log(fruitsReversed);
let fruitsSort = fruitsReversed.sort();
console.log(fruitsSort);
const cars = ["Rolls Royals", "Lumbargini", "Range Rover"];
let concatinated = fruitsSort.concat(cars);
console.log(concatinated);
let str = concatinated.toString();
console.log(str);
let x = concatinated.concat(str);
console.log(x);

/*Basic ex 1
Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:

1 X 1 = 1
2 X 1 = 2
…
1 X 2 = 2
2 X 2 = 4
…
9 X 10 = 10
10 X 10 = 100 */

// function multiply (num1: number) {
//   for (let i=1; i <= 10; i++) {
//     console.log(i * num1);
//   };
// };

// multiply(1);

// const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function multiply (num1: Array<number>) {
//   for (let i=1; i <= 10; i++) {
//     console.log(i * num1[i]);
//   };
// };
// multiply(allNums);

for(let i = 1; i<=10; i++) {
  for(let j = 1; j<=10; j++) {
    console.log(`${j} X ${i} = ${j*i}`)
  }
}

/* Basic ex 2

1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times. */


// var myName = [{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }}];

// myName.forEach(function(value, index) {
//   console.log(`${value.names.fName} ${value.names.lName}`);
// });

// var myName = [{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }},{names: { fName: "Claus", lName: "Mersch" }}];

var myName = [{names: { fName: "Claus", lName: "Mersch" }}];


for(let i = 0; i < 9; i++) {
  myName.push(myName[i]);
}
myName.forEach(function(value, index) {
  console.log(`${value.names.fName}`);
});


function printName() {
myName.forEach(function(value, index) {
  console.log(`${value.names.lName}`);
});
}

setTimeout(printName, 5000);

// console.log(myName.fName + " " + myName.lName)
// for (let name of myName ){
//   console.log(name.fName + " " + name.lName)
// }

// Object.entries(myName).forEach(([key, value], index) => {
//   console.log(key, value, index);
//   console.log(value+ value);
// });

// forEach((element) => {
//   console.log(`My name is ${fName} ${lName}`)
// });

// function printName(person: { fName: string; lName: string }, nameType?: string, times?: number): void {
//   let name: string = "";
//   if(nameType) {
//     switch(nameType.toLowerCase()){
//       case "first": name = person.fName; break;
//       case "second": name = person.lName; break;
//     }
//   } else {
//     name = person.fName + " " + person.lName
//   }
//   if(times) {
//     for(let i = 0; i < times; i++) {
//       console.log(name)
//     }
//   } else {
//     console.log(name)
//   }
// }

// printName({fName: "Schwammrobert", lName: "Quadrathosen"}, "first", 10)

// setTimeout(function(){ printName({fName: "Anna", lName: "Nyma"}, "second", 10)}, 5000);

/*Basic ex 3

Create an array of names, this array should only accept strings.

1. Print only the index of the elements.
2. Print only the values. 
3. Print both index and values. */

const jedis: Array<string> = ["Obi-Wan Kenobi", "Yoda", "Qui-Gon Jinn", "Anakin Skywalker", "Mace Windu"];

jedis.forEach(function(value, index) {
  console.log(index);
});

jedis.forEach(function(value, index) {
  console.log(value);
});

jedis.forEach(function(value, index) {
  console.log(`${value} ${index}`);
});

/* Day 1 | Classwork | Advanced

Create a Restaurant Web Page using the below-provided Typescript concepts. Try to implement all of them in an appropriate place in the App:

Define for each variable/array the data type
List the array items and make sure that it has a strict data type definition
Use some loop for displaying the data into the Page (forEach, For in, or For-of)
Define some appropriate value as const
It is up to you how the front-end part will look like. It will be nice if you provide a well structured and designed Bootstrap page.


Your task is to incorporate all these features using Typescript in a proper and meaningful place in your App. More dynamic data is always welcome. Feel free to add additional functionalities. */

type Ingredient = {
  name: string,
  quantity: number,
  unit: string
}

const meal: ReadonlyArray<Ingredient> = [{name: "Water",quantity: 1, unit: "Liters"},{name: "Flour",quantity: 0.5, unit: "Kg"},{name: "Salt",quantity: 2, unit: "Teaspoons"}];

meal.forEach(dish => {
  (document.querySelector(".custom-content") as HTMLElement).innerHTML += 
  `
  <hr>
  <div class="col-6">Name: ${dish.name}</div>  
  <div class="col-6">Quantity: ${dish.quantity} ${dish.unit}</div>  
  <hr class="mt-2">
  `
});
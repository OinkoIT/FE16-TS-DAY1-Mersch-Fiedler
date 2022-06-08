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
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log("".concat(j, " X ").concat(i, " = ").concat(j * i));
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
var myName = [{ names: { fName: "Claus", lName: "Mersch" } }];
for (var i = 0; i < 9; i++) {
    myName.push(myName[i]);
}
myName.forEach(function (value, index) {
    console.log("".concat(value.names.fName));
});
function printName() {
    myName.forEach(function (value, index) {
        console.log("".concat(value.names.lName));
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
var jedis = ["Obi-Wan Kenobi", "Yoda", "Qui-Gon Jinn", "Anakin Skywalker", "Mace Windu"];
jedis.forEach(function (value, index) {
    console.log(index);
});
jedis.forEach(function (value, index) {
    console.log(value);
});
jedis.forEach(function (value, index) {
    console.log("".concat(value, " ").concat(index));
});
var meal = [{ name: "Water", quantity: 1, unit: "Liters" }, { name: "Flour", quantity: 0.5, unit: "Kg" }, { name: "Salt", quantity: 2, unit: "Teaspoons" }];
meal.forEach(function (dish) {
    document.querySelector(".custom-content").innerHTML +=
        "\n  <hr>\n  <div class=\"col-6\">Name: ".concat(dish.name, "</div>  \n  <div class=\"col-6\">Quantity: ").concat(dish.quantity, " ").concat(dish.unit, "</div>  \n  <hr class=\"mt-2\">\n  ");
});

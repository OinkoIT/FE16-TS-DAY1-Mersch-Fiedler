"use strict";
// let numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tt = "";
// for (let a = 1; a <= 10; a++) {
//     for (let b = 1; b <= 10; b++) {
//         const result = String(a * b);
//         tt += ' '.repeat(4 - result.length) + result;
//     }
//     tt += '\n';
// }
// console.log(tt);
// const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function multiply(num1: Array<number>) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * num1[i]);
//     };
// };
// multiply(allNums);
let object = [{
        name: {
            fName: "Jan",
            lName: "Fiedler"
        }
    }];
for (let i = 0; i < 9; i++) {
    object.push(object[i]);
    ;
}
object.forEach(element => {
    console.log(`${element.name.fName}`);
});
function printName() {
    object.forEach(function (value) {
        console.log(`${value.name.lName}`);
    });
}
setTimeout(printName, 5000);

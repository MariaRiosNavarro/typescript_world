"use strict";
let sale = 123456789;
let curse = 'TypeScript';
let isPublished = true;
let level;
level = 1;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(number => number * 2);
console.log(numbers);
let user = [1, 'Maria', true];
user[1] = user[1].toLowerCase();
console.log(user);
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function claculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(claculateTax(10000, 2022));
let employee = {
    id: 1,
    name: "Maria",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLb(weight) {
    if (typeof weight === 'number')
        return weight * 2.20462262185;
    else
        return parseInt(weight) * 2.20462262185;
}
console.log("number parameter", kgToLb(10));
console.log("string parameter", kgToLb('10Kg'));
let TEXTBOX = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
greet(null);
//# sourceMappingURL=index.js.map
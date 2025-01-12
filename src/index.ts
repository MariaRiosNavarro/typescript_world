// let sale: number = 123_456_789;
// let curse: string = 'TypeScript';
// let isPublished:boolean = true;


let sale= 123_456_789;
let curse= 'TypeScript';
let isPublished= true;

// Type ANY
let level;
// Type Number
level = 1;

//ANY issue -> in tsconfig.json ->  "noImplicitAny": false      

function render(document){
    console.log(document);
    
}

// ARRAYs


let numbers: number[] = [1, 2, 3];

numbers.forEach(number => number*2);
console.log(numbers);

// Tuples
type Tuple = [number, string, boolean];
let user: Tuple = [1, 'Maria', true];
user[1]=user[1].toLowerCase();

console.log(user);


// Enums

const small = 1
const medium = 2
const large = 3

// PascalCase - mit const wird den index.js optimiert. Enums sind constanten

const enum Size {
    Small = 1,
    Medium,
    Large
}

let mySize: Size = Size.Medium;

console.log(mySize);


// Functions

function claculateTax(income: number, taxYear = 2022):number{
    if (taxYear< 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

console.log(
    claculateTax(10_000, 2022));


//OBJECTs
// let person : {
//     readonly id: number,
//     name: string,
//     retire: (date:Date) => void
// } = {
//     id: 1, 
//     name :"",
//     retire: (date:Date) =>{
//         console.log(date);
//     }

// NOt allowed in typescript
// person.name = 'Maria';



// Type ALIASES

type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
}

let employee: Employee= {
    id: 1, 
    name :"Maria",
    retire: (date:Date) =>{
        console.log(date);
    }
}

// Union Types

function kgToLb(weight: number|string): number {
    if (typeof weight === 'number') 
        return weight * 2.20462262185;
    else
        return parseInt(weight) * 2.20462262185;
}

console.log("number parameter", kgToLb(10));
console.log("string parameter", kgToLb('10Kg'));


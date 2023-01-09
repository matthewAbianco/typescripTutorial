"use strict";
let stringArr = ['one', 'hey', 'Mate'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Tony';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift();
let test = [];
let bands = [];
bands.push('van halen');
// tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 41;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Kave',
    prop2: true,
};
exampleObj.prop1 = 'Tony';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello';
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeSCript features, Enums are not a type-level addition to Javascript but something added to the language and runtime "
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);

"use strict";
let myName;
let userName;
userName = 'Amy';
// functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = (c, d) => {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional paramaters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));
//"Rest" of the Paramaters "...nums"
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This Should never happen');
};

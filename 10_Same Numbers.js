function solve(inputNumber) {
'use strict';

let sum = 0;
let allDigitsAreTheSame = true;

const firstDigit = inputNumber % 10;

while(inputNumber > 0) {
    const currentDigit = inputNumber % 10;
    if (firstDigit != currentDigit) {
       allDigitsAreTheSame = false;
    }
    else {
        allDigitsAreTheSame = true;
    }
    sum += currentDigit;

    inputNumber = Math.floor(inputNumber / 10);
}

console.log(allDigitsAreTheSame);
console.log(sum);

};

solve(444);
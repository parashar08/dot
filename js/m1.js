function calculator(num1, num2, operator) {
    if (operator === '+') return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/')
        return num2 != 0 ? num1 / num2 : "can't divide by zero!";
    return 'invalid operator';
}

const isEven = (num) => num % 2 === 0;
const square = (num) => num * num;

function createMultiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(4);
double(9);

function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const nums = [1, 2, 3, 4, 5];
const squaredNums = customMap(nums, (num) => num * num);
console.log(squaredNums);

function processInput(str, callback) {
    return callback(str);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

processInput('hello', toUpperCase);

function delayMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

function fetchDataAndProcess(callback) {
    setTimeout(() => {
        const data = 'sample data';
        callback(data);
    }, 2000);
}

fetchDataAndProcess((data) => {
    console.log('Processed data: ' + data.toUpperCase());
});

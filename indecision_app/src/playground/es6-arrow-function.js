console.log('hola');

const square = function (x){
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;



console.log(square(9));         // ES5 Functions
// console.log(squareArrow(7));    // ES6 Arrow Func
console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Ricardo Torrez'));

const getName = (name) => name.split(' ')[0];
console.log(getName('Luca Torrez'))

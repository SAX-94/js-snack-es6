
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

const min = 1;

const max = 3;

const newArray1 = [];

/*
// Done wit forEach
*/
myArray.forEach((name, i) => {
    if (i >= min && i <= max) {
        newArray1.push(name);
    }
})
console.log(newArray1);
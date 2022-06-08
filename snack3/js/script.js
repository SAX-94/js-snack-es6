
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

const min = 1;
const max = 3;

let newArray1 = []; /* For this array I will use the forEach method. */

let newArray2 = []; /* For this array I will use the filter method. */

/*
// Done with forEach
*/
myArray.forEach((name, i) => {
    if (i >= min && i <= max) {
        newArray1.push(name);
    }
})
console.log(newArray1);

/*
// Done with filter
*/
newArray2 = myArray.filter((name, i) => i >= min && i <= max);
console.log(newArray2);
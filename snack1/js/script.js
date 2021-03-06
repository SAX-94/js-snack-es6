
/* Array with objects that describe racing bycicles.
Weights are expressed in kilograms. */

const racingBikes = [
    {
        name: "Cube Attain GTC Race",
        weight: 8.1
    },
    {
        name: "Colnago CLX",
        weight: 8.4
    },
    {
        name: "Specialized Venge Pro",
        weight: 7.4
    },
    {
        name: "Cannondale Synapse",
        weight: 8.5
    },
    {
        name: "Vitus Zenium CR",
        weight: 8.9
    },
    {
        name: "Trek Domane SL5",
        weight: 9.7
    },
];

/* Let's use a for...loop to find out which one is lighter */

let lightest = racingBikes[0];
console.log(lightest);

for (let i = 0; i < racingBikes.length; i++) {
    let bike = racingBikes[i];
    if (lightest["weight"] > bike["weight"]) {
        lightest = bike;
    }
}
// This is the lightest bike
console.log(lightest);


//Print name and weight of the lighttest bike
// @ts-ignore
let {name, weight} = lightest

let printOutput = document.getElementById("container");

container.innerHTML = `<div><h1 class="text-center">La ${name} ha un peso di ${weight} kg.<br>E' la più leggera della lista.</h1></div>`
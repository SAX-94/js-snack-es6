let students = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];


// Capitalize every student name
const studentCapitalizedNames = students.map(({name}) => name.toUpperCase());
console.log(studentCapitalizedNames);

// Select students who have grades above 70
const gradesOver70 = students.filter(({grades}) => grades > 70);
console.log(gradesOver70);
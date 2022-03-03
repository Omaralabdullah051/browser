//ternary operator
const age = 11;

// let type;
// if (age >= 18) {
//     type = 'adult';
// }
// else {
//     type = 'child';
// }
//console.log(type)
// or
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

//nested
// let type;
// if (age >= 18) {
//     type = 'adult';
// }
// else if (age < 10) {
//     type = 'child';
// }
// else {
//     type = 'young';
// }
// console.log(type);

// or 
const type = age >= 18 ? 'adult' : age < 10 ? 'child' : 'young';
console.log(type);
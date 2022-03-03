console.log(2222);
console.log(33333);
// setTimeout(() => console.log('aaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

console.log(4444);
for (let i = 0; i < 100; i++) {
    console.log(i);
}
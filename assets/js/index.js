console.log("Task 0");

const arraySize = 20;
let randomArray = [];

for (let i = 0; i < arraySize; i++) {
  randomArray.push(parseInt(Math.random() * 100));
}

console.log("randomArray", randomArray);

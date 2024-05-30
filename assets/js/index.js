console.log("=========================Task 0=========================");

const arraySize = 20;
let randomArray = [];

for (let i = 0; i < arraySize; i++) {
  randomArray.push(parseInt(Math.random() * 100));
}

console.log("randomArray", randomArray);

console.log("=========================Task 1=========================");

randomArray.pop();
console.log("Deleted last element: \n", randomArray);

randomArray.push(parseInt(Math.random() * 100));
console.log("Added an element to the end: \n", randomArray);

randomArray.shift();
console.log("Deleted first element: \n", randomArray);

randomArray.unshift(parseInt(Math.random() * 100));
console.log("Added element at the beginning: \n", randomArray);

console.log("=========================Task 2=========================");
console.log("Array lenght = ", randomArray.length);

console.log("=========================Task 3=========================");
// const randomArrayCopy = Array.from(randomArray);
const randomArrayCopy = [...randomArray];
randomArrayCopy[1] = 5;
console.log("New copied array: ", randomArrayCopy);
console.log("Old array: ", randomArray);

console.log("=========================Task 4=========================");

console.log("Elements with paired indices: ");
// for (let i = 0; i < randomArray.length; i += 2) {
//   console.log(`Element [${i}] = `, randomArray[i]);
// }

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    console.log(`Element [${i}] = `, randomArray[i]);
  }
}

console.log("=========================Task 5=========================");
let product = 1;
for (let i = 0; i < randomArray.length; i++) {
  product *= randomArray[i];
}

console.log("Product of numbers = ", product);

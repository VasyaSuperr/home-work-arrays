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

console.log("=========================Task 6=========================");
let phones = [
  {
    id: 1,
    img: "https://hotline.ua/img/tx/344/3442123725.jpg",
    brand: "Apple",
    model: "iPhone 12",
    RAM: "4GB",
    capacity: "128GB",
    color: "Black",
    oldPrice: "1299",
    newPrice: 999,
  },
  {
    id: 2,
    img: "https://hotline.ua/img/tx/262/2622235375.jpg",
    brand: "Samsung",
    model: "Galaxy S21",
    RAM: "8GB",
    capacity: "256GB",
    color: "White",
    oldPrice: "1399",
    newPrice: 799,
  },
  {
    id: 3,
    img: "https://blackbullshop.com/wp-content/uploads/2021/11/BS362-GR-1.jpg",
    brand: "Google",
    model: "Pixel 5",
    RAM: "8GB",
    capacity: "256GB",
    color: "Green",
    oldPrice: "999",
    newPrice: 699,
  },
  {
    id: 4,
    img: "https://images.prom.ua/5207734829_w640_h640_smartfon-oneplus-8t.jpg",
    brand: "OnePlus",
    model: "8T",
    RAM: "12GB",
    capacity: "512GB",
    color: "Blue",
    oldPrice: "1045",
    newPrice: 749,
  },
  {
    id: 5,
    img: "https://content2.rozetka.com.ua/goods/images/big/326481333.jpg",
    brand: "Sony",
    model: "Xperia 1 II",
    RAM: "8GB",
    capacity: "64GB",
    oldPrice: "1699",
    newPrice: 1199,
  },
  {
    id: 6,
    img: "https://www.fonezone.ae/cdn/shop/products/RED_d244e905-46ef-4779-b919-f2aa29ac2ffe.jpg?v=1640838368",
    brand: "LG",
    model: "Velvet",
    RAM: "6GB",
    capacity: "32GB",
    color: "Red",
    oldPrice: "1199",
    newPrice: 599,
  },
];

let discount = null;
let sumAllPhones = null;
let ramCounts = {};

document.write(`<section class="all-phone">`);

console.log("Весь масив телефонів:", phones);
for (let i = 0; i < phones.length; i++) {
  discount = parseInt(
    ((phones[i].oldPrice - phones[i].newPrice) / phones[i].oldPrice) * 100
  );

  sumAllPhones += phones[i].newPrice;

  if (ramCounts[phones[i].RAM]) {
    ramCounts[phones[i].RAM]++;
  } else {
    ramCounts[phones[i].RAM] = 1;
  }

  document.write(`
  <article class="phone-card">
    <img class="img-phone" src="${phones[i].img}" alt="Photo phone">
    <div class="icons">
      <a class="like-icon same-value-icon" href="#"><i class="fa-regular fa-heart"></i></a>
      <a class="scales-icon same-value-icon" href="#"><i class="fa-solid fa-scale-balanced"></i></a>
    </div>
    <span class="insert-promotions">- ${discount}%</span>
    <p class="information-phone">Мобільний телефон ${phones[i].brand} ${phones[i].model} 
    ${phones[i].RAM}/${phones[i].capacity} ${phones[i].color}
    </p>
    <p class="assessment"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
    <p class="old-price">${phones[i].oldPrice}$</p>
    <div class="price-basket">
      <p class="new-price">${phones[i].newPrice}$</p>
      <a class="same-value-icon grocery-basket" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <p class="insert-availability">Готовий до відправки <i class="fa-solid fa-align-right"></i><i class="fa-solid fa-truck-moving"></i></p>
    </article>  
  `);
}

document.write(`</section>`);

console.log(
  "The average price of the phone = ",
  Math.round(sumAllPhones / phones.length),
  "$"
);

console.log("RAM counts:", ramCounts);

console.log("=========================Task 8=========================");
const arrayForForceMethods = [-1, 8, 0, 9, 15, 343, 89, 125, -50, -60, 0];
console.log("Array for filter", arrayForForceMethods);

const filteredArrayWithFilter = arrayForForceMethods.filter(
  (element) => element !== 0
);
console.log("Filtered array with filter", filteredArrayWithFilter);

console.log("=========================Task 9=========================");

const filteredArrayWithMap = arrayForForceMethods.map(
  (element) => element / 100
);
console.log("Filtered array with map", filteredArrayWithMap);

console.log("=========================Task 10=========================");

const filteredArrayWithForEach = arrayForForceMethods.forEach((element) => {
  if (Math.cbrt(element) % 1 === 0)
    console.log(`Число ${element} було зведено в куб`);
});

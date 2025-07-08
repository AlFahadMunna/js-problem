// ?get last element from array

// function getLastElement(arr) {
//   return arr[arr.length - 1];
// }

// let arr = [3, 54, 6, 7, 4, 454];

// let lastElement = getLastElement(arr);
// console.log(lastElement);

//? get object length

let obj = {
  mane: "fahad",
  age: 28,
};

let getObjectLength = (object) => {
  return Object.keys(object).length;
};
let length = getObjectLength(obj);
console.log(length);

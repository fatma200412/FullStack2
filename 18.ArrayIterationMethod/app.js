// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr.forEach((elem, index, array) => {
//   console.log(array);
//   return elem * 2;
// });

// let arr3 = arr.map((elem, index, array) => {
//   return elem * 2;
// });

// console.log("arr3", arr3);
// console.log("arr2", arr2);

let students = [
  {
    name: "Elton",
    age: 19,
  },
  {
    name: "Gulay",
    age: 20,
  },
  {
    name: "Samir",
    age: 21,
  },
  {
    name: "Zeyneb",
    age: 20,
  },
];

// let adult = students.map((elem, i, arr) => {
//   //   console.log(elem.age);
//   if (elem.age > 20) {
//     console.log(elem.name);
//   }
// });

let adult = [];

// adult = students.forEach((elem) => {
//   if (elem.age > 19) {
//     adult.push(elem);
//   } else {
//     console.log(`${elem.name} 20den kicikdir`);
//   }
// });

adult = students.find((elem) => elem.age == 20);
console.log("find neticesi", adult);

adult = students.filter((elem) => elem.age == 20);
console.log("filter neticesi", adult);

adult = students.every((elem) => elem.age > 18);
console.log("every neticesi", adult);

adult = students.some((elem) => elem.age > 21);
console.log("some neticesi", adult);

let arr = ["alma", "armud", "banan"];
console.log(arr.includes("ar", 0));

let arr2 = [1, -2, -3, 4];
let arr3 = arr2.reduce((acc, elem) => {
  if (elem > 0) {
    acc.push(elem);
  }
  return acc;
}, []);

console.log(arr3);

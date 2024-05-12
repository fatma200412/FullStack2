// f(x)=3x+8
// salamlama();
// function salamlama() {
//   console.log("Salam");
// }
// salam();
// let salam = function salamlama() {
//   console.log("first");
// };

// function getSum(num1, num2) {
//   console.log(num1 + num2);
// }
// getSum(4, 8);
// getSum(20, 30);

// function salamlama() {
//   console.log("Salam");
// }

// let sayHello = () => {
//   console.log("Hi");
// };

// (function () {
//   console.log("Anonim functuon");
// });

// function getSum(num1 = 2, num2 = 0) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }

// function getDiff(num1, num2) {
//   console.log(num1 - num2);
//   return num1 - num2;
// }

// function hasil(num1, num2) {
//   let sum = getSum(num1, num2);
//   let diff = getDiff(num1, num2);
//   console.log(sum * diff);
// }

// hasil(4, 8);

// function sum() {
//   console.log(arguments[arguments.length - 1]);
//   return "cem yoxdur";
// }

// console.log(sum(1, 2, "fghjk"));

// let sum = () => {
//   console.log("cem yoxdur");
//   return "cem yoxdur";
// };

// sum();
// // console.log(sum());

// let sum = (num1, num2) => {
//   console.log(num1 + num2);
//   return num1 + num2;
// };

// let sum = (num1, num2) => num1 + num2;

// console.log(sum(4, 9));

// let obj = {
//   name: "Elton",
//   surname: "Seferli",
//   age: 18,
//   getFullNameArrow: () => {
//     return "Elton " + "Seferli";
//     //     return this;
//   },
//   getFullNameRegular: function () {
//     return this.name + " " + this.surname;
//     //     return this;
//   },
// };

// let arr1 = [1, 2, (num1) => num1];

// console.log(obj.getFullNameArrow());
// console.log(obj.getFullNameRegular());

// console.log(this);
// console.log(window.alert());

//#region Task20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   //   console.log(typeof arr[i]);
//   if (typeof arr[i] == "string") {
//     //     console.log(arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       if (arr[i][j] == arr[i][j].toUpperCase()) {
//         //   console.log(arr[i][j]);
//         count++;
//       }
//     }
//     //     console.log(count);
//   }

//   if (count > 2) {
//     console.log(arr[i]);
//   }

//   count = 0;
// }

// console.log(count);
//#endregion

//#region 6. Verilmiş  rəqəmlər array-i var, hemin array-deki sade ededlerin sayini tapirsiniz. ( )
let arr = [2, 5, 7, 8, 4, 21];
let count = 0;

for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
  if (arr[i] == 2 || (arr[i] > 1 && arr[i] % i == 0)) {
    count++;
  }
}

console.log(count);
//#endregion

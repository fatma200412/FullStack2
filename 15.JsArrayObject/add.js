// let arr = [1, 22, 2, 3];
// // console.log(typeof arr);
// let arr2 = ["alma", "nar", "banan"];
// let arr3 = [1, 2, true, undefined, null, "alma"];
// // console.log(arr3.length);
// // console.log(arr);
// // console.log(arr2);
// // console.log(arr3[3]);
// // arr3.length = 10;
// // arr3[9] = "asdf";
// // console.log(arr3);

// for (let i = 0; i < arr2.length; i++) {
//   //   console.log("indeks-", i, "element", arr3[i]);
//   //   console.log(arr2[i][arr.length - 1]);
//   //   if (arr2[0] == "a") {
//   //     console.log(arr2[i]);
//   //   } Gulay
//   //   if (arr2[i][0] == "a") {
//   //     console.log(arr2[i]);
//   //   }
//   //   if (arr2[i] == "alma") {
//   //     console.log("Element tapildi");
//   //     break;
//   //   }

//   if (arr2[i].length < 4) {
//     console.log(arr2[i]);
//   }
// }

// let arr = [1, 3, 25, 6, 2];
// let max = arr[0];
// let cem = 0;
// let hasil = 1;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   //   cem = cem + arr[i];
//   //   cem += arr[i];
//   //   hasil *= arr[i];
//   if (arr[i] % 2 == 0) {
//     cem += arr[i];
//   } else {
//     hasil *= arr[i];
//   }
// }
// console.log("max element", max);
// console.log("cemi=", cem);
// console.log("hasil=", hasil);

// console.log("hasil ile ccemin ferqi=", hasil - cem);

// Object

// let obj = {
//   name: "fatma",
//   surname: "quliyeva",
//   age: 25,
//   password: {
//     email: "sdfg@sdfg",
//     pass: "asdf",
//   },
// };

// console.log(JSON.stringify(obj));

// let obj2 = JSON.parse(JSON.stringify(obj));

// // console.log(obj.age);
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));

// obj2.name = "Samir";
// obj2.password.pass = "ertyu";

// console.log(obj);
// console.log(obj2);

// for in for of

// for (acarsoz in obj) {
//   //   console.log(acarsoz);
//   console.log(obj[acarsoz]);
// }

// let arr = [1, 42, 3, 74, 5];

// // for (let elem of arr) {
// //   console.log(elem);
// // }

// for (let elem in arr) {
//   console.log(elem);
// }

let students = [
  {
    id: 1,
    name: "Cavid",
    age: 18,
    kesr: false,
    hobbies: ["futbol", "kod yazmaq"],
    password: {
      email: "cavid@mail.com",
      pass: "1234",
      member: {
        baci: "baci",
        qardas: "qardas",
      },
    },
  },
  {
    id: 2,
    name: "Elmira",
    age: 18,
    kesr: true,
    hobbies: ["musiqi dinlemek", "resm cekmek", "idman etmek"],
    password: {
      email: "elmira@mail.com",
      pass: "46789",
      member: {
        baci: "baci",
      },
    },
  },
  {
    id: 3,
    name: "Gulay",
    age: 19,
    kesr: false,
    hobbies: ["musiqi dinlemek", "seyahet etmek"],
    password: {
      email: "gulay@mail.com",
      pass: "123456",
      member: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 4,
    name: "Elton",
    age: 18,
    kesr: false,
    hobbies: ["musiqi dinlemek", "kod yazmaq"],
    password: {
      email: "elton@mail.com",
      pass: "741852",
      member: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 5,
    name: "Samir",
    age: 18,
    kesr: true,
    password: {
      email: "samir@mail.com",
      pass: "45859",
    },
  },
];

console.log(students);

// console.log(students[2].password.email);

let sum = 0;

for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
  // console.log(students[i].name, students[i].age);
  // console.log(students[i].name, students[i].password?.member?.qardas);
  sum += students[i].age;

  for (let j = 0; j < students[i].hobbies?.length; j++) {
    console.log(students[i].hobbies[j]);
  }
}
// console.log(sum);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 5, 7, 8];

// for (let i = 0; i < arr1.length; i++) {
//   // console.log(arr1[i]);
//   for (let j = 0; j < arr2.length; j++) {
//     // console.log(arr2[j]);
//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }

// console.log(students);
// console.log(students[2]);

// let obj = {
//   id: 6,
//   name: "Zeyneb",
//   age: 18,
//   kesr: true,
//   hobbies: ["musiqi dinlemek", "kod yazmaq"],
//   password: {
//     email: "zeyneb@mail.com",
//     pass: "45859",
//   },
// };

// students.push(obj);
// students.unshift(obj);
// console.log(students);

// students.pop(obj);
// students.shift(obj);
// console.log(students.pop(obj));
// console.log(JSON.parse(JSON.stringify(students)));

// let arr = ["alma", "armud", "banan", "gilas"];

// // console.log(arr.join("+"));

// // delete arr[0];

// // console.log(arr);

// let arr2 = [1, 2, 3];

// let newArr = arr.concat(arr2);
// console.log(newArr);
// // console.log(newArr.splice(2, 4));
// console.log(newArr.slice(1, 7, "kivi"));

// let arr = [1, 2, [3, 4], [2, 5]];
// console.log(arr);

// console.log(arr.flat());

// let obj2 = {
//   name: "fatma",
//   surname: "quliyeva",
// };

// let { name: ad, surname: soyad } = obj2;

// console.log(ad);

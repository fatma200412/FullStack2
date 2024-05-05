// for (let i = 20; i > 10; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} cutdur`);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 10; i < 100; i++) {
//   console.log(i);
// }
// for (let i = 100; i > 9; i--) {
//   console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//   if (i > 9 && i < 100) {
//     console.log(i);
//   }
// }

// let i = 0;

// while (i < 5) {
//   console.log(i);

//   i++;
// }

// let i = 0;

// while (i <= 20) {
//   //   console.log(i);
//   if (i % 2 == 0) {
//     console.log(`${i}-cutdur`);
//   } else {
//     console.log(`${i}-tekdir`);
//   }

//   i++;
// }

// let i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let i = 5;

// do {
//   console.log(i);
//   i++;
// } while (i > 5 && i < 6);

// let month = prompt("Ayin nomresini daxil edin");
// month = Number(month);
// let contreller = true;

// do {
//   switch (month) {
//     case 1:
//       console.log("qis");
//       contreller = false;
//       break;
//     case 2:
//       console.log("qis");
//       contreller = false;
//       break;
//     case 3:
//       console.log("yaz");
//       contreller = false;
//       break;
//     case 4:
//       console.log("yaz");
//       contreller = false;
//       break;
//     case 5:
//       console.log("yaz");
//       contreller = false;
//       break;
//     case 6:
//       console.log("yay");
//       contreller = false;
//       break;
//     case 7:
//       console.log("yay");
//       contreller = false;
//       break;
//     case 8:
//       console.log("yay");
//       contreller = false;
//       break;
//     case 9:
//       console.log("payiz");
//       contreller = false;
//       break;
//     case 10:
//       console.log("payiz");
//       contreller = false;
//       break;
//     case 11:
//       console.log("payiz");
//       contreller = false;
//       break;
//     case 12:
//       console.log("qish");
//       contreller = false;
//       break;

//     default:
//       month = prompt("Yeniden daxil edin");
//       month = Number(month);
//       break;
//   }
// } while (contreller);

//          012345678910
// let word = "apple hello!";

// // console.log(word.length);
// // console.log(word[0]);
// // console.log(word[word.length - 1]);

// for (let i = 0; i < word.length; i++) {
//   console.log(`${word[i]}--indeks=>${i}`);
// }

// let word = "azerbaycan";

// // for (let i = 0; i < word.length; i++) {
// //   console.log(word[i]);
// //   if (word[i] == "y") {
// //     break;
// //   }
// // }
// for (let i = 0; i < word.length; i++) {
//   if (word[i] == "a" || word[i] == "e") {
//     console.log(`${word[i]}=>saitdir`);
//     continue;
//   }
//   console.log(word[i]);
// }



let soz1 = "alma";
let soz2 = "armud";
let uzunluq;

if (soz1.length < soz2.length) {
  uzunluq = soz2.length;
} else {
  uzunluq = soz1.length;
}
for (let i = 0; i < uzunluq; i++) {
  if (soz1[i] == soz2[i]) {
    console.log(soz1[i]);
  }
}

// eger(shert){

//       bu hisseye aid kodlar

// }yoxsa{
//       kodlar
// }

// let num = 0;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else {
//   console.log("eded menfidir");
// }

// let result = 40;

// if (result > 50) {
//   console.log("telebe imtahani ugurlar kecdi");
// } else {
//   console.log("telebe kesilir");
// }

// let btn = "gsdg";

// if (btn == true) {
//   console.log("isiq yanir");
// } else {
//   console.log("isiq sonur");
// }

// true-1
// false-0
// false---false,0,null,NaN,underfined,""

// let num = 0;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else if (num < 0) {
//   console.log("eded menfidir");
// } else {
//   console.log("eded 0-a beraberdir");
// }

// let num = 11;

// if (num % 2 == 0) {
//   if (num == 0) {
//     console.log("eded 0-a beraberdir");
//   } else {
//     console.log("eded cutdur");
//   }
// } else {
//   console.log("eded tekdir");
// }

// if (num % 2 == 0 && num != 0) {
//   console.log("eded cutdur");
// } else if (num % 2 != 0 && num != 0) {
//   console.log("eded tekdir");
// } else {
//   console.log("eded 0-dir");
// }

// 90<result =>A                90<bal
// result>80 ve result<91 =>B   90<bal<91
// result>70 ve result<81  =>C  70<bal<81
// result>60 ve result <71 =>D  60<bal<71
// result>50 ve result<61 =>E  50<bal<61
// let result = 80;

// 50<bal<61
// if (result > 50 && result < 61) {
//   console.log("Telebe imtahandan E alib");
// } else if (result > 60 && result < 71) {
//   console.log("Telebe imtahandan D alib");
// } else if (result > 70 && result < 81) {
//   console.log("Telebe imtahandan C alib");
// } else if (result > 80 && result < 91) {
//   console.log("Telebe imtahandan B alib");
// } else if (result > 90) {
//   console.log("Telebe imtahandan A alib");
// } else {
//   console.log("Telebe kesildi");
// }

// let btn = false;

// if (btn == true) {
//   console.log("isiq yanir");
// } else {
//   console.log("isiq sonur");
// }
// btn ? console.log("isiq yanir") : console.log("isiq sonur");

// let day = 2;
// let ticket = false;

// switch (day) {
//   case 1:
//     console.log("bazar ertesi");
//     break;
//   case 2:
//     console.log("cersenbe axsami");
//     if (ticket == true) {
//       console.log("bilet var");
//     } else {
//       console.log("bilet yoxdur");
//     }
//     break;
//   case 3:
//     console.log("cersenbe");
//     break;
//   case 4:
//     console.log("cume axsami");
//     break;
//   case 5:
//     console.log("cume");
//     break;
//   case 6:
//     console.log("senbe");
//     break;
//   case 7:
//     console.log("bazar");
//     break;

//   default:
//     console.log("gunu duzgun teyin edin");
//     break;
// }

// alert("Hello");
// let age = prompt("Yasinizi daxil edin");
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);

// console.log("age=", age);

// console.log(typeof String(12));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log("null=", Boolean(null));
// console.log("NaN=", Boolean(NaN));
// console.log("Underfined=", Boolean(undefined));
// console.log("_", Boolean(""));
// console.log("sdfghj", Boolean("asdfghjk"));

// let question = confirm("Derse qosulmusunuzmu?");
// console.log("question", question);

// let age = prompt("Yasinizi daxil edin");
// console.log(typeof age);
// age = Number(age);
// console.log("age=", age);
// console.log(typeof age);

// // 2024-"25"
// console.log("Tevellud", 2024 - age);

// let width = prompt("kvadratin terefini daxil edin");
// width = Number(width);
// // "5"*"5"
// console.log(width ** 2);

// let age = prompt("Yasinizi daxil edin");
// age = Number(age);
// console.log("age=", age);

// if (age < 15) {
//   console.log("giris qadagandir");
// } else {
//   console.log("xos gelmisiniz");
// }

// console.log("salam" + 5);
// console.log("salam+5+5" + 5);
// console.log(`yas= ${age}`);

// if (undefined ?? 4 < 5) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// alqoritm

// 1-balansi goster
// 2-balansa pul elave et
// 3-balansdam pul cek
// 4-cixis edildi

let balans = 100;
let istifadeci = prompt("Emeliyyati secin");
let mebleg;
istifadeci = Number(istifadeci);

switch (istifadeci) {
  case 1:
    console.log(`Balansiniz ${balans} AZN-dir`);
    alert(`Balansiniz ${balans} AZN-dir`);
    break;
  case 2:
    mebleg = prompt("Meblegi yazin");
    mebleg = Number(mebleg);
    //     balans = balans + mebleg;502
    balans += mebleg;
    1;
    console.log(`Balansiniz ${balans} AZN-dir`);
    alert(`Balansiniz ${balans} AZN-dir`);
    break;
  case 3:
    mebleg = prompt("Meblegi yazin");
    mebleg = Number(mebleg);
    //     balans -= mebleg;
    if (mebleg > balans) {
      console.log("Meblegi duzgun teyin edin");
      alert("Meblegi duzgun teyin edin");
    } else {
      balans -= mebleg;
    }
    console.log(`Balansiniz ${balans} AZN-dir`);
    alert(`Balansiniz ${balans} AZN-dir`);
    break;
  case 4:
    console.log(`Cixis edildi`);
    alert(`Cixis edildi`);
    break;
  default:
    console.log("Emeliyyati duzgun teyin edin");
    alert("Emeliyyati duzgun teyin edin");
    break;
}

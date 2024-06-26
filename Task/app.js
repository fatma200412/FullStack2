//#region  Task 18

// function removeElement(arr, value) {
//   return arr.filter((elem) => elem !== value);
// }

// let arr = [12, 45, 78, 200];

// console.log(removeElement([1, 2, 3, 4, 5, 6], 4));
// console.log(removeElement(arr, 45));
//#endregion

//#region  Task 14

// let string = "javascript dilində proqramlaşdırma öyrənirəm.";
// let str = "sdfghjk";
// let saitlersayi = string.match(/[aıoueəiöü]/gi)?.length || 0;
// let saitlersayi2 = str.match(/[aıoueəiöü]/gi)?.length || 0;

// console.log(saitlersayi);
// console.log(saitlersayi2);

//#endregion

//#region Task16

// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   return n * factorial(n - 1);
// }

// let x = Number(prompt("eded:"));
// console.log(factorial(x));

// 5!=5*4*3*2*1

//#endregion

//#region  Task17

// function countWords(sentence) {
//   let word = sentence.trim().split(/\s+/);

//   return word.length;
// }

// let str = prompt("setiri daxil edin");

// console.log(countWords(str));

// document.body.innerHTML = `<p> Sozlerin sayi: ${countWords(str)} </p>`;

//#endregion

// Task js -2

//#region  Task2. Arraydə tekrarlanan ədədləri konsolo yazan
// funksiya yazın.
// ([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 1]=>[4, 6, 1])

// function tekrarlananEdedler(arr) {
//   // let baxis = new Set();

//   // return arr.filter((number) => baxis.size === baxis.add(number).size);

//   return Array.from(new Set(arr));
// }

// let netice = tekrarlananEdedler([1, 2, 2, 3, 3, 4, 1, 5]);
// console.log(netice);

// [1,2,2,3,3,4,1,5]=> {1,2,3,4,5} =>[1,2,3,4,5]

//#endregion

//#region  Task5. Palindron

function isPalindrome(str) {
  let cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

let netice = isPalindrome("asa");
console.log(netice);

// salam7malas5,.

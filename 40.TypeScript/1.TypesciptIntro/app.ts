// console.log("Salam");
// console.log("hello");
// console.log("dfghj");
// console.log("ERTYUI");

let num: any = 1;
num = "hj";
// num = 2;
console.log(num);

// console.log(Object)
let word: String = "salam";
word = `${num}`;

// " " ' ' ` `

console.log(typeof word, word);

let bool: boolean = true;
bool = false;
// bool = "hjk";
console.log(bool);

let obj: {};

obj = {
  name: "fatma",
  surname: "guliyeva",
  age: 26,
};

console.log(obj);

let obj2: {
  name: string;
  age: number;
  isStudent: boolean;
};

obj2 = {
  name: "Samir",
  age: 20,
  isStudent: false,
};

console.log(obj2);

let obj3: {
  name: string;
  id: number;
} = {
  name: "Elmira",
  id: 1,
};

let arr1: string[] = ["a", "s", "d"];
let arr2: number[] = [1, 2, 3];
let arr3: boolean[] = [true, false, false, true];

// ["ghj",2.true,{}]

let arr4: object[] = [
  {
    id: 1,
    name: "Samir",
  },
  {
    id: 2,
    name: "Qezenfer",
  },
  {
    id: 3,
    name: "Elmira",
  },
];

console.log(arr4);

let tupleArr: [string, number, number, boolean, object?];
// let tupleArr: [number, bigint, string, boolean];
tupleArr = ["dfghj", 1, 5, true];
console.log(tupleArr);

enum Week {
  Mon = 1,
  Tues,
  Wed,
  Thur,
  Friday,
  Sutersay,
  Sunday,
}

console.log("bazar ertesi", Week.Mon);

function sayHello(): void {
  console.log("hello");
}

sayHello();

function sayBye(data: object[]): string {
  return "bye";
}

let result: string | number | boolean;

result = "sdfghj";
result = 2;

console.log(result);

let arr: (string | number | boolean)[];
arr = [2, "fghj", 5, false];

console.log(arr);

// let event:"click"|"input"|"submit"

// // InputDeviceInfo.addEventListener(click)
// button.addEventListener(event)
// input.addEventListener("input")
// form.addEventListener("submit")

type istenilenTip = string | number | object;

let a: istenilenTip;

a = 10;
a = "dfghj";
a = {
  name: "fatma",
};

console.log(a);


interface Redux{
      value:number,
      arr:string[]
}

inntS :Redux={

}
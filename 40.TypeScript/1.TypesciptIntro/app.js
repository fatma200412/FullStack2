// console.log("Salam");
// console.log("hello");
// console.log("dfghj");
// console.log("ERTYUI");
var num = 1;
num = "hj";
// num = 2;
console.log(num);
// console.log(Object)
var word = "salam";
word = "".concat(num);
// " " ' ' ` `
console.log(typeof word, word);
var bool = true;
bool = false;
// bool = "hjk";
console.log(bool);
var obj;
obj = {
    name: "fatma",
    surname: "guliyeva",
    age: 26,
};
console.log(obj);
var obj2;
obj2 = {
    name: "Samir",
    age: 20,
    isStudent: false,
};
console.log(obj2);
var obj3 = {
    name: "Elmira",
    id: 1,
};
var arr1 = ["a", "s", "d"];
var arr2 = [1, 2, 3];
var arr3 = [true, false, false, true];
// ["ghj",2.true,{}]
var arr4 = [
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
var tupleArr;
// let tupleArr: [number, bigint, string, boolean];
tupleArr = ["dfghj", 1, 5, true];
console.log(tupleArr);
var Week;
(function (Week) {
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tues"] = 2] = "Tues";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thur"] = 4] = "Thur";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Sutersay"] = 6] = "Sutersay";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
console.log("bazar ertesi", Week.Mon);
function sayHello() {
    console.log("hello");
}
sayHello();
function sayBye(data) {
    return "bye";
}
var result;
result = "sdfghj";
result = 2;
console.log(result);
var arr;
arr = [2, "fghj", 5, false];
console.log(arr);
var a;
a = 10;
a = "dfghj";
a = {
    name: "fatma",
};
console.log(a);
inntS: Redux = {};

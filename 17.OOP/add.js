// class Name {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

// }

class Person {
  #age;
  constructor(name, surname, age, point) {
    this.name = name;
    this.surname = surname;
    this.#age = age;
    this.point = point;
  }

  getFullName() {
    console.log(`${this.name} ${this.surname} is student.`);
  }

  getAge() {
    console.log(`${this.name} is ${this.#age} year old.`);
  }
  get() {
    return `${this.#age}`;
  }

  set() {
    return (this.#age = 20);
  }

  get age() {
    const d = new Date();
    return d
  }
}

let student1 = new Person("Cavid", "Namazov", 19, 500);
console.log(student1);
console.log(student1.name);

console.log(student1.age);
console.log(student1.get());
console.log(student1.set());

student1.getFullName();
student1.getAge();

class Student extends Person {
  //   group;
  //   gender;
  constructor(name, surname, age, point, group, gender) {
    super(name, surname, age, point);

    this.group = group;
    this.gender = gender;
  }
  getFullName() {
    super.getFullName();
    console.log(`${this.name} is ${this.group} groups`);
  }

  getDetails() {
    console.log(
      `Name:${this.name}, Surname:${this.surname}, Age:${this.age}, Point:${this.point},Group:${this.group},Gender:${this.gender}`
    );
  }
}

let student2 = new Student("Elmira", "Eliyeva", 20, 600, "fullstack2", "woman");
console.log(student2);
student2.getFullName();

student2.getDetails();

let student3 = new Student("Elton", "Seferli", 21, 650, "fullstack1", "man");
console.log(student3.name);
console.log(student3.age);

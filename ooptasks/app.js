//#region Task4

// class BankAccount {
//   constructor(number, balance) {
//     this.number = number;
//     this.balance = balance;
//   }
//   getDeposit(money) {
//     console.log(`Deposit=${money}`);
//     this.balance += money;
//   }
//   getWithDraw(money) {
//     if (money <= this.balance) {
//       this.balance -= money;
//       console.log(`Withdraw= ${money}`);
//     } else {
//       console.log("Not enough balance");
//     }
//   }
// }

// let account = new BankAccount("a123", 100);
// console.log(account);
// account.getDeposit(50);
// console.log(account);

// account.getWithDraw(60);
// console.log(account);
// account.getWithDraw(100);

//#endregion

//#region  Task9

// class Bank {
//   constructor(name, branches) {
//     this.name = name;
//     this.branches = branches;
//   }

//   getAddingBranch(branch) {
//     this.branches.push(branch);
//     console.log(`${this.branches} added`);
//   }

//   getRemoveBranch(branch) {
//     const i = this.branches.indexOf(branch);
//     console.log(i);
//     if (i !== -1) {
//       console.log(this.branches.splice(i, 1) + " remove");
//     } else {
//       console.log("hemin indeksli branch yoxdur");
//     }

//     console.log(branch);
//   }

//   getAllBranch() {
//     console.log(`Branches: ${this.branches}`);
//   }
// }

// let bank1 = new Bank("KapitalBank", []);
// console.log(bank1);

// bank1.getAddingBranch("I branch");
// bank1.getAddingBranch("II branch");
// bank1.getAddingBranch("III branch");

// console.log("---------------------");
// bank1.getAllBranch();

// bank1.getRemoveBranch("II branch");

// bank1.getAllBranch();

//#endregion

//#region  Task10

// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   getCaculateTotalPrice(quantity) {
//     return this.price * quantity;
//   }
// }

// class PersonalCareProduct extends Product {
//   constructor(id, name, price, warrantPeriod) {
//     super(id, name, price);
//     this.warrantPeriod = warrantPeriod;
//   }

//   getCaculateTotalPrice(quantity) {
//     return super.getCaculateTotalPrice(quantity) + this.warrantPeriod;
//   }
// }

// let personalCareProduct1 = new PersonalCareProduct(1, "pen", 4, 1);

// console.log(personalCareProduct1.getCaculateTotalPrice(2));

//#endregion

//#region  Task11

class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  getDeposit(money) {
    this.balance += money;
    console.log(`Amount ${money} deposited ${this.accountHolderName}`);
  }

  getWithDraw(money) {
    if (money <= this.balance) {
      this.balance -= money;
      console.log(`Amount ${money} withdraw  ${this.accountHolderName}`);
    } else {
      console.log("Not enough balance");
    }
  }

  getTransfer(money, transferAccount) {
    if (money <= this.balance) {
      this.balance -= money;
      transferAccount.getDeposit(money);
      console.log("Transfered");
    } else {
      console.log("Not enough balance");
    }
  }

  getBalance() {
    console.log(`${this.accountHolderName} is balance ${this.balance}`);
  }
}

let account1 = new BankAccount("a1", "Gulay", 100);
let account2 = new BankAccount("b1", "Fatma", 200);

account1.getBalance();
account2.getBalance();
console.log("--------------");

account1.getDeposit(100);
account1.getBalance();
console.log("--------------");

account1.getWithDraw(50);
account1.getBalance();
console.log("--------------");

account1.getTransfer(50, account2);

account1.getBalance();
account2.getBalance();

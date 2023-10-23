// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
    } else {
      this.balance += amount;
      console.log("Amount credited successfully");
    }
  }

  withdraw(amount) {
    if (this.balance <= amount || amount <= 0) {
      console.log("Invalid amount");
    } else {
      this.balance -= amount;
      console.log("Amount withdrawal successfully");
    }
  }

  displayBalance() {
    console.log(
      `Owner is: ${this.owner} Available Balance is: ${this.balance}`
    );
  }
}

const account = new BankAccount(5000, "Munendra");
account.displayBalance();
account.deposit(-4000);
account.withdraw(-2000);
account.displayBalance();

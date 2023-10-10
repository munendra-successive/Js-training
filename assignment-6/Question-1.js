// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(balance,owner)
    {
        this.balance=balance;
        this.owner=owner;
    }
    deposit(amount) {
        this.balance+=amount;
        console.log("Amount credited successfully");
    }

    withdraw(amount)
    {
        if(this.balance>=amount)
        {
            this.balance-=amount;
        }
        else
        {
            console.log("Insufficient Balance ");
        }
    }

    displayBalance()
    {
        console.log(`Owner is: ${this.owner} Available Balance is: ${this.balance}`);
    }
}

let account = new BankAccount(5000,"Munendra");
account.displayBalance();
account.deposit(4000);
account.withdraw(2000);
account.displayBalance();
// Iban, Inhabe, Balance

class BankKonto {
    #iban;
    #inhaber;
    #balance;
    constructor(iban, inhaber, balance) {
        this.#iban = iban;
        this.#inhaber = inhaber;
        this.#balance = balance;
    }
    get iban() {
        return this.#iban;
    }
    get inhaber() {
        return this.#inhaber;
    }
    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        this.#balance = newBalance;
    }
    deposit(balance) {
        this.#balance += balance;
    }
    //  Method geld abheben mit Validierung
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Nicht genug Geld auf dem Konto");
         } else {
                this.#balance -= amount;
                console.log(`Your new balance is ${this.#balance}`);
            }
        }

    // Method komplett Account info zu bekommen
    displayAccountInfo(){
        console.log(`Account nummer: ${this.#iban}
Account holder: ${this.#inhaber}
Balance: ${this.#balance}`);
    }
}

const konto1 = new BankKonto("DE123456789", "Alice", 1000);
const konto2 = new BankKonto("DE987654321", "Bob", 500);

console.log(konto1);// BankKonto {}
console.log(konto1.iban);//DE123456789
console.log(konto1.inhaber);//Alice
console.log(konto1.balance);//1000
konto1.deposit(1000);
console.log(konto1.balance);//1500
konto1.withdraw(2000);//Nicht genug Geld auf dem Konto
konto1.withdraw(500);//Your new balance is 1000
konto1.displayAccountInfo();

// Soru-1
function createCounter() {
    let counter = 0;
    return function () {
        return counter=counter+1;
    };
}

// Kullanım:
const counter1 = createCounter();
console.log(counter1()); // Çıktı: 1
console.log(counter1()); // Çıktı: 2
console.log(counter1()); // Çıktı: 3

const counter2 = createCounter();
console.log(counter2()); // Çıktı: 1
console.log(counter2()); // Çıktı: 2



// Soru-2
function createMessageGenerator(baseMessage) {
    function generateMessage(name) {
        return `${baseMessage}, ${name}!`;
    }
    return generateMessage;
}

// Kullanım:
const welcomeMessage = createMessageGenerator("Welcome");
console.log(welcomeMessage("Ali")); // Çıktı: Welcome, Ali!
console.log(welcomeMessage("Veli")); // Çıktı: Welcome, Veli!

const goodbyeMessage = createMessageGenerator("Goodbye");
console.log(goodbyeMessage("Ali")); // Çıktı: Goodbye, Ali!

console.clear();

// Soru-3
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Yatırılan: ${amount}, Yeni Bakiye: ${balance}`);
        },
        withdraw: function (amount) {
            balance -= amount;
            console.log(`Çekilen: ${amount}, Kalan Bakiye: ${balance}`);
        },
        getBalance: function () {
            console.log(`Şu Anki Bakiye: ${balance}`);
        }

    };
}

// Kullanım:
const myAccount = createBankAccount(1000);
myAccount.deposit(500); // Çıktı: Yatırılan: 500, Yeni Bakiye: 1500
myAccount.withdraw(300); // Çıktı: Çekilen: 300, Kalan Bakiye: 1200
myAccount.getBalance(); // Çıktı: Şu Anki Bakiye: 1200

console.log(myAccount.balance); // undefined (Dışarıdan erişim olmamalı)


// Soru-4
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

// Kullanım:
const double = createMultiplier(2);
console.log(double(5)); // Çıktı: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Çıktı: 15

console.clear();

// Soru-5

function createCallCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(`Bu fonksiyon ${counter}. kez çağrıldı`);
    };
}

// Kullanım:
const counter = createCallCounter();
counter(); // Çıktı: Bu fonksiyon 1. kez çağrıldı
counter(); // Çıktı: Bu fonksiyon 2. kez çağrıldı
counter(); // Çıktı: Bu fonksiyon 3. kez çağrıldı
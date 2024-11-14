//1. Veri Yapısı Sınıfları (Data Structure Classes)
//     console.log(`Merhaba, ben ${this.name}`);
//     }
// Stack (Yığın) Sınıfı
//Yığın (stack), son giren ilk çıkar (LIFO) prensibiyle çalışan bir veri yapısıdır.
//Yığın sınıfı, verileri yığın yapısına uygun olarak eklemek ve çıkarmak için kullanılır.

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item); // Eleman ekleme
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop(); // Son elemanı çıkarma
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1]; // Son elemanı görme
    }

    isEmpty() {
        return this.items.length === 0; // Yığının boş olup olmadığını kontrol etme
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Çıktı: 20
stack.pop();
console.log(stack.peek()); // Çıktı: 10


//Queue (Kuyruk) Sınıfı
//Kuyruk (queue), ilk giren ilk çıkar (FIFO) prensibiyle çalışan bir veri yapısıdır.
//Kuyruk sınıfı, verileri kuyruk yapısına uygun olarak eklemek ve çıkarmak için kullanılır.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item); // Kuyruğa eleman ekleme
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift(); // Kuyruğun başındaki elemanı çıkarma
    }

    isEmpty() {
        return this.items.length === 0; // Kuyruğun boş olup olmadığını kontrol etme
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
console.log(queue.dequeue()); // Çıktı: 5

//LinkedList (Bağlı Liste) Sınıfı
//Bağlı liste (linked list), düğümlerden oluşan bir veri yapısıdır.
//Her düğüm, veriyi ve bir sonraki düğümü gösteren bir referansı içerir.
//Bağlı liste sınıfı, verileri bağlı liste yapısına uygun olarak eklemek ve çıkarmak için kullanılır.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//2. Matematik ve Hesaplama Sınıfları
//Matematik ve hesaplama sınıfları, matematiksel işlemleri gerçekleştirmek için kullanılır.
//Bu sınıflar, temel matematik işlemleri, geometri hesaplamaları, rastgele sayı üretimi gibi işlemleri yapabilir.

class Geometry {
    static circleArea(radius) {
        return Math.PI * radius * radius;
    }

    static rectangleArea(width, height) {
        return width * height;
    }

    static rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
}

console.log(Geometry.circleArea(5)); // Çıktı: 78.53981633974483
console.log(Geometry.rectangleArea(4, 5)); // Çıktı: 20
console.log(Geometry.rectanglePerimeter(4, 5)); // Çıktı: 18

//Random (Rastgele Sayı) Sınıfı
//Rastgele sayı sınıfı, belirli aralıklarda rastgele sayılar üretmek için kullanılır.
//Bu sınıf, rastgele sayı üretme, rastgele eleman seçme gibi işlemleri yapabilir.

class Random {
    static generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static pickRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

console.log(Random.generateRandomNumber(1, 10)); // 1 ile 10 arasında rastgele sayı
console.log(Random.pickRandomElement(["Elma", "Armut", "Kiraz"])); // Rastgele meyve seçimi

//3. Kullanıcı Yönetimi Sınıfları
//Kullanıcı yönetimi sınıfları, kullanıcı bilgilerini saklamak ve işlemek için kullanılır.
//Bu sınıflar, kullanıcı ekleme, silme, güncelleme gibi işlemleri yapabilir.

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password; // Bu örnekte basitlik için şifre düz metin olarak saklanır.
    }

    changePassword(newPassword) {
        this.password = newPassword;
        console.log("Şifre değiştirildi.");
    }

    validatePassword(password) {
        return this.password === password; // Şifre doğrulama
    }
}

const user = new User("user1", "pass123");
console.log(user.validatePassword("pass123")); // Çıktı: true
user.changePassword("newPass");
console.log(user.validatePassword("newPass")); // Çıktı: true

//4. API ve Veri Alma Sınıfları
//API ve veri alma sınıfları, dış kaynaklardan veri almak ve işlemek için kullanılır.
//Bu sınıflar, API istekleri yapma, veri çekme, veri işleme gibi işlemleri yapabilir.

class Api {
    static async getData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Veri alınırken hata oluştu:", error);
        }
    }
}

// const data = await Api.getData("https://api.example.com/data");
// console.log(data);

//5. İstatistik ve Veri Analizi Sınıfları
//İstatistik ve veri analizi sınıfları, veriler üzerinde istatistiksel işlemler yapmak için kullanılır.
//Bu sınıflar, ortalama, medyan, standart sapma gibi istatistiksel hesaplamaları yapabilir.

class Statistics {
    static mean(data) {
        const sum = data.reduce((acc, value) => acc + value, 0);
        return sum / data.length;
    }

    static median(data) {
        const sorted = data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    static mode(data) {
        const frequency = {};
        data.forEach(value => frequency[value] = (frequency[value] || 0) + 1);
        let maxCount = 0;
        let mode = null;
        for (let key in frequency) {
            if (frequency[key] > maxCount) {
                maxCount = frequency[key];
                mode = key;
            }
        }
        return mode;
    }
}

const data = [1, 2, 2, 3, 4];
console.log(Statistics.mean(data)); // Çıktı: 2.4
console.log(Statistics.median(data)); // Çıktı: 2
console.log(Statistics.mode(data)); // Çıktı: 2


//6. Oyun Mekanikleri için Sınıflar
//Oyun mekanikleri için sınıflar, oyun geliştirme sürecinde kullanılan sınıflardır.
//Bu sınıflar, karakter, düşman, silah gibi oyun öğelerini temsil edebilir.

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(target) {
        if (target.health > 0) {
            target.health -= this.strength;
            console.log(`${this.name}, ${target.name} isimli hedefe saldırdı. Hedefin kalan sağlığı: ${target.health}`);
        } else {
            console.log(`${target.name} zaten yenilmiş.`);
        }
    }

    heal(amount) {
        this.health += amount;
        console.log(`${this.name} iyileşti. Sağlık: ${this.health}`);
    }
}

const hero = new Character("Kahraman", 100, 20);
const monster = new Character("Canavar", 80, 15);

hero.attack(monster); // Çıktı: "Kahraman, Canavar isimli hedefe saldırdı. Hedefin kalan sağlığı: 60"
monster.heal(10); // Çıktı: "Canavar iyileşti. Sağlık: 70"


//7. Dosya İşleme Sınıfları (Node.js Ortamında)
//Dosya işleme sınıfları, dosya okuma, yazma, güncelleme gibi işlemleri yapmak için kullanılır.
//Bu sınıflar, dosya okuma, yazma, güncelleme gibi işlemleri yapabilir.

const fs = require('fs');

class FileManager {
    static readFile(filePath) {
        return fs.readFileSync(filePath, 'utf8');
    }

    static writeFile(filePath, content) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Dosyaya yazıldı.");
    }
}

// FileManager.writeFile("test.txt", "Merhaba, dünya!");
// console.log(FileManager.readFile("test.txt"));

//8. E-Ticaret Sınıfları
//E-ticaret sınıfları, e-ticaret uygulamalarında kullanılan sınıflardır.
//Bu sınıflar, ürün ekleme, sepet işlemleri, sipariş oluşturma gibi işlemleri yapabilir.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
        console.log(`${product.name} sepete eklendi.`);
    }

    removeItem(product) {
        this.items = this.items.filter(item => item.product !== product);
        console.log(`${product.name} sepetten çıkarıldı.`);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

const product1 = new Product("Elma", 3);
const product2 = new Product("Armut", 5);

const cart = new ShoppingCart();
cart.addItem(product1, 2);

console.log(cart.getTotalPrice()); // Çıktı: 6

cart.addItem(product2, 3);
cart.removeItem(product1);

console.log(cart.getTotalPrice()); // Çıktı: 15



//JavaScript'te sınıflarda (class) tanımlayabileceğiniz metotlar, sınıfın yapısına ve amacına bağlı olarak çok çeşitlidir. 
//Bu metotlar sayesinde nesneler üzerinde ekleme, çıkarma, güncelleme gibi işlemler yapabiliriz. 
//Aşağıda sınıflarda kullanılabilecek bazı temel metot türlerini açıklamalar ve örneklerle birlikte listeledim.




class ShoppingCart {
    constructor() {
        this.items = [];
    }
// 1. Ekleme Metodu (add)
    addItem(item) {
        this.items.push(item);
        console.log(`${item} sepete eklendi.`);
    }
// 2. Çıkarma Metodu (remove)
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`${item} sepetten çıkarıldı.`);
        } else {
            console.log(`${item} sepetinizde bulunmamaktadır.`);
        }
    }
// 3. Güncelleme Metodu (update)
    updateItem(oldItem, newItem) {
        const index = this.items.indexOf(oldItem);
        if (index !== -1) {
            this.items.splice(index, 1, newItem);
            console.log(`${oldItem} yerine ${newItem} sepete eklendi.`);
        } else {
            console.log(`${oldItem} sepetinizde bulunmamaktadır.`);
        }
    }

// 4. Arama Metodu (find veya search)
    findItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            console.log(`${item} sepetinizde bulunmaktadır.`);
        } else {
            console.log(`${item} sepetinizde bulunmamaktadır.`);
        }
    }
// 5. Listeleme Metodu (list veya display)
    listItems() {
        console.log("Sepetinizdeki ürünler:");
        this.items.forEach((item) => {
            console.log(item);
        });

    }

}
const cart1 = new ShoppingCart();
cart1.addItem("Elma"); // Çıktı: "Elma sepete eklendi."
cart1.addItem("Armut"); // Çıktı: "Armut sepete eklendi."
cart1.listItems(); // Çıktı: "Sepetinizdeki ürünler:" "Elma" "Armut"
cart1.removeItem("Elma"); // Çıktı: "Elma sepetten çıkarıldı."
cart1.updateItem("Armut", "Karpuz"); // Çıktı: "Armut yerine Karpuz sepete eklendi."
cart1.findItem("Karpuz"); // Çıktı: "Karpuz sepetinizde bulunmaktadır."

console.clear();

// 6. Toplam Sayı veya Değer Alma Metodu (count veya total)

class ShoppingCart2 {
    constructor() {
        this.items = [{ name: "Elma", price: 3 }, { name: "Armut", price: 5 }];
    }

    getTotalPrice() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        console.log(`Toplam fiyat: ${total} TL`);
        return total;
    }
}

const cart = new ShoppingCart2();
cart.getTotalPrice(); // Çıktı: "Toplam fiyat: 8 TL"


//7. Sıfırlama Metodu (clear veya reset)
class ShoppingCart3 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    clearCart() {
        this.items = [];
        console.log("Sepet sıfırlandı.");
    }
}

const cart2 = new ShoppingCart3();
cart2.clearCart(); // Çıktı: "Sepet sıfırlandı."
console.log(cart2.items); // Çıktı: []

//8. Durum Kontrol Metodu (isEmpty, hasItem)
class ShoppingCart4 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    isEmpty() {
        if (this.items.length === 0) {
            console.log("Sepetiniz boş.");
        } else {
            console.log("Sepetiniz dolu.");
        }
    }

    hasItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            console.log(`${item} sepetinizde bulunmaktadır.`);
        } else {
            console.log(`${item} sepetinizde bulunmamaktadır.`);
        }
    }
}

const cart3 = new ShoppingCart4();
cart3.isEmpty(); // Çıktı: "Sepetiniz dolu."
cart3.hasItem("Elma"); // Çıktı: "Elma sepetinizde bulunmaktadır."

console.clear();

//9. Filtreleme Metodu (filter)
class ShoppingCart5 {
    constructor() {
        this.items = [{ name: "Elma", price: 3 }, { name: "Armut", price: 5 }];
    }

    filterItems(price) {
        const filteredItems = this.items.filter((item) => item.price <= price);
        console.log("Fiyata göre filtrelenmiş ürünler:");
        filteredItems.forEach((item) => {
            console.log(item);
        });
    }
}

const cart4 = new ShoppingCart5();
cart4.filterItems(4); // Çıktı: "Fiyata göre filtrelenmiş ürünler:" { name: "Elma", price: 3 }

console.clear();

//10. Sıralama Metodu (sort)
class ShoppingCart6 {
    constructor() {
        this.items = [{ name: "Elma", price: 3 }, { name: "Armut", price: 5 }];
    }

    sortItems() {
        this.items.sort((a, b) => a.price - b.price);
        console.log("Sıralanmış ürünler:");
        this.items.forEach((item) => {
            console.log(item);
        });
    }
}

const cart5 = new ShoppingCart6();
cart5.sortItems(); // Çıktı: "Sıralanmış ürünler:" { name: "Elma", price: 3 } { name: "Armut", price: 5 }

console.clear();

//11. Kopyalama Metodu (clone)
class ShoppingCart7 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    cloneCart() {
        const clonedCart = new ShoppingCart7();
        clonedCart.items = [...this.items];
        console.log("Kopyalanmış sepet:");
        console.log(clonedCart.items);
    }
}

const cart6 = new ShoppingCart7();
cart6.cloneCart(); // Çıktı: "Kopyalanmış sepet:" ["Elma", "Armut"]

console.clear();

//12. Karşılaştırma Metodu (equals)
class ShoppingCart8 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    equalsCart(otherCart) {
        if (this.items.length !== otherCart.items.length) {
            console.log("Sepetler farklı.");
            return;
        }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] !== otherCart.items[i]) {
                console.log("Sepetler farklı.");
                return;
            }
        }

        console.log("Sepetler aynı.");
    }
}

const cart7 = new ShoppingCart8();
const cart8 = new ShoppingCart8();
cart7.equalsCart(cart8); // Çıktı: "Sepetler aynı."

console.clear();

//13. Toplama Metodu (sum)
class ShoppingCart9 {
    constructor() {
        this.items = [3, 5];
    }

    sumItems() {
        const sum = this.items.reduce((total, item) => total + item, 0);
        console.log(`Toplam: ${sum}`);
    }
}

const cart9 = new ShoppingCart9();
cart9.sumItems(); // Çıktı: "Toplam: 8"

console.clear();

//14. Ortalama Hesaplama Metodu (average)

class ShoppingCart10 {

    constructor() {
        this.items = [3, 5];
    }

    averageItems() {
        const sum = this.items.reduce((total, item) => total + item, 0);
        const average = sum / this.items.length;
        console.log(`Ortalama: ${average}`);
    }
}

const cart10 = new ShoppingCart10();
cart10.averageItems(); // Çıktı: "Ortalama: 4"

console.clear();

//15. İlk veya Son Öğeyi Alma Metodu (getFirst ve getLast)
class ShoppingCart11 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    getFirstItem() {
        console.log(`İlk ürün: ${this.items[0]}`);
    }

    getLastItem() {
        console.log(`Son ürün: ${this.items[this.items.length - 1]}`);
    }
}

const cart11 = new ShoppingCart11();
cart11.getFirstItem(); // Çıktı: "İlk ürün: Elma"
cart11.getLastItem(); // Çıktı: "Son ürün: Armut"

console.clear();

//16. Ters Çevirme Metodu (reverse)
class ShoppingCart12 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    reverseItems() {
        this.items.reverse();
        console.log("Ters çevrilmiş ürünler:");
        console.log(this.items);
    }
}

const cart12 = new ShoppingCart12();
cart12.reverseItems(); // Çıktı: "Ters çevrilmiş ürünler:" ["Armut", "Elma"]

console.clear();

//17. Bir Metin veya Koleksiyonun İçinde Belirli Bir Değerin Bulunup Bulunmadığını Kontrol Etme (includes)
class ShoppingCart13 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    hasItem(item) {
        if (this.items.includes(item)) {
            console.log(`${item} sepetinizde bulunmaktadır.`);
        } else {
            console.log(`${item} sepetinizde bulunmamaktadır.`);
        }
    }
}

const cart13 = new ShoppingCart13();
cart13.hasItem("Elma"); // Çıktı: "Elma sepetinizde bulunmaktadır."

console.clear();

//18. Bir Koleksiyonun Uzunluğunu veya Öğelerin Sayısını Alma (size veya length)
class ShoppingCart14 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    getItemsCount() {
        console.log(`Toplam ürün sayısı: ${this.items.length}`);
    }
}

const cart14 = new ShoppingCart14();
cart14.getItemsCount(); // Çıktı: "Toplam ürün sayısı: 2"

console.clear();

//19. Rastgele Bir Öğeyi Alma (getRandomItem)
class ShoppingCart15 {
    constructor() {
        this.items = ["Elma", "Armut"];
    }

    getRandomItem() {
        const randomIndex = Math.floor(Math.random() * this.items.length);
        console.log(`Rastgele ürün: ${this.items[randomIndex]}`);
    }
}

const cart15 = new ShoppingCart15();
cart15.getRandomItem(); // Çıktı: "Rastgele ürün: Armut"

console.clear();

//20. Bir Koleksiyonun Belirli Bir Aralığını Alma (slice)

class ShoppingCart16 {
    constructor() {
        this.items = ["Elma", "Armut", "Muz", "Karpuz"];
    }

    getItemsInRange(start, end) {
        const itemsInRange = this.items.slice(start, end);
        console.log("Belirli aralıktaki ürünler:");
        console.log(itemsInRange);
    }
}

const cart16 = new ShoppingCart16();
cart16.getItemsInRange(1, 3); // Çıktı: "Belirli aralıktaki ürünler:" ["Armut", "Muz"]

console.clear();

//21. Bir Koleksiyonun Belirli Bir Değerle Doldurulması (fill)

class ShoppingCart17 {
    constructor() {
        this.items = ["Elma", "Armut", "Muz"];
    }

    fillItems(value) {
        this.items.fill(value);
        console.log("Doldurulmuş ürünler:");
        console.log(this.items);
    }
}

const cart17 = new ShoppingCart17();
cart17.fillItems("Karpuz"); // Çıktı: "Doldurulmuş ürünler:" ["Karpuz", "Karpuz", "Karpuz"]

console.clear();
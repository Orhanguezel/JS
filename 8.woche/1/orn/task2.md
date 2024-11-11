İşte yukarıdaki konulara benzer şekilde zorluk seviyesi artırılmış ve detaylandırılmış 5 farklı sınıf yapısına dayalı sorular:

---

### 1. Soru: **Library ve Book Sınıfları**
Bir kütüphane sistemi için `Library` ve `Book` adlı iki sınıf oluşturun.

#### Gereksinimler:
- **Book** sınıfı:
  - Özellikler:
    - `title`: Kitap başlığı
    - `author`: Kitabın yazarı
    - `year`: Yayın yılı
  - Metodlar:
    - `getInfo()`: Kitabın başlık, yazar ve yıl bilgisini döndürmeli.

- **Library** sınıfı:
  - Özellikler:
    - `books`: Kütüphanedeki kitapları tutan bir dizi (başlangıçta boş olmalı).
  - Metodlar:
    - `addBook(book)`: Bir kitabı `books` dizisine eklemeli.
    - `findBookByTitle(title)`: Başlık ile eşleşen kitabı bulup geri döndürmeli.
    - `listBooksByAuthor(author)`: Verilen yazarın kitaplarını listelemeli.

#### Örnek:
```js
const library = new Library();
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Animal Farm", "George Orwell", 1945);

library.addBook(book1);
library.addBook(book2);

console.log(library.findBookByTitle("1984")); // 1984 kitabının bilgilerini döndürür
console.log(library.listBooksByAuthor("George Orwell")); // George Orwell'ın tüm kitaplarını listeler
```

---

### 2. Soru: **Product ve Inventory Sınıfları**
Bir e-ticaret sistemi için `Product` ve `Inventory` adlı iki sınıf oluşturun.

#### Gereksinimler:
- **Product** sınıfı:
  - Özellikler:
    - `name`: Ürün adı
    - `price`: Ürün fiyatı
    - `stock`: Stok sayısı
  - Metodlar:
    - `updateStock(quantity)`: Ürün stokunu günceller.
    - `getInfo()`: Ürün bilgilerini (ad, fiyat, stok) döndürür.

- **Inventory** sınıfı:
  - Özellikler:
    - `products`: Ürünleri tutan bir dizi (başlangıçta boş olmalı).
  - Metodlar:
    - `addProduct(product)`: Bir ürünü `products` dizisine ekler.
    - `findProductByName(name)`: İsme göre ürün arar.
    - `listOutOfStock()`: Stokta olmayan tüm ürünleri listeler.

#### Örnek:
```js
const inventory = new Inventory();
const product1 = new Product("Laptop", 1500, 10);
const product2 = new Product("Mouse", 20, 0);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.findProductByName("Laptop")); // Laptop bilgilerini döndürür
console.log(inventory.listOutOfStock()); // Stokta olmayan ürünleri listeler
```

---

### 3. Soru: **Student ve Course Sınıfları**
Bir öğrenci yönetim sistemi için `Student` ve `Course` adlı iki sınıf oluşturun.

#### Gereksinimler:
- **Student** sınıfı:
  - Özellikler:
    - `name`: Öğrenci adı
    - `id`: Öğrenci numarası
  - Metodlar:
    - `getInfo()`: Öğrenci adı ve numarasını döndürür.

- **Course** sınıfı:
  - Özellikler:
    - `courseName`: Dersin adı
    - `students`: Derse kayıtlı öğrenciler dizisi
  - Metodlar:
    - `addStudent(student)`: Derse öğrenci ekler.
    - `listStudents()`: Derse kayıtlı tüm öğrencileri listeler.
    - `findStudentById(id)`: Öğrenci numarası ile öğrenci arar.

#### Örnek:
```js
const course = new Course("Mathematics");
const student1 = new Student("Alice", "1234");
const student2 = new Student("Bob", "5678");

course.addStudent(student1);
course.addStudent(student2);

console.log(course.listStudents()); // Dersteki öğrencileri listeler
console.log(course.findStudentById("1234")); // Alice bilgilerini döndürür
```

---

### 4. Soru: **Account ve Bank Sınıfları**
Bir banka sistemi için `Account` ve `Bank` adlı iki sınıf oluşturun.

#### Gereksinimler:
- **Account** sınıfı:
  - Özellikler:
    - `accountNumber`: Hesap numarası
    - `owner`: Hesap sahibinin adı
    - `balance`: Hesap bakiyesi
  - Metodlar:
    - `deposit(amount)`: Hesaba para yatırır.
    - `withdraw(amount)`: Hesaptan para çeker, yetersiz bakiye durumunda uyarı verir.

- **Bank** sınıfı:
  - Özellikler:
    - `accounts`: Bankadaki hesapları tutan dizi
  - Metodlar:
    - `addAccount(account)`: Yeni bir hesap ekler.
    - `findAccount(accountNumber)`: Hesap numarası ile hesap arar.
    - `totalAssets()`: Bankadaki toplam bakiye miktarını hesaplar.

#### Örnek:
```js
const bank = new Bank();
const account1 = new Account("123456", "Ali", 1000);
const account2 = new Account("654321", "Veli", 500);

bank.addAccount(account1);
bank.addAccount(account2);

console.log(bank.findAccount("123456")); // Ali'nin hesap bilgilerini döndürür
console.log(bank.totalAssets()); // Bankadaki toplam parayı hesaplar
```

---

### 5. Soru: **Vehicle ve Garage Sınıfları**
Bir araç yönetim sistemi için `Vehicle` ve `Garage` adlı iki sınıf oluşturun.

#### Gereksinimler:
- **Vehicle** sınıfı:
  - Özellikler:
    - `licensePlate`: Araç plakası
    - `brand`: Araç markası
    - `year`: Üretim yılı
  - Metodlar:
    - `getInfo()`: Araç bilgilerini döndürür.

- **Garage** sınıfı:
  - Özellikler:
    - `vehicles`: Garajdaki araçları tutan dizi
  - Metodlar:
    - `addVehicle(vehicle)`: Yeni bir araç ekler.
    - `findVehicleByLicense(licensePlate)`: Plakaya göre araç arar.
    - `listVehiclesOlderThan(year)`: Verilen yıldan daha eski tüm araçları listeler.

#### Örnek:
```js
const garage = new Garage();
const vehicle1 = new Vehicle("34AB123", "Toyota", 2010);
const vehicle2 = new Vehicle("34CD456", "Honda", 2005);

garage.addVehicle(vehicle1);
garage.addVehicle(vehicle2);

console.log(garage.findVehicleByLicense("34AB123")); // Toyota bilgilerini döndürür
console.log(garage.listVehiclesOlderThan(2008)); // 2008'den eski tüm araçları listeler
```

---

Bu sorular sayesinde nesne tabanlı programlama kavramlarını pekiştirebilir, `class`, `constructor`, `method`, ve `getter/setter` gibi özellikleri uygulamalı olarak öğrenebilirsiniz.